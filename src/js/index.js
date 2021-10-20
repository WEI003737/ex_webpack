import Vue from 'vue/dist/vue';
import '../sass/index.sass';
// import utils from '../utils';

// import { NODE_ENV } from '../../../config';

const progressBarCircular = new Vue({
  el: '#progressBarCircular',
  delimiters: ['${', '}'],
  data: {
    initDeg: 0,
  },
  computed: {
    score () {
      return Math.floor(Math.random() * 10) + 1;
    },
    processingBarDeg () {
      let deg = 0;
      if (this.score >= 10) {
        deg = 360;
      } else {
        deg = parseInt(360 * (this.score / 10));
      }
      return deg;
    },
  },
  methods: {
    rotate (deg) {
      if (deg < 0) return;
      const timeId = setInterval(() => {
        if (this.initDeg >= deg) {
          clearInterval(timeId);
        } else {
          this.initDeg++;
          if (this.initDeg > 180) {
            this.$refs.left.style.transform = `rotate(${this.initDeg - 180}deg)`;
          } else {
            this.$refs.right.style.transform = `rotate(${this.initDeg}deg)`;
          }
        }
      }, 0);
    },
  },
});

console.log(progressBarCircular);
