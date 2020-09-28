function imageGetter () {
  fetch('https://source.unsplash.com/random/500x500')
    .then(response => response)
    .then(data => {console.log(data);
      document.getElementById('random-image').setAttribute('src', data.url)
    }
    );
}

imageGetter()

