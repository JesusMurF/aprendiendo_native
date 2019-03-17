export default async function getMoviesFromApiAsync() {
  const response = await fetch('https://facebook.github.io/react-native/movies.json')
  return response;
}