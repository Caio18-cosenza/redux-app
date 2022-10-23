import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

interface VideoProps {
  activeModule: any;
  activeLesson: any;
}

const Video = ({ activeModule, activeLesson }: VideoProps) => {
  return (
    <View style={{}}>
      <Text style={{}}> Módulo {activeModule.title} </Text>
      <Text style={{}}> Aula {activeLesson.title} </Text>
    </View>
  );
};

export default connect((state: any) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
