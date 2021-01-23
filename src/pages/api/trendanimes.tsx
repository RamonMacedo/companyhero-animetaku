async function getTrendingAnimes(request, response) {
  const data = await fetch('https://kitsu.io/api/edge/trending/anime');
  const responseJson = await data.json();

  response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

  response.json(responseJson)
  
}

export default getTrendingAnimes;