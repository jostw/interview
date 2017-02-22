import fetch from 'isomorphic-fetch';

const API_DOMAIN = 'http://hahow-recruit.herokuapp.com';

function fetchApi(api, data = {}) {
  const fetchPromise = fetch(API_DOMAIN + api, data);

  if (data.method === 'PATCH') {
    // Response for `PATCH` is not in json format, return promise directly.
    return fetchPromise;
  }

  return fetchPromise.then(response => response.json());
}

export function fetchHeroesApi() {
  return fetchApi('/heroes');
}

export function fetchHeroProfileApi(heroId) {
  return fetchApi(`/heroes/${heroId}/profile`);
}

export function updateHeroProfileApi(heroId, profile) {
  return fetchApi(`/heroes/${heroId}/profile`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  });
}

export default function rootApi(pathname) {
  const matchingResults = pathname.match(/heroes\/(.+)/);

  if (matchingResults) {
    // Remove tailing slash.
    const heroId = matchingResults[1].replace('/', '');

    return Promise.all([
      fetchHeroesApi(),
      fetchHeroProfileApi(heroId)
    ]).then(values => ({
      hero: {
        list: values[0],
        profile: values[1]
      }
    }));
  }

  return fetchHeroesApi()
    .then(heroes => ({
      hero: {
        list: heroes
      }
    }));
}
