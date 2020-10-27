import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import Button from '../../components/Button/Button'
import { RootTabParamList } from '../../../App'

type PlansScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Plans'>

type Props = {
  navigation: PlansScreenNavigationProp
}

const PlansScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>A place for your plans!</Text>
            <StatusBar style="auto" />
            <Button type="primary" size="sm" text="Go to Projects" onPress={()=>navigation.navigate('Projects')}/>
            <Button type="accent" size="sm" text="Add a Plan" onPress={()=>console.log('hi')}/>
        </View>
    );
  }

export default PlansScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });