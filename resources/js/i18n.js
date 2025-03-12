import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en: {
        home: 'Home',
        logistic: 'Logistic',
        waste_management: 'Waste Management',
        package: 'Package',
        news: 'News',
        search: 'Search...',
    },
    vi: {
        home: 'Trang chủ',
        logistic: 'Logistic',
        waste_management: 'Xử lý chất thải',
        package: 'Trọn gói',
        news: 'Tin tức',
        search: 'Tìm kiếm...',
    }
};

export default new VueI18n({
    locale: 'vi',
    messages,
});
