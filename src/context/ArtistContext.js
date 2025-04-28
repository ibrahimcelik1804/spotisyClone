import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {ArtistsOptions} from '../utils/apiOptions';

export const ArtistContext = createContext();

export const ArtistProvider = ({children}) => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getArtist = async () => {
    try {
      const options = ArtistsOptions;
      const response = await axios.request(options);
      // console.log(response.data,"34");
      const ArtistsItems = response.data?.artists?.items?.map(item => ({
        uri: item?.data?.uri,
        name: item?.data?.profile?.name,
        avatar: item?.data?.visuals?.avatarImage?.sources[0]?.url,
      }));
      setArtists(ArtistsItems);
    } catch (error) {
     // console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getArtist();
  }, []);

  return (
    <ArtistContext.Provider value={{artists, loading, error}}>
      {children}
    </ArtistContext.Provider>
  );
};
