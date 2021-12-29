const { Page, test, expect } = require("@playwright/test");
const { getTestId, isTestAll, loginUser } = require("./utils");

test.setTimeout(45 * 1000);
/**
 * @type {Page}
 */
var page = null;
global.page = null;
test.beforeEach(async ({ page: _page, baseURL }) => {
  global.page = _page;
  page = _page;
  await page.goto(baseURL);
  await page.waitForSelector(getTestId("routeHeader"));
});

if (!isTestAll()) test.skip();

const plans = [
  { key: "monthly", title: "Monthly", coupon: "INTRO50" },
  { key: "yearly", title: "Yearly", coupon: "YEAR15" },
];
const pricingItems = ["subtotal", "tax", "discount", "total"];

function getPaddleTestId(id) {
  return `[data-testid="${id}"]`;
}

async function getPrices() {
  let prices = [];
  for (let item of pricingItems) {
    const price = await page.innerText(getTestId(`checkout-price-${item}`));
    prices.push(`${item}: ${price}`);
  }
  return prices;
}

/**
 *
 * @param {string} prices
 */
function roundOffPrices(prices) {
  return prices.replaceAll(/(\d+.\d+)/gm, (str, price) => {
    price = parseFloat(price);
    return isNaN(price) ? 0 : Math.ceil(Math.round(price) / 10) * 10;
  });
}

async function getPaddleFrame(selector = "inlineComplianceBarContainer") {
  await page.waitForSelector(`.checkout-container iframe`);

  const paddleFrame = await (
    await page.$(".checkout-container iframe")
  ).contentFrame();
  await paddleFrame.waitForSelector(getPaddleTestId(selector));

  return paddleFrame;
}

async function changeCountry(paddleFrame, countryCode, pinCode) {
  await paddleFrame.selectOption(
    getPaddleTestId("countriesSelect"),
    countryCode,
    { force: true }
  );

  if (pinCode)
    await paddleFrame.fill(getPaddleTestId("postcodeInput"), pinCode);

  await paddleFrame.click(getPaddleTestId("locationFormSubmitButton"));

  await paddleFrame.waitForSelector(
    getPaddleTestId("inlineComplianceBarContainer")
  );
}

async function forEachPlan(action) {
  for (let i = 0; i < plans.length; ++i) {
    const plan = plans[i];

    const planTestId = getTestId(`checkout-plan-${plan.key}`);
    await page.isEnabled(planTestId, { timeout: 10000 });

    await page.click(planTestId);

    await action(plan);

    if (i < plans.length - 1) {
      await page.click(getTestId("checkout-plan-change"));
    }
  }
}

test("change plans", async ({ page }) => {
  await loginUser();

  await page.goto("/#/buy/");

  await forEachPlan(async (plan) => {
    await expect(
      page.innerText(getTestId("checkout-plan-title"))
    ).resolves.toBe(plan.title);
  });
});

test("confirm plan prices", async ({ page }) => {
  await loginUser();

  await page.goto("/#/buy/");

  await forEachPlan(async (plan) => {
    const prices = roundOffPrices((await getPrices()).join("\n"));
    expect(prices).toMatchSnapshot(`checkout-${plan.key}-prices.txt`);
  });
});

test("changing locale should show localized prices", async ({ page }) => {
  await loginUser();

  await page.goto("/#/buy/");

  await forEachPlan(async (plan) => {
    const paddleFrame = await getPaddleFrame();

    await changeCountry(paddleFrame, "IN", "110001");

    const prices = roundOffPrices((await getPrices()).join("\n"));
    expect(prices).toMatchSnapshot(`checkout-${plan.key}-IN-prices.txt`);
  });
});

test("applying coupon should change discount & total price", async ({ page }, {
  setTimeout,
}) => {
  setTimeout(60 * 1000);

  await loginUser();

  await page.goto("/#/buy/");

  await forEachPlan(async (plan) => {
    await getPaddleFrame();

    await page.fill(getTestId("checkout-coupon-code"), plan.coupon);
    await page.press(getTestId("checkout-coupon-code"), "Enter");

    await getPaddleFrame();

    const prices = roundOffPrices((await getPrices()).join("\n"));

    expect(prices).toMatchSnapshot(
      `checkout-${plan.key}-discounted-prices.txt`
    );
  });
});

test("apply coupon through url", async ({ page }) => {
  await loginUser();

  for (let plan of plans) {
    await page.goto(`/#/buy/${plan.key}/${plan.coupon}`);

    await getPaddleFrame();

    const prices = roundOffPrices((await getPrices()).join("\n"));
    expect(prices).toMatchSnapshot(
      `checkout-${plan.key}-discounted-prices.txt`
    );
  }
});

test("apply coupon after changing country", async ({ page }, {
  setTimeout,
}) => {
  setTimeout(60 * 1000);

  await loginUser();

  await page.goto("/#/buy/");

  await forEachPlan(async (plan) => {
    const paddleFrame = await getPaddleFrame();

    await changeCountry(paddleFrame, "IN", "110001");

    await page.fill(getTestId("checkout-coupon-code"), plan.coupon);
    await page.press(getTestId("checkout-coupon-code"), "Enter");

    await getPaddleFrame();

    const prices = roundOffPrices((await getPrices()).join("\n"));
    expect(prices).toMatchSnapshot(
      `checkout-${plan.key}-IN-discounted-prices.txt`
    );
  });
});