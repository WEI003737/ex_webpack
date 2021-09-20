<template>

  <div class="l-wrapper">

    <div class="c-processing-bar">

      <div class="c-processing-bar__right">
        <div class="c-processing-bar__right--cover" ref="right"></div>
      </div>
      
      <div class="c-processing-bar__left">
        <div class="c-processing-bar__left--cover" ref="left"></div>
      </div>

      <div class="c-processing-bar__text">

        <div class="c-processing-bar__text--score-container">
          <p class="c-processing-bar__text--score">{{score}}</p>
          <p class="c-processing-bar__text--slash"> / </p>
          <p class="c-processing-bar__text--base">10</p>
        </div>
        
      </div>
    
    </div>
  
  </div>
  
</template>

<script>

export default {
  data () {
    return {
      initDeg: 0,
      score: 6
    }
  },
  computed: {
    // score () {
    //   return this.$store.state.score;
    // },
    processingBarDeg () {
      let deg = 0;
      if (this.score >= 10) {
        deg = 360
      } else {
        deg = parseInt(360 * this.score / 10); 
      };
      return deg;
    }
  },
  methods: {
    rotate (deg) {
      if (deg < 0) return;
      let timeId = setInterval(() => {
        if (this.initDeg >= deg) {
          clearInterval(timeId);
        } else {
          this.initDeg++;
          if (this.initDeg > 180) {
            this.$refs.left.style.transform = `rotate(${this.initDeg - 180}deg)`;
          } else {
            this.$refs.right.style.transform = `rotate(${this.initDeg}deg)`;
          };
        };
      }, 0);
    },
  },
  mounted () {
    this.rotate(this.processingBarDeg);
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout/variable.scss';
@import '@/scss/layout/mixin.scss';

$diameter: 400px;


$gray--100: #D7D7DC;
$gray--200: #B7BBC2;
$gray--300: #666666;
$blue: #051E2D;

.c-processing-bar{
  position: relative;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: $diameter;
  height: $diameter;
  background: $blue;
  border-radius: 50%;
  color: $blue;
  overflow: hidden;
  &__right,
  &__left{
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: $blue;
    overflow: hidden;
    &--cover{
      width: 100%;
      height: 100%;
      background: $gray--200;
      transform-origin: right center;
    }
  }
  &__right{
    left: 50%;
    &--cover{
      transform-origin: left center;
    }
  }
  &__left{
    left: 0%;
    &--cover{
      transform-origin: right center;
    }
  }
  &__text{
    @include flex-align;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50% );
    background: $gray--100;
    border-radius: 50%;
    Box-shadow: inset 0px 0px 7.82609px 2.6087px rgba(0, 0, 0, 0.25);
    font-size: 1.125rem;
    font-weight: 200;
    &--score-container{
      display: flex;
      justify-content: center;
    }
  }
}
</style>