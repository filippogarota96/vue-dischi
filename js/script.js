var app = new Vue ({
  el: '#app',
  data: {
    albums: [],
    genres: []
  },
  mounted: function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((risposta) => {
      this.albums = risposta.data.response;
      this.albums.forEach((element) => {
        if (this.genres.includes(element) == false) {
          this.genres.push(element);
          console.log(this.genres);
        }
      });
    });
  },
});
