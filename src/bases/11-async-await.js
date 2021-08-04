const getImagen = async () => {

    try {

    const apikey = 'zQrHcrBtgmuJwF6U00i5PbVddUQvyaRS';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    const {data} = await resp.json();
    console.log(data);

    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
  
    document.body.appendChild(img);
        
    } catch (error) {
        console.error(error);
    }
    
}

getImagen();