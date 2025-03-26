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
     'https://logos-world.net/wp-content/uploads/2023/01/Foxconn-Logo.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VTDnjUqkwNjN4x-x8bNyNHvm-QAkRh9HVg&s',
      'https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$',
      'https://www.50mm.vn/wp-content/uploads/2017/11/canon-logo-vector.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWPYTir0pvSdhP9gWlaH5nYHM9E_RlHMyIg&s',
      'https://media.licdn.com/dms/image/v2/D560BAQF42DyGTQKCwg/company-logo_200_200/company-logo_200_200/0/1689150844143?e=2147483647&v=beta&t=hXjdAjjM-ZehLjUPdkaf7QEH5Ld5outlvbnjll9ciYI',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1280px-ABB_logo.svg.png',
      'https://cdn.nhanlucnganhluat.vn/uploads/images/C7885489/logo/2019-12/5bdbc075feae18f041bf.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b7/Mitsubishi-logo.png',
      'https://goldidea.vn/upload/logo-unilever.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Panasonic_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_logo_%28Red%29.svg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZA7UWLVaSQhhlwf5gSDntW4Y8yZi6tUkZmQ&s',
      'https://logos-world.net/wp-content/uploads/2023/01/Foxconn-Logo.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VTDnjUqkwNjN4x-x8bNyNHvm-QAkRh9HVg&s',
      'https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$',
      'https://www.50mm.vn/wp-content/uploads/2017/11/canon-logo-vector.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWPYTir0pvSdhP9gWlaH5nYHM9E_RlHMyIg&s',
      'https://media.licdn.com/dms/image/v2/D560BAQF42DyGTQKCwg/company-logo_200_200/company-logo_200_200/0/1689150844143?e=2147483647&v=beta&t=hXjdAjjM-ZehLjUPdkaf7QEH5Ld5outlvbnjll9ciYI',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1280px-ABB_logo.svg.png',
      'https://cdn.nhanlucnganhluat.vn/uploads/images/C7885489/logo/2019-12/5bdbc075feae18f041bf.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b7/Mitsubishi-logo.png',
      'https://goldidea.vn/upload/logo-unilever.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Panasonic_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_logo_%28Red%29.svg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZA7UWLVaSQhhlwf5gSDntW4Y8yZi6tUkZmQ&s',

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
