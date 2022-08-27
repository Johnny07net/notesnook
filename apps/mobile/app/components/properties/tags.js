import { View } from "react-native";
import { useThemeStore } from "../../stores/use-theme-store";
import { eSendEvent } from "../../services/event-manager";
import { db } from "../../common/database";
import { eOpenTagsDialog } from "../../utils/events";
import { SIZE } from "../../utils/size";
import { sleep } from "../../utils/time";
import { Button } from "../ui/button";
import { TaggedNotes } from "../../screens/notes/tagged";

export const Tags = ({ item, close }) => {
  const colors = useThemeStore((state) => state.colors);

  return item.id ? (
    <View
      style={{
        marginTop: 5,
        marginBottom: 5
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center"
        }}
      >
        <Button
          onPress={async () => {
            close();
            await sleep(300);
            eSendEvent(eOpenTagsDialog, item);
          }}
          buttonType={{
            text: colors.accent
          }}
          title="Add tags"
          type="grayBg"
          icon="plus"
          iconPosition="right"
          height={25}
          fontSize={SIZE.xs + 1}
          style={{
            marginRight: 5,
            borderRadius: 100,
            paddingHorizontal: 8
          }}
        />
        {item.tags.map((item) =>
          item ? <TagItem key={item} tag={item} close={close} /> : null
        )}
      </View>
    </View>
  ) : null;
};

const TagItem = ({ tag, close }) => {
  const onPress = async () => {
    let tags = db.tags.all;
    let _tag = tags.find((t) => t.title === tag);
    TaggedNotes.navigate(_tag, true);
    await sleep(300);
    close();
  };

  const style = {
    paddingHorizontal: 8,
    marginVertical: 5,
    borderRadius: 100,
    marginRight: 5
  };

  return (
    <Button
      onPress={onPress}
      title={"#" + tag}
      // buttonType={{
      //   text: colors.accent
      // }}
      type="grayBg"
      height={25}
      fontSize={SIZE.xs + 1}
      style={style}
    />
  );
};