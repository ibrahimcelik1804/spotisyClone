import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {ProfileOptions} from '../utils/apiOptions';

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request(ProfileOptions);
       // console.log(response?.data?.data.user);
        setProfile(response?.data?.data?.user);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <ProfileContext.Provider value={{profile, loading, error}}>
      {children}
    </ProfileContext.Provider>
  );
};
