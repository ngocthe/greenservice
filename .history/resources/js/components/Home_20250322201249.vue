<template>
    <div>
        <BannerVideo />
       <Intro2 />
        <Intro />

     <Service2 />
          <Customer />
          <Footer />
 
    </div>
</template>

<script>
import BannerVideo from './BannerVideo.vue';
import Intro2 from './Intro2.vue';
import Intro3 from './Intro3.vue';

import Intro from './Intro.vue';
import Service2 from './Service2.vue';
import Customer from './Customer.vue';
import Footer from './Footer.vue';

export default {
    components: {
      BannerVideo,
        Service2,
        Intro,
        Intro2,
        Intro3,
        Customer,
        Footer
    }
};
</script>
<style scoped>
.contact-icons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.contact-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2c6e49;
  color: white;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, background 0.2s;
}

.contact-item:hover {
  transform: scale(1.1);
}

.zalo { background: #0078ff; } /* 🔵 Màu xanh Zalo */
.messenger { background: #0084ff; } /* 🔷 Màu Messenger */
</style>