<template>
  <div class="partners-section">
     <h4 class="section-title green_title" :class="{ animate: isVisible }">_____ GREEN SERVICE _____</h4>
        <h2 class="section-title title_secon"  :class="{ animate: isVisible }">2000+ KHÁCH HÀNG - ĐỐI TÁC</h2>
        
    <carousel style="background:#2E7D32":per-page="8" :autoplay="true" :loop="true" :speed="1500">
      <slide v-for="(partner, index) in partners" :key="index">
        <div class="partner-item">
          <img :src="partner.logo" :alt="partner.name" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      partners: [
        { name: "Foxconn", logo: "https://logos-world.net/wp-content/uploads/2023/01/Foxconn-Logo.jpg"},
        { name: "Siflex", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VTDnjUqkwNjN4x-x8bNyNHvm-QAkRh9HVg&s" },
        { name: "Samsung", logo: "https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$" },
       { name: "Foxconn", logo: "https://logos-world.net/wp-content/uploads/2023/01/Foxconn-Logo.jpg"},
        { name: "Siflex", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VTDnjUqkwNjN4x-x8bNyNHvm-QAkRh9HVg&s" },
        { name: "Samsung", logo: "https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$" },
 { name: "Foxconn", logo: "https://logos-world.net/wp-content/uploads/2023/01/Foxconn-Logo.jpg"},
        { name: "Siflex", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VTDnjUqkwNjN4x-x8bNyNHvm-QAkRh9HVg&s" },
        { name: "Samsung", logo: "https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$" },
 { name: "Foxconn", logo: "https://logos-world.net/wp-content/uploads/2023/01/Foxconn-Logo.jpg"},
        { name: "Siflex", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VTDnjUqkwNjN4x-x8bNyNHvm-QAkRh9HVg&s" },
        { name: "Samsung", logo: "https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$" },
 { name: "Foxconn", logo: "https://logos-world.net/wp-content/uploads/2023/01/Foxconn-Logo.jpg"},
        { name: "Siflex", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VTDnjUqkwNjN4x-x8bNyNHvm-QAkRh9HVg&s" },
        { name: "Samsung", logo: "https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$" },

            ]
    };
  }
};
</script>

<style scoped>
.partners-section {
  text-align: center;
  padding: 50px 20px;
  background: #f8f8f8;
}

.section-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2e7d32;
  
}

.section-title.animate {
    opacity: 1;
    transform: translateY(0);
}

.partner-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.partner-item img {
  max-width: 150px;
  max-height: 100px;
  object-fit: contain;
}
.title_secon {

    color: rgb(50, 79, 122);
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    font-weight: 700 !important;
}
.green_title {
color: rgb(16, 129, 64);
    font-family: Avo, sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-transform: none;
    font-style: normal;
    line-height: 1.4em;
    letter-spacing: 0px;
    text-decoration: none;
}
.VueCarousel-wrapper {
padding-top: 20px;
}
</style>