export const AlbumsOptions = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: 'Türkiyede Populer',
    type: 'albums',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5',
  },
  headers: {
    'x-rapidapi-key': 'f1aaeda281mshb7ee696e5ae3b95p1b41b5jsn88b79a740bac',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com',
  },
};
export const ArtistsOptions = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: 'Türkiye de populer',
    type: 'artists',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5',
  },
  headers: {
    'x-rapidapi-key': 'f1aaeda281mshb7ee696e5ae3b95p1b41b5jsn88b79a740bac',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com',
  },
};

export const ProfileOptions = {
  method: 'GET',
  url: 'https://spotify-scraper3.p.rapidapi.com/api/users/playlists',
  params: {
    user_id: 'spotify',
    offset: '0',
    limit: '50',
  },
  headers: {
    'x-rapidapi-key': 'f1aaeda281mshb7ee696e5ae3b95p1b41b5jsn88b79a740bac',
    'x-rapidapi-host': 'spotify-scraper3.p.rapidapi.com',
  },
};

export const SearchOptions = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/search',
  params: {
    term: 'pop',
    locale: 'tr-TR',
    offset: '0',
    limit: '5',
  },
  headers: {
    'x-rapidapi-key': '6b4f463566msha961d0f9af61c0ep1b8c00jsn66d76a41336d',
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
  },
};
