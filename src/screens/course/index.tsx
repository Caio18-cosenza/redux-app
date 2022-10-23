import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import Video from '../../components/Video';
import ListLesson from '../../components/ListLessons';

import store from '../../store';

export type ModulesProps = {
  id: string;
  title: string;
  lessons: [
    {
      id: string;
      title: string;
    },
    {
      id: string;
      title: string;
    }
  ];
};

export default function Course() {
  const [modules, setModules] = useState<any>({
    modules: [],
    activeLesson: {},
  });

  return (
    <Provider store={store}>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 40 }}>
        <Video />
        <ListLesson />
      </View>
    </Provider>
  );
}
