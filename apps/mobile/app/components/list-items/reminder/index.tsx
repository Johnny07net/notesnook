/*
This file is part of the Notesnook project (https://notesnook.com/)

Copyright (C) 2022 Streetwriters (Private) Limited

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import React from "react";
import { View } from "react-native";
import { notesnook } from "../../../../e2e/test.ids";
import type { Reminder } from "../../../services/notifications";
import { useThemeStore } from "../../../stores/use-theme-store";
import { SIZE } from "../../../utils/size";
import { Properties } from "../../properties";
import { IconButton } from "../../ui/icon-button";
import Heading from "../../ui/typography/heading";
import Paragraph from "../../ui/typography/paragraph";
import SelectionWrapper from "../selection-wrapper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ReminderSheet from "../../sheets/reminder";
import { formatReminderTime } from "../../../utils/time/index";

const ReminderItem = React.memo(
  ({ item, index }: { item: Reminder; index: number }) => {
    const colors = useThemeStore((state) => state.colors);
    const openReminder = () => {
      ReminderSheet.present(item);
    };
    return (
      <SelectionWrapper
        //@ts-ignore
        index={index}
        height={100}
        onPress={openReminder}
        item={item}
      >
        <View>
          <Heading
            numberOfLines={1}
            style={{
              flexWrap: "wrap"
            }}
            size={SIZE.md}
          >
            {item.title}
          </Heading>

          {item.description ? (
            <Paragraph
              style={{
                flexWrap: "wrap"
              }}
              numberOfLines={2}
            >
              {item.description}
            </Paragraph>
          ) : null}

          <View
            style={{
              flexDirection: "row"
            }}
          >
            {item.mode === "repeat" ? (
              <View
                style={{
                  backgroundColor: colors.nav,
                  borderRadius: 5,
                  flexDirection: "row",
                  paddingHorizontal: 5,
                  paddingVertical: 3,
                  alignItems: "center",
                  marginTop: 5,
                  justifyContent: "flex-start",
                  alignSelf: "flex-start",
                  marginRight: 10
                }}
              >
                <Icon name="reload" size={SIZE.md} color={colors.accent} />
                <Paragraph
                  size={SIZE.xs + 1}
                  color={colors.icon}
                  style={{ marginLeft: 5 }}
                >
                  {item.recurringMode.slice(0, 1).toUpperCase() +
                    item.recurringMode.slice(1) +
                    "ly"}
                </Paragraph>
              </View>
            ) : null}
            <View
              style={{
                backgroundColor: colors.nav,
                borderRadius: 5,
                flexDirection: "row",
                paddingHorizontal: 5,
                paddingVertical: 3,
                alignItems: "center",
                marginTop: 5,
                justifyContent: "flex-start",
                alignSelf: "flex-start"
              }}
            >
              {item.date ? (
                <>
                  <Icon
                    name="clock-outline"
                    size={SIZE.md}
                    color={colors.accent}
                  />
                  <Paragraph
                    size={SIZE.xs + 1}
                    color={colors.icon}
                    style={{ marginLeft: 5 }}
                  >
                    {formatReminderTime(item)}
                  </Paragraph>
                </>
              ) : null}
            </View>
          </View>
        </View>
        <IconButton
          testID={notesnook.listitem.menu}
          color={colors.pri}
          name="dots-horizontal"
          size={SIZE.xl}
          onPress={() => Properties.present(item)}
          customStyle={{
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 100,
            alignItems: "center"
          }}
        />
      </SelectionWrapper>
    );
  },
  (prev, next) => {
    if (prev.item?.dateModified !== next.item?.dateModified) {
      return false;
    }
    return true;
  }
);
ReminderItem.displayName = "ReminderItem";

export default ReminderItem;