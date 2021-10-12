// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //NewsApi: 'https://newsapi.org/v2/everything?q=+energy+sustainability&sortBy=popularity&apiKey=a8b31036bef04509b6c03193f6acb6d3',
  NewsApi: 'https://gnews.io/api/v4/search?q=energy+sustainability&token=6cf3e4b0d8356ddd9768dd71b41a01d6',
  WeatherApi:'https://api.weatherbit.io/v2.0/current?',
  WeatherKey: '&key=59cacdb4dc6845ed92ec5b45ac97123d',
  production: false
};

export const serviceBaseUrl = 'http://18.169.122.251:9010/';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
