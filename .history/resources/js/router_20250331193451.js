import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import ExampleComponent from './components/ExampleComponent.vue';
import Vantai from './components/logistics/Vantai';
import CO from './components/logistics/CO';

import ChuyenPhatNhanh from './components/logistics/ChuyenPhatNhanh';
import KhoBai from './components/logistics/KhoBai.vue';

// import WasteManagement from './components/WasteManagement.vue';
// import Package from './components/Package.vue';
// import News from './components/News.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/logistic', component: ExampleComponent },
    { path: '/logistic/vantai', component: Vantai },
    { path: '/logistic/co', component: CO },
    { path: '/logistic/co', component: KhoBai },
    { path: '/logistic/chuyenphatnhanh', component: ChuyenPhatNhanh },
    { path: '/waste-management', component: ExampleComponent },
    { path: '/package', component: ExampleComponent },
    { path: '/news', component: ExampleComponent },
];


export default new VueRouter({ mode: 'hash', routes, 
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition; // Nếu có vị trí đã lưu, cuộn đến đó (hữu ích khi dùng nút back/forward)
      } else {
        return { x: 0, y: 0 }; // Mặc định cuộn lên đầu trang
      }
    } });
