import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileContext} from '../context/ProfileContext';
import {useContext} from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import BoltIcons from '../assets/icons/boltIcons';
import AddOne from '../assets/icons/addOne';
import millify from 'millify';
import { Colors } from '../thema/colors';

const ProfileScreen = () => {
  const {profile, error, loading} = useContext(ProfileContext);

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 10}}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 0}}
        style={{marginTop: 70, paddingHorizontal: 15, marginBottom: 90}}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.img}
              source={require('../assets//images/profile.png')}
            />
            <Text style={styles.title}>My Library</Text>
          </View>
          <AddOne />
        </View>

        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <View>
            <Text style={styles.title}>Your Play List</Text>
            <FlatList
             scrollEnabled={false}
             nestedScrollEnabled={false}
              contentContainerStyle={{}}
              data={profile.playlists.slice(0, 15)}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.container}>
                  <Image
                    source={{uri: item.image_url}}
                    style={{width: 75, height: 75, borderRadius: 40,marginRight:20}}
                  />
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.followers}>
                      {millify(item.followers_count)}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  img: {
    objectFit: 'contain',
    height: 50,
    width: 50,
    borderRadius: 40,
    borderColor: '#FF8A65',
    marginRight: 20,
  },
  title: {
    color: 'white',
    letterSpacing: 2,
    fontSize: 22,
    fontWeight: '800',
  },
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  name: {
    color: Colors.SPOTIFYGREEN,
    letterSpacing: 2,
    fontSize: 20,
    fontWeight: '800',
  },
  followers: {
    color: 'gray',
    letterSpacing: 3,
    fontSize: 18,
    fontWeight: '800',
    marginTop:5,
  },
});
