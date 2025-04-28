import {SCREENS} from '../utils/routes';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import SongsScreen from '../screens/SongsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import {Colors} from '../thema/colors';
import HomeFilled from '../assets/icons/homeFilled';
import Home from '../assets/icons/home';
import SearchFilledIcon from '../assets/icons/searchFilledIcon';
import SearchIcon from '../assets/icons/searchIcon';
import ProgileFilledIcon from '../assets/icons/ProlileFilledIcon';
import ProfileIcon from '../assets/icons/profileIcon';
import {Text} from 'react-native';

const {HOME, SONGINFO, SONGS, PROFILE, LOGIN, SEARCH} = SCREENS;

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
         screenOptions={{
        tabBarStyle: {
          backgroundColor: '#131624',
          shadowOpacity: 0.3,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: -10,
          },
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Colors.SPOTIFYGREEN : 'gray',
                fontSize: 20,
                fontWeight: '600',
                marginTop: 5,
              }}>
              Home
            </Text>
          ),
          tabBarLabelStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
            marginTop: 5,
          },
          tabBarIcon: ({focused}) => (focused ? <HomeFilled /> : <Home />),
        }}
        name={HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Colors.SPOTIFYGREEN : 'gray',
                fontSize: 20,
                fontWeight: '600',
                marginTop: 5,
              }}>
              Search
            </Text>
          ),
          tabBarLabelStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
            marginTop: 5,
          },
          tabBarIcon: ({focused}) =>
            focused ? <SearchFilledIcon /> : <SearchIcon />,
        }}
        name={SEARCH}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Colors.SPOTIFYGREEN : 'gray',
                fontSize: 20,
                fontWeight: '600',
                marginTop: 5,
              }}>
              Profile
            </Text>
          ),
          tabBarLabelStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
            marginTop: 5,
          },
          tabBarIcon: ({focused}) =>
            focused ? <ProgileFilledIcon /> : <ProfileIcon />,
        }}
        name={PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name={SONGINFO} component={SongInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
