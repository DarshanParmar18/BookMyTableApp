// const localhostBaseURL = 'https://localhost:7134/';
const localhostBaseURL =
  'https://book-my-table-app-api-d7gwc8hzasbqggfm.eastus-01.azurewebsites.net/';
const GOOGLE_MAPS_API = 'AIzaSyAKp_QAST_H9MmdbtMF7CUxAVO_7Q465B4';

export const environment = {
  evn_name: 'dev',
  production: false,
  apiUrl: localhostBaseURL,
  endpoints: {
    // getRestaurants: `${localhostBaseURL}api/Restaurant/restaurants`,
    getRestaurants: `https://run.mocky.io/v3/a5c15d32-00bb-4cff-914a-b8e9ba88bf1d`,
    getRestaurantBranches: `${localhostBaseURL}api/Restaurant/branches`,
    getDinningTables: `${localhostBaseURL}api/Restaurant/dinningTables`,
  },
  MAPS_API_KEY: GOOGLE_MAPS_API,
};
