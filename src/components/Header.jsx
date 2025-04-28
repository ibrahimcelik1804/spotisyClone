import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowBack from '../assets/icons/arrowBack';

const Header = () => {
  return (
    <View>
      <ArrowBack />

      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
