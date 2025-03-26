<template>
  <div class="remarkable-section">
    <div class="figures">
      <div v-for="(item, index) in figures" :key="index" class="figure-item animate" v-intersect>
        <count-up :end-val="item.value" :duration="2.5"></count-up>
        <p>{{ item.label }}</p>
      </div>
    </div>
    
    <div class="trusted-section">
      <h2>Trusted by over 100 Organizations</h2>
      <carousel :per-page="3" :autoplay="3000" class="logo-slider">
        <slide v-for="(logo, index) in logos" :key="index" class="slide-animate" v-intersect>
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
      inserted(el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('visible');
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
      figures: [
        { value: 100, label: 'Organizations' },
        { value: 35, label: 'Countries' },
        { value: 500, label: 'Projects' }
      ],
      logos: [
        'logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png'
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
}
.figure-item.visible {
  opacity: 1;
  transform: translateY(0);
}
.trusted-section {
  margin-top: 50px;
}
.logo-slider img {
  width: 100px;
  height: auto;
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
