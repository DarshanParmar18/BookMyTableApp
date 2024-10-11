const serverBaseURL =
  'https://book-my-table-app-api-d7gwc8hzasbqggfm.eastus-01.azurewebsites.net/';
const GOOGLE_MAPS_API = 'AIzaSyAKp_QAST_H9MmdbtMF7CUxAVO_7Q465B4';

export const environment = {
  evn_name: 'prod',
  production: true,
  apiUrl: serverBaseURL,
  endpoints: {
    getRestaurants: `${serverBaseURL}api/Restaurant/restaurants`,
    getRestaurantBranches: `${serverBaseURL}/api/Restaurant/branches`,
    getDinningTables: `${serverBaseURL}api/Restaurant/dinningTables`,
  },
};
