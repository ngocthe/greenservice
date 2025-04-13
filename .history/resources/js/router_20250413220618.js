import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import ExampleComponent from './components/ExampleComponent.vue';
import Vantai from './components/logistics/Vantai';
import CO from './components/logistics/CO';

import ChuyenPhatNhanh from './components/logistics/ChuyenPhatNhanh';
import KhoBai from './components/logistics/KhoBai.vue';
import TuVanHaiQuan from './components/logistics/TuVanHaiQuan.vue';
import DichVuHaiQuan from './components/logistics/DichVuHaiQuan.vue';
import ThanhKhoan from './components/logistics/ThanhKhoan.vue';
import NoiDia from './components/logistics/NoiDia.vue';
import LoiHong from './components/tieuhuy/LoiHong.vue';
import ThuHoi from './components/tieuhuy/ThuHoi.vue';
import ViPham from './components/tieuhuy/ViPham.vue';
import Yte from './components/chatthai/Yte.vue';
import Trongoi from './components/chatthai/Trongoi.vue';

// import WasteManagement from './components/WasteManagement.vue';
// import Package from './components/Package.vue';
// import News from './components/News.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/logistic', component: ExampleComponent },
    { path: '/logistic/vantai', component: Vantai },
    { path: '/logistic/co', component: CO },
    { path: '/logistic/tuvanhaiquan', component: TuVanHaiQuan },
    { path: '/logistic/dichvuhaiquan', component: DichVuHaiQuan },
    { path: '/logistic/thanhkhoan', component: ThanhKhoan },

    { path: '/logistic/khobai', component: KhoBai },
    { path: '/logistic/chuyenphatnhanh', component: ChuyenPhatNhanh },
    { path: '/logistic/noidia', component: NoiDia },
    { path: '/loihong', component: LoiHong },
    { path: '/thuhoi', component: ThuHoi },
    { path: '/yte', component: Yte },
    { path: '/trongoi', component: Trongoi },

    { path: '/vipham', component: ViPham },
];


export default new VueRouter({ mode: 'history', routes, 
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition; // Nếu có vị trí đã lưu, cuộn đến đó (hữu ích khi dùng nút back/forward)
      } else {
        return { x: 0, y: 0 }; // Mặc định cuộn lên đầu trang
      }
    } });
