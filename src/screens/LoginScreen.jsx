import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SpotifyIcons from '../assets/icons/spotifyIcon';
import {Colors} from '../thema/colors';
import GoogleIcon from '../assets/icons/googleIcon';
import FaceIcon from '../assets/icons/faceIcon';
import AppleIcon from '../assets/icons/appleIcon';

const LoginScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <SpotifyIcons />
            <Text style={styles.text}>Millions of Songs Free on Spotify </Text>
          </View>
          <View style={styles.btncontainer}>
            <TouchableOpacity style={styles.btns} onPress={()=>navigation.navigate("Main")}>
              <Text style={styles.btnt}>Sign In With Spotify</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.icon}>
                <GoogleIcon />
              </View>
              <Text style={styles.btntext}>Continue With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={[styles.icon,{backgroundColor:"white",borderRadius:20}]}>
                <FaceIcon />
              </View>
              <Text style={styles.btntext}>Continue With FaceBook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.icon}>
                <AppleIcon />
              </View>
              <Text style={styles.btntext}>Continue With Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
    marginTop: 35,
    textAlign: 'center',
    lineHeight: 55,
    width: '85%',
  },
  btncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  btns: {
    width: '85%',
    backgroundColor: Colors.SPOTIFYGREEN,
    borderRadius: 100,
    paddingVertical: 15,
  },
  btnt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    borderRadius: 50,
  },
  btn: {
    width: '85%',
    borderColor: Colors.SLATEGRAY,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 15,
  },
  btntext: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',

    borderRadius: 50,
  },
  icon: {
    position: 'absolute',
    left: 20,
  },
});
