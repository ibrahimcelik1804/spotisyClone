import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {AlbumContext} from '../context/AlbumContext';
import Loader from '../components/Loader';
import Error from '../components/Error';
import {Colors} from '../thema/colors';
import BoltIcons from '../assets/icons/boltIcons';
import HeartIcon from '../assets/icons/heart';
import {useNavigation} from '@react-navigation/native';
import Star from '../assets/icons/star';
import Moon from '../assets/icons/moon';
import Artist from '../components/Artist';
import {ArtistContext} from '../context/ArtistContext';
import AlbumCard from '../components/AlbumCard';
import {SCREENS} from '../utils/routes';

const HomeScreen = () => {
  const {
    albums,
    loading: albumsLoading,
    error: albumsError,
  } = useContext(AlbumContext);
  const {artists, loading, error} = useContext(ArtistContext);
  // console.log(artists, 'artistsss');
  const navigation = useNavigation();

  const genres = ['Music', 'Podcast & Shows', 'Radio', 'More'];

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      {albumsLoading ? (
        <Loader />
      ) : albumsError ? (
        <Error />
      ) : (
        <ScrollView
          contentContainerStyle={{paddingBottom: 10}}
          style={{marginTop: 70, paddingHorizontal: 15}}>
          {/*header*/}
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Pressable onPress={() => navigation.navigate(SCREENS.PROFILE)}>
                <Image
                  style={styles.img}
                  source={require('../assets//images/profile.png')}
                />
              </Pressable>

              <Text
                style={{
                  color: Colors.SOFTORANGE,
                  letterSpacing: 3,
                  fontSize: 22,
                  fontWeight: '800',
                }}>
                İbrahim ÇELİK
              </Text>
            </View>
            <BoltIcons />
          </View>

          {/* headerBottom */}
          <View>
            <FlatList
              scrollEnabled={false}
              nestedScrollEnabled={false}
              contentContainerStyle={{paddingHorizontal: 0, marginVertical: 10}}
              ItemSeparatorComponent={() => <View style={{width: 4}} />}
              style={{marginBottom: 10}}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              data={genres}
              renderItem={({item}) => (
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(SCREENS.SEARCH)}
                    activeOpacity={0.5}
                    style={styles.genrecontainer}>
                    <Text style={styles.genretext}>{item}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          {/*category  */}
          <View style={styles.container}>
            <View style={styles.main}>
              <Pressable
                style={styles.btnicon}
                onPress={() => navigation.navigate('liked')}>
                <LinearGradient
                  style={{
                    flex: 1,
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                  colors={[Colors.LAVENDERPURPLE, Colors.SKYBLUE]}>
                  <View style={{margin: 10}}>
                    <HeartIcon />
                  </View>
                </LinearGradient>
              </Pressable>

              <Text style={styles.textcate}>Liked Songs</Text>
            </View>
            <View style={styles.main}>
              <Pressable
                style={styles.btnicon}
                onPress={() => navigation.navigate('liked')}>
                <LinearGradient
                  style={{
                    flex: 1,
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                  colors={[Colors.LAVENDERPURPLE, Colors.SKYBLUE]}>
                  <View style={{margin: 10}}>
                    <Star />
                  </View>
                </LinearGradient>
              </Pressable>

              <Text style={styles.textcate}>Turkish Rap</Text>
            </View>
            <View style={styles.main}>
              <Pressable
                style={styles.btnicon}
                onPress={() => navigation.navigate('liked')}>
                <LinearGradient
                  style={{
                    flex: 1,
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                  colors={[Colors.LAVENDERPURPLE, Colors.SKYBLUE]}>
                  <View style={{margin: 10}}>
                    <Moon />
                  </View>
                </LinearGradient>
              </Pressable>

              <Text style={styles.textcate}>Lo - Fi</Text>
            </View>
          </View>
          <Text style={styles.title}>Your Top Artists</Text>
          <ScrollView>
            <Artist artistList={artists} />
          </ScrollView>
          <Text style={styles.title}>Populer Albums</Text>
          <AlbumCard albums={albums} />
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: 15,
  },
  img: {
    objectFit: 'contain',
    height: 75,
    width: 75,
    borderRadius: 40,
    borderColor: '#FF8A65',
  },
  genrecontainer: {
    backgroundColor: Colors.DARKGRAY,
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 5,
    
  },
  genretext: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '700',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dce775',
    borderRadius: 8,
  },
  btnicon: {},
  textcate: {
    color: Colors.BLACK,
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 10,
    letterSpacing: 2,
  },
  container: {
    gap: 15,
  },
});
