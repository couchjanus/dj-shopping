<template>
  <div class="item row item_slide">
    <div class="col-sm-6">
      <h1><span>SHOP</span>CENTER</h1>
      <h2>{{slide.title}}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button type="button" class="btn btn-default get">Get it now</button>
    </div>
    <div class="col-sm-6">
      <img
        :src="slide.cover"
        class="cover img-responsive"
        alt=""
      />
      <img src="/static/images/home/pricing.png" class="pricing" alt="" />
    </div>
</div>
</template>

<script>
export default {
  name: `SliderItem`,
  data() {
    return {};
  },
    props: {
      slide: {
        type: Object,
        default() {
          return {};
        },
      },
    },
  components: {},
};
</script>
<style scoped>
 .item_slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s;
}

.item_slide img.cover {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  max-width: 100%;
  object-fit: cover;
}

img:hover {
  cursor: pointer;
}

.active {
  opacity: 1;
}
</style>
