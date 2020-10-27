import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import Button from '../../components/Button/Button'
import { RootTabParamList } from '../../../App'

type ProjectsScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Projects'>

type Props = {
  navigation: ProjectsScreenNavigationProp
}

const ProjectsScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>A place for your projects, in-flight or finished.</Text>
            <StatusBar style="auto" />
            <Button type="primary" size="sm" text="Go to Plans" onPress={()=>navigation.navigate('Plans')}/>
            <Button type="warning" size="lg" text="Add a project" onPress={()=>console.log('hi')}/>
        </View>
    );
  }

export default ProjectsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });