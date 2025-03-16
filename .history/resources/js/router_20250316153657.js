import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import ExampleComponent from './components/ExampleComponent.vue';
import Vantai from './components/logistics/Vantai';

// import WasteManagement from './components/WasteManagement.vue';
// import Package from './components/Package.vue';
// import News from './components/News.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/logistic', component: ExampleComponent },
    { path: '/logistic/vantai', component: Vantai },
    { path: '/waste-management', component: ExampleComponent },
    { path: '/package', component: ExampleComponent },
    { path: '/news', component: ExampleComponent },
];

export default new VueRouter({ mode: 'hash', routes });
