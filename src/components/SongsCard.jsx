import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Colors} from '../thema/colors';

const SongsCard = ({item, handlePlay}) => {
  return (
    <TouchableOpacity onPress={() => handlePlay(item)}>
      <View style={styles.container}>
        <Image
          source={{
            uri: item.images.coverarthq || item.images.coverart,
          }}
          style={styles.img}
        />
        <View style={styles.textcont}>
          <Text style={styles.songtitle}>{item.title}</Text>
          <Text style={styles.songtext}>{item.subtitle}</Text>
        </View>
      
      </View>
    </TouchableOpacity>
  );
};

export default SongsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  songtitle: {color: 'white', fontWeight: '900', fontSize: 20},
  songtext: {color: 'gray', fontWeight: '900', fontSize: 18},
  textcont: {
    marginLeft: 20,
    justifyContent: 'space-evenly',
    flex: 1,
  },
  img: {
    height: 90,
    width: 90,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 5,
    borderColor: Colors.SPOTIFYGREEN,
    borderWidth: 3,
    backgroundColor: 'black',
    shadowColor: Colors.SKYBLUE,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.9,
    shadowRadius: 4,

    elevation: 5,
  },
});
