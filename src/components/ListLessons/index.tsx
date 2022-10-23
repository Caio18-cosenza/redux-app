import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { toggleLesson } from '../../store/actions/course';

interface ListLessonProps {
  modules: any;
  dispatch: any;
}

const ListLesson = ({ modules, dispatch }: ListLessonProps) => {
  return (
    <List.Section title='Módulos' style={{ width: '90%' }}>
      {modules !== undefined &&
        modules.map((module: any) => (
          <List.Accordion
            key={module.id}
            title={module.title}
            left={(props) => <Ionicons name='school' size={28} color='black' />}
            titleStyle={{ color: '#000' }}
          >
            {module.lessons.map((lesson: any) => (
              <View
                key={lesson.id}
                style={{
                  marginTop: 20,
                  paddingLeft: 25,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign
                    style={{ marginRight: 5 }}
                    name='checkcircle'
                    size={16}
                    color='#32a852'
                  />
                  <TouchableOpacity
                    onPress={() => dispatch(toggleLesson(module, lesson))}
                  >
                    <Text style={{ color: '#555', fontSize: 16 }}>
                      {' '}
                      {lesson.title}{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </List.Accordion>
        ))}
    </List.Section>
  );
};

export default connect((state: any) => ({ modules: state.course.modules }))(
  ListLesson
);
