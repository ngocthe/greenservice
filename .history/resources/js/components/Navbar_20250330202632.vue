<template>
    <nav :class="{'navbar': true, 'fixed': isScrolled}">
        <div class="logo">
            <a href="/"><img src="/images/logo.png" alt="Logo" ref="logo"></a>
        </div>
        
        <button class="menu-toggle" @click="menuOpen = !menuOpen">
            {{ menuOpen ? '✖' : '☰' }}
        </button>
        
        <ul :class="{'menu': true, 'menu-open': menuOpen}">
            <li><router-link to="/">{{ $t('home') }}</router-link></li>
            
            <li class="dropdown" v-for="(item, index) in menuItems" :key="index">
                <a href="#" @click.prevent="toggleSubmenu(index)">
                    {{ $t(item.title) }}
                    <svg class="icon" viewBox="0 0 24 24">
                        <path fill="white" d="M7 10l5 5 5-5z"></path>
                    </svg>
                </a>
                <ul v-if="item.submenu" :class="{'submenu': true, 'submenu-open': item.open}">
                    <li v-for="(sub, subIndex) in item.submenu" :key="subIndex">
                        <router-link :to="sub.link">{{ $t(sub.title) }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        
        <div class="right-section">
            <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            
            <select v-model="$i18n.locale" class="language-select">
                <option value="vi">🇻🇳 Tiếng Việt</option>
                <option value="en">🇺🇸 English</option>
            </select>
        </div>
    </nav>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    data() {
        return {
            search: '',
            isScrolled: false,
            menuOpen: false,
            menuItems: [
                { title: 'XỬ LÝ CHẤT THẢI', submenu: [
                    { title: 'Xử lý CT trọn gói', link: '/trongoi' },
                    { title: 'Xử lý CT y tế', link: '/yte' },
                    { title: 'Báo giá', link: '/baogia' }
                ], open: false },
                { title: 'logistic', submenu: [
                    { title: 'Vận tải quốc tế (Sea, Air)', link: '/logistic/vantai' },
                    { title: 'Chuyển phát nhanh quốc tế', link: '/logistic/chuyenphatnhanh' },
                    { title: 'Xin C/O', link: '/logistic/co' }
                ], open: false }
            ]
        };
    },
    mounted() {
        anime({
            targets: this.$refs.logo,
            scale: [0, 1],
            opacity: [0, 1],
            duration: 1500,
            easing: 'easeOutElastic'
        });
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        toggleSubmenu(index) {
            this.menuItems[index].open = !this.menuItems[index].open;
        }
    }
};
</script>

<style scoped>
.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
}

@media (max-width: 768px) {
    .menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        background: #2E7D32;
        width: 100%;
        padding: 10px 0;
    }
    .menu-open {
        display: flex;
    }
    .menu-toggle {
        display: block;
        position: absolute;
        right: 20px;
        top: 15px;
    }
}
</style>