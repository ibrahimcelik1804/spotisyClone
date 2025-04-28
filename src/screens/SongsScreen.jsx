import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from 'react-native/Libraries/NewAppScreen';

const SongsScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <Header />
    </LinearGradient>
  );
};

export default SongsScreen;

const styles = StyleSheet.create({});
