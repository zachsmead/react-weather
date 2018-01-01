const API_KEY = 'f5a00ad6898421666d0f4592dfa5c987';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// in ES6, backticks (``) let you use string interpolation with ${}

export default FETCH_WEATHER = 'FETCH_WEATHER' // here we are setting a variable
// FETCH_WEATHER to the string 'FETCH_WEATHER' and then exporting it to be used
// elsewhere (below and in our reducer). Why do we bother doing this instead of
// just using a string below? Because with a string, in case someone were to accidentally
// make a typo, for example 'FETCH_WEATHE' in the reducer, that would be a huge bug
// - setting the action type as a variable makes it so that we don't have to
// worry about the contents of the string and the action type can be referenced
// as long as it's consistent in both locations.


export function fetchWeather() {
  type: FETCH_WEATHER
}
