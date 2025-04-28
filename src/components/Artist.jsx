import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../thema/colors';

const Artist = ({artistList}) => {
 // console.log('xartist', artistList);
  return (
    <ScrollView
      contentContainerStyle={{gap:20}}
      horizontal={true}
      style={styles.container}>
      {artistList.map((artist, index) => (
        <TouchableOpacity key={index} style={styles.box}>
          <Image source={{uri: artist.avatar}} style={styles.image} />
          <Text style={styles.text}>
            {artist.name.length > 12
              ? `${artist.name[0]}.${artist.name.split(' ')[1]}`
              : artist.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Artist;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  box: {
    gap:20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  text: {
    color: Colors.SLATEGRAY,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
    textAlign: 'center',
   
  },
});
