import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, useThemeContext } from './src/context/ThemeContext/ThemeContext'
import Button from './src/components/Button/Button'
export default function App() {
  const theme=useThemeContext()
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Current theme is {theme.warning}</Text>
        <StatusBar style="auto" />
        <Button type="primary" size="sm" text="Words here" onPress={()=>console.log('hi')}/>
        <Button type="warning" size="lg" text="Words here" onPress={()=>console.log('hi')}/>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
