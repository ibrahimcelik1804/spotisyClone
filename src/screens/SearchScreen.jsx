import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ArrowBack from '../assets/icons/arrowBack';
import SearchIcon from '../assets/icons/searchIcon';
import {SearchOptions} from '../utils/apiOptions';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import SongsCard from '../components/SongsCard';
import Modal from 'react-native-modal';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import DownArrow from '../assets/icons/arrowDown';
import ImageIcon from '../assets/icons/imgIcon';
import HeartEmpty from '../assets/icons/heartEmpty';
import {Colors} from '../thema/colors';
import TenBack from '../assets/icons/tenBack';
import TenNext from '../assets/icons/tenNext.';
import PauseIcon from '../assets/icons/pauseIcon';
import PlayIcon from '../assets/icons/playIcon';
import Change from '../assets/icons/change';
import Replace from '../assets/icons/repalce';
import Left from '../assets/icons/left';
import Right from '../assets/icons/right';
import Play from '../assets/icons/play';

const SearchScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [songs, setSongs] = useState([]);
  const [searchText, setSearchText] = useState('Türkiye de Popüler Müzikler');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const progress = useProgress();

  const handleSearch = async () => {
    const options = SearchOptions;
    options.params.term = searchText;
    try {
      const response = await axios.request(options);
      const formattedSongs = response.data.tracks.hits.map(song => song.track);
      console.log(formattedSongs, 'SONGg');
      setSongs(formattedSongs);
    } catch (error) {
      console.log('ERROR', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // track player küütüphanesi aracılıgıyla oynatıcı çalıştır hale getir.
  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();

      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_SEEK_TO,
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePlay = async track => {
    const trackData = {
      id: track.key,
      url: track.hub.actions.find(action => action.type === 'uri').uri,
      title: track.title,
      artist: track.subtitle,
      atwork: track.images.coverart,
    };

    try {
      await TrackPlayer.reset();
      await TrackPlayer.add(trackData);
      await TrackPlayer.play();
      setSelectedTrack(track);
      setModalVisible(true);
      setIsPlaying(true);
    } catch (error) {
      console.log('ERROR', error);
      setError(error.message);
    }
  };

  const formatedTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const SeekBackward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position - 10);
  };
  const seekForward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + 10);
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    handleSearch();
    setupPlayer();
  }, []);

  return (
    <LinearGradient
      colors={['#836e55', '#1f1f1f', '#0d0d0d']}
      locations={[0, 0.3, 1]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 10}}
        style={{marginTop: 70, paddingHorizontal: 15}}>
        <View style={styles.header}>
          <ArrowBack />

          <Pressable style={styles.inputcont}>
            <SearchIcon />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'gray'}
              style={styles.input}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
            />
          </Pressable>
        </View>
        <Text style={styles.title}>
          {searchText.trim() === ''
            ? 'Search Songs'
            : `${searchText} için arama sonuçları`}
        </Text>

        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <FlatList
            scrollEnabled={false}
            nestedScrollEnabled={false}
            contentContainerStyle={{marginTop: 20, gap: 20}}
            data={songs}
            keyExtractor={song => song.key}
            renderItem={({item}) => (
              <SongsCard item={item} handlePlay={handlePlay} />
            )}
          />
        )}
        <Modal
          style={{flex: 1, paddingHorizontal: 10}}
          swipeDirection={'down'}
          onSwipeComplete={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
          isVisible={modalVisible}>
          <LinearGradient
            colors={['#adc3c7', '#94a5b3', '#2c3e50']}
            locations={[0, 0.1, 1]}
            style={{
              flex: 1,
              borderRadius: 30,
              marginTop: 120,
            }}>
            <View style={styles.modal}>
              <View style={styles.headermodal}>
                <TouchableOpacity
                  style={styles.headerbtn}
                  onPress={() => setModalVisible(false)}>
                  <DownArrow />
                </TouchableOpacity>
                <Text style={styles.text}> Track Player</Text>
              </View>
              <View style={styles.imgcontainer}>
                {selectedTrack?.images['coverarthq'] ||
                selectedTrack?.images['coverart'] ? (
                  <Image
                    style={styles.img}
                    source={{
                      uri:
                        selectedTrack?.images['coverarthq'] ||
                        selectedTrack?.images['coverart'],
                    }}
                  />
                ) : (
                  <ImageIcon />
                )}
              </View>
              <View style={styles.box}>
                <View style={styles.infocont}>
                  <Text numberOfLines={3} style={styles.infotitle}>
                    {selectedTrack?.title}
                  </Text>
                  <Text style={styles.infotext}>{selectedTrack?.subtitle}</Text>
                </View>
                <HeartEmpty />
              </View>
              <View style={styles.controls}>
                <View style={styles.progress}>
                  <View
                    style={[
                      styles.progressinner,
                      {
                        width: `${
                          (progress.position / progress.duration) * 100
                        }%`,
                      },
                    ]}></View>
                  <View
                    style={[
                      styles.top,
                      {
                        left: `${
                          (progress.position / progress.duration) * 100
                        }%`,
                      },
                    ]}></View>
                </View>
              </View>
              <View style={styles.time}>
                <Text style={styles.timetext}>
                  {formatedTime(progress.position)}
                </Text>
                <Text style={styles.timetext}>
                  {formatedTime(progress.duration)}
                </Text>
              </View>
              <View style={styles.icons}>
                <TouchableOpacity onPress={SeekBackward} style={styles.back}>
                  <Change />
                </TouchableOpacity>
                <TouchableOpacity onPress={SeekBackward} style={styles.back}>
                  <Left />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlayback} style={styles.play}>
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </TouchableOpacity>
                <TouchableOpacity onPress={seekForward} style={styles.next}>
                  <Right />
                </TouchableOpacity>
                <TouchableOpacity onPress={seekForward} style={styles.next}>
                  <Replace/>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent:"space-between",
    marginHorizontal: 20,
    alignItems:"center"
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    alignItems: 'center',
  },
  timetext: {color: 'white', fontSize: 15, fontWeight: '700'},
  top: {
    position: 'absolute',
    width: 10,
    backgroundColor: 'white',
    height: 10,
    top: -4,
    borderRadius: 5,
  },
  controls: {marginTop: 15},
  progress: {
    width: '100%',
    martop: 10,
    height: 4,
    backgroundColor: 'gray',
  },
  progressinner: {
    height: 4,
    backgroundColor: Colors.SPOTIFYGREEN,
  },

  header: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputcont: {
    backgroundColor: '#282828',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  btn: {},
  btntext: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 25,
  },
  modal: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  headermodal: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
  },
  headerbtn: {
    position: 'absolute',
    left: 15,
  },
  imgcontainer: {
    marginTop: 20,
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 350,
    height: 350,
    borderRadius: 20,
  },
  infocont: {
    justifyContent: 'center',
  },
  infotitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
  },
  infotext: {
    color: Colors.ICEBLUE,
    fontSize: 18,
    fontWeight: '600',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
