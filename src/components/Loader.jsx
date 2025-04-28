import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../thema/colors'

const Loader = () => {
  return (
    <SafeAreaView style={{flex:1,marginTop:250}} >
     <ActivityIndicator size="large"  color={Colors.WHITE} />
    </SafeAreaView>
  )
}

export default Loader

const styles = StyleSheet.create({})