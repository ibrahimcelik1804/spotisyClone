import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowBack from '../assets/icons/arrowBack';
import {Colors} from '../thema/colors';
import DownArrow from '../assets/icons/downArrow';
import AddList from '../assets/icons/addList';
import Play from '../assets/icons/play';
import MoreVert from '../assets/icons/moreVert';

const SongInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {album} = route.params || {};
  const {artist, coverArt, name, year} = album;

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={styles.scroll}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBack />
          </TouchableOpacity>
        </View>
        <View style={styles.contimg}>
          <Image style={styles.img} source={{uri: coverArt}} />
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>{artist}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Pressable>
              <DownArrow />
            </Pressable>
          </View>
          <View style={styles.right}>
            <Pressable>
              <AddList />
            </Pressable>
            <Pressable>
              <Play />
            </Pressable>
          </View>
        </View>
        <View style={styles.description}>
          <View style={{}}>
            <Text style={styles.text1}>{name}</Text>
            <Text style={styles.text2}>{artist}</Text>
            <Text style={styles.text3}>{year}</Text>
          </View>
          <MoreVert />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
  scroll: {
    marginTop: 60,
    paddingHorizontal: 15,
  },
  contimg: {alignItems: 'center'},
  img: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 20,
  },
  text: {
    color: '#909090',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  right: {
    flexDirection: 'row',
    gap: 30,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  text1: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1,
  },
  text2: {
    color: Colors.SLATEGRAY,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 8,
  },
  text3: {
    color: Colors.SLATEGRAY,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 8,
  },
});
