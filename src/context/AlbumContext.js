import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import { AlbumsOptions } from '../utils/apiOptions';

export const AlbumContext = createContext();

export const AlbumProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    

    try {
      const options=AlbumsOptions
      const response = await axios.request(options);

      const albumItems = response.data?.albums?.items?.map(item => ({
        uri: item.data.uri,
        name: item.data.name,
        year: item.data.date.year,
        artist: item.data.artists.items[0].profile.name,
        coverArt: item.data.coverArt.sources[0].url,
      }));

      setAlbums(albumItems);
     // console.log(albumItems,"album Data");
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AlbumContext.Provider value={{albums, loading, error}}>
      {children}
    </AlbumContext.Provider>
  );
};
