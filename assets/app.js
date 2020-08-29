new Vue({
  el: "#app",
  data() {
    return {
      isPlaying: true,
      isClicked: false,
      isVisible: true
    };
  },

  mounted() {

    setTimeout(
        ()=> {
            document.getElementById("myvideo").pause();
            document.getElementById("myvideo").muted = !document.getElementById("myvideo").muted;
           this.isPlaying = false;
        }, 5000);     
  },

  methods: {
    playPause() {
      if (this.isPlaying) {
        document.getElementById("myvideo").pause();
        this.isPlaying = !this.isPlaying;
        this.isClicked = true;
        this.isVisible = true


      } else {
        document.getElementById("myvideo").play();
        this.isPlaying = !this.isPlaying;
        this.isClicked = false;

        setTimeout(() => {
            if(this.isPlaying){
                this.isVisible = false
            } else {
                this.isVisible = true
            }
        }, 3000);
      }
    },
  },
});
