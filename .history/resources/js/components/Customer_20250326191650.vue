<template>
  <div class="remarkable-section" v-intersect>
    <h2 class="section-title">Những Con Số Ấn Tượng</h2>
    <div class="figures">
      <div v-for="(item, index) in figures" :key="index" class="figure-item animate">
        <count-up v-if="isVisible" :end-val="item.value" :duration="2.5"></count-up><span class="plus-sign">+</span>
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
        'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
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
  font-family: Montserrat, sans-serif;
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
  font-size: 48px;
  font-weight: 900;
  font-family: "Arial", sans-serif;
  color: #1a73e8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.figure-item .plus-sign {
  font-size: 48px;
  font-weight: 900;
  color: #1a73e8;
  margin-left: 5px;
}
.figure-item p {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
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
  opacity: 1;
  transform: translateX(-30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.slide-animate.visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
