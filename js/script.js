var app = new Vue ({
  el: '#app',
  data: {
    albums: [],
    genres: [],
    genreSelected: ''
  },
  mounted: function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((risposta) => {
      this.albums = risposta.data.response;
      this.albums.forEach((item, i) => {
        if (this.genres.includes(item.genre) == false) {
          this.genres.push(item.genre);
        }
      });
    });
  },
});
