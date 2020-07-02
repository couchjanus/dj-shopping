<template>
  <section id="slider"><!--slider-->
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                         <li v-for="(item, index) in slides" :key="index" @click="activeItem(index); setActive(index);" :class="item.active ? 'active' : ''"></li>
                    </ol>
                    <div class="carousel-inner" @mouseover="stopRotation" @mouseout="startRotation">
                       <SliderItem v-for="(slide, index) in slides" :key="slide.index" :slide="slide" :class="{ active: isActive(index) }" ></SliderItem>
                    </div>
                    <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev" @click="revers();">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next" @click="forvard();">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section><!--/slider-->
</template>

<script>
import axios from "axios";
import SliderItem from "./SliderItem";
export default {
  name: `Slider`,
  data() {
    return {
        current: 0,
        slides: [],
        speed: 3000,
        timer: null
    }
  },
  methods: {
    startRotation() {
      this.timer = setInterval(this.next, this.speed);
    },
    revers() {
      this.prev();
    },
    forvard() {
      this.next();
    },
    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next() {
      var current = this.current;
      var next = current + 1;

      if (next > this.slides.length - 1) {
        next = 0;
      }
      this.current = next;
      this.setActive(this.current);
      this.activeItem(this.current);
    },
    prev() {
      var current = this.current;
      var prev = current - 1;

      if (prev < 0) {
        prev = this.slides.length - 1;
      }

      this.current = prev;
      this.setActive(this.current);
      this.activeItem(this.current);
    },
    isActive(slide) {
      return this.current === slide;
    },
    setActive(slide) {
      this.current = slide;
    },
    activeItem: function (index) {
      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].active = false;
      }
      this.slides[index].active = true;
    //   this.curren=index;
    //   this.setActive(this.current);
    },
    async loadSliders() {
      await axios
        .get(`http://127.0.0.1:8000/api/sliders`)
        .then((response) => {
          this.slides = response.data.results;
          this.total = response.data.count;
        });
    },
  },
  created() {
      this.loadSliders();
  },
  mounted() {
    this.startRotation();
  },
  components: {
      SliderItem
  },
};
</script>

<style scoped>
/* Slideshow styling ----- */
.carousel-inner {
  overflow: hidden;
  position: relative;
  padding-top: calc(9 / 16 * 100%);
  
  min-width: 400px;
  width: 50vw;
  height: 0;
  /* 
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75); */
}
</style>