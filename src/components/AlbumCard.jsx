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
import {SCREENS} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';

const AlbumCard = ({albums}) => {
  const navigation = useNavigation();
  //console.log(albums, 'aaa');
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={{gap: 15}}>
        {albums.map((album, index) => (
          <TouchableOpacity
            onPress={() =>
            navigation.navigate(SCREENS.SONGINFO, {album})
            }
            key={index}
            style={styles.box}>
            <Image source={{uri: album.coverArt}} style={styles.image} />
            <Text style={styles.title}>
              {album.name.split(' ').length > 2
                ? `${album.name.split(' ').slice(0, 2).join(' ')}...`
                : album.name}
            </Text>
            <Text style={styles.text}>{album.artist}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  box: {},
  image: {
    width: 160,
    height: 150,
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '700',

    marginTop: 10,
  },
  text: {
    color: Colors.SLATEGRAY,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
  },
});
