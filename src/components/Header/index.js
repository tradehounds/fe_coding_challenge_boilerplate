import React from 'react'
import {
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native'

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>TRADE HOUNDS</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  text: {
    fontSize: 24,
    color: '#eba400',
    fontFamily: 'Oswald-Bold'
  }
})