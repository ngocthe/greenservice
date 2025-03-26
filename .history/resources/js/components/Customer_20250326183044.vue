<template>
  <div class="remarkable-section" v-intersect>
    <h2 class="section-title">Những Con Số Ấn Tượng</h2>
    <div class="figures">
      <div v-for="(item, index) in figures" :key="index" class="figure-item animate">
        <count-up v-if="isVisible" :end-val="item.value" :duration="2.5"></count-up>
        <p>{{ item.label }}</p>
      </div>
    </div>
    
    <div class="trusted-section">
      <h2 class="section-title">Được Tin Cậy Bởi Hơn 100 Tổ Chức Toàn Cầu</h2>
      <carousel :per-page="3" :autoplay="true" class="logo-slider">
        <slide v-for="(logo, index) in logos" :key="index" class="slide-animate">
          <img :src="logo" alt="Trusted logo">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import CountUp from 'vue-countup-v2';
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { CountUp, Carousel, Slide },
  directives: {
    intersect: {
      inserted(el, binding, vnode) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              vnode.context.isVisible = true;
              observer.disconnect();
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
      }
    }
  },
  data() {
    return {
      isVisible: false,
      figures: [
        { value: 100, label: 'Tổ chức' },
        { value: 35, label: 'Quốc gia' },
        { value: 500, label: 'Dự án' }
      ],
      logos: [
        'logo-microsoft.png', 'logo-google.png', 'logo-apple.png', 'logo-amazon.png', 'logo-facebook.png'
      ]
    };
  }
};
</script>

<style>
.remarkable-section {
  text-align: center;
  padding: 50px 20px;
}
.section-title {
  font-size: 38px;
  font-weight: 800;
  font-family: "Canela Web" !important;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: #2c3e50;
  text-transform: uppercase;
}
.figures {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;
}
.figure-item {
  font-size: 24px;
  font-weight: bold;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  color: #27ae60;
}
.figure-item.visible {
  opacity: 1;
  transform: translateY(0);
}
.trusted-section {
  margin-top: 50px;
}
.logo-slider img {
  width: 120px;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.5s;
}
.logo-slider img:hover {
  filter: grayscale(0%);
}
.slide-animate {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.slide-animate.visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
