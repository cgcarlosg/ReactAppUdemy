//const gifUrl = api.giphy.com/v1/gifs/random;
const apikey = 'zQrHcrBtgmuJwF6U00i5PbVddUQvyaRS';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion
  .then(resp=> resp.json())
  .then(({data})=> {
//    console.log(data.images.original.url) o
  const {url} = data.images.original;
  console.log(url);

  const img = document.createElement('img');
  img.src = url;

  document.body.appendChild(img);
  })
.catch(console.warn)