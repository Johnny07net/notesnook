import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {notesnook} from '../../../e2e/test.ids';
import {useMenuStore, useSettingStore} from '../../provider/stores';
import {DDS} from '../../services/DeviceDetection';
import {eSendEvent} from '../../services/EventManager';
import Navigation from '../../services/Navigation';
import {dWidth} from '../../utils';
import {COLORS_NOTE} from '../../utils/Colors';
import {db} from '../../utils/DB';
import {refreshNotesPage} from '../../utils/Events';
import {SIZE} from '../../utils/SizeUtils';
import {PressableButton} from '../PressableButton';

export const ActionSheetColorsSection = ({item, close}) => {
  const [note, setNote] = useState(item);
  const setColorNotes = useMenuStore(state => state.setColorNotes);
  const dimensions = useSettingStore(state => state.dimensions);
  let width = dimensions.width > 600 ? 600 : 500;

  const changeColor = async (color) => {
    if (note.color === color.name) {
      await db.notes.note(note.id).uncolor();
    } else {
      await db.notes.note(note.id).color(color.name);
    }
    let _note = db.notes.note(note.id).data;
    setNote({..._note});
    setColorNotes();
    Navigation.setRoutesToUpdate([
      Navigation.routeNames.NotesPage,
      Navigation.routeNames.Favorites,
      Navigation.routeNames.Notes
    ]);
    eSendEvent(refreshNotesPage);
  }

  const _renderColor = c => {
    const color = {
      name: c,
      value: COLORS_NOTE[c]
    };

    return (
      <PressableButton
        type="accent"
        accentColor={color.name.toLowerCase()}
        testID={notesnook.ids.dialogs.actionsheet.color(c)}
        key={color.value}
        onPress={() => changeColor(color)}
        customStyle={{
          width: DDS.isTab ? width / 9 : dWidth / 9,
          height: DDS.isTab ? width / 9 : dWidth / 9,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {note.color === color.name ? (
          <Icon name="check" color="white" size={SIZE.lg} />
        ) : null}
      </PressableButton>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
        width: '100%',
        marginVertical: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      {Object.keys(COLORS_NOTE).map(_renderColor)}
    </View>
  );
};
