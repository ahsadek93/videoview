

new Vue({
  el: "#app",
  data() {
    return {
      isPlaying: true,
      isClicked: false,
      isVisible: true,

    };
  },

  mounted() {

    setTimeout(
        ()=> {
           this.$refs.myvideo.pause();
           this.$refs.myvideo.muted = !this.$refs.myvideo.muted;
           this.isPlaying = false;
        }, 3000);     
  },

  methods: {
    playPause() {
      if (this.isPlaying) {
        this.$refs.myvideo.pause();
        this.isPlaying = !this.isPlaying;
        this.isClicked = true;
        this.isVisible = true


      } else {
        this.$refs.myvideo.play();
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
