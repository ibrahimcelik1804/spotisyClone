import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import {Colors} from '../thema/colors';
import {AlbumContext} from '../context/AlbumContext';

const Error = () => {
  const {error} = useContext(AlbumContext);
  //console.log(error);
  return (
    <SafeAreaView style={{flex: 1, marginTop: 250, alignItems: 'center'}}>
      <Text style={{color: Colors.CORALRED,fontSize:25}}>
        {error && 'Veriler çekerken bir hata oluştu.'}
      </Text>
    </SafeAreaView>
  );
};

export default Error;

const styles = StyleSheet.create({});
