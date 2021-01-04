import React, {useCallback, useEffect, useState} from 'react';
import {InteractionManager} from 'react-native';
import {ContainerBottomButton} from '../../components/Container/ContainerBottomButton';
import SimpleList from '../../components/SimpleList';
import {useTracked} from '../../provider';
import {Actions} from '../../provider/Actions';
import {DDS} from '../../services/DeviceDetection';
import {eSendEvent} from '../../services/EventManager';
import Navigation from '../../services/Navigation';
import SearchService from '../../services/SearchService';
import {scrollRef} from '../../utils';
import {db} from '../../utils/DB';
import {eOnLoadNote, eScrollEvent} from '../../utils/Events';
import {tabBarRef} from '../../utils/Refs';
import Storage from '../../utils/storage';

export const Home = ({route, navigation}) => {
  const [state, dispatch] = useTracked();
  const {loading} = state;
  const [localLoad, setLocalLoad] = useState(true);
  const notes = state.notes;
  let pageIsLoaded = false;

  const onFocus = useCallback(() => {
    InteractionManager.runAfterInteractions(() => {
      if (localLoad) {
        setLocalLoad(false);
      }

      updateSearch();
      eSendEvent(eScrollEvent, {name: 'Notes', type: 'in'});

      if (DDS.isLargeTablet()) {
        dispatch({
          type: Actions.CONTAINER_BOTTOM_BUTTON,
          state: {
            onPress: _onPressBottomButton,
          },
        });
      }
    });

    if (!pageIsLoaded) {
      pageIsLoaded = true;
      return;
    }

    Navigation.setHeaderState(
      'notes',
      {
        menu: true,
      },
      {
        heading: 'Notes',
        id: 'notes_navigation',
      },
    );
  }, []);

  const onBlur = useCallback(() => {}, []);

  useEffect(() => {
    navigation.addListener('focus', onFocus);
    navigation.addListener('blur', onBlur);
    return () => {
      pageIsLoaded = false;
      eSendEvent(eScrollEvent, {name: 'Notes', type: 'back'});
      navigation.removeListener('focus', onFocus);
      navigation.removeListener('blur', onBlur);
    };
  }, []);

  useEffect(() => {
    if (navigation.isFocused()) {
      updateSearch();
    }
  }, [notes]);

  const updateSearch = () => {
    SearchService.update({
      placeholder: 'Type a keyword to search in notes',
      data: db?.notes?.all,
      type: 'notes',
    });
  };

  const _onPressBottomButton = async (event) => {
    console.log(await Storage.read("token"));
    
    return;
    if (!DDS.isLargeTablet()) {
      tabBarRef.current?.goToPage(1);
    } else {
      eSendEvent(eOnLoadNote, {type: 'new'});
    }
  };

  return (
    <>
      <SimpleList
        data={notes}
        scrollRef={scrollRef}
        type="notes"
        isHome={true}
        pinned={true}
        loading={loading || localLoad}
        sortMenuButton={true}
        headerProps={{
          heading: 'Notes',
        }}
        placeholderText={`Notes you write appear here`}
        jumpToDialog={true}
        placeholderData={{
          heading: 'Your Notes',
          paragraph: 'You have not added any notes yet.',
          button: 'Add your First Note',
          action: _onPressBottomButton,
          loading: 'Loading your notes.',
        }}
      />

      {!notes || notes.length === 0 ? null : (
        <ContainerBottomButton
          title="Create a new note"
          onPress={_onPressBottomButton}
        />
      )}
    </>
  );
};

export default Home;
