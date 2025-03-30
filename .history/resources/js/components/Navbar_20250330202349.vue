<template>
    <nav :class="{'navbar': true, 'fixed': isScrolled}">
        <div class="logo">
            <a href="/"><img src="/images/logo.png" alt="Logo" ref="logo"></a>
        </div>

        <!-- Nút mở menu trên mobile -->
        <button class="menu-toggle" @click="menuOpen = !menuOpen">{{ menuOpen ? '✖' : '☰' }}</button>

        <ul class="menu" :class="{ 'open': menuOpen }">
            <li><router-link to="/" @click="closeMenu">{{ $t('home') }}</router-link></li>

            <li class="dropdown" v-for="item in menuItems" :key="item.title">
                <a href="#" @click.prevent="toggleSubmenu(item)">
                    {{ $t(item.title) }}
                    <svg class="icon" viewBox="0 0 24 24">
                        <path fill="white" d="M7 10l5 5 5-5z"></path>
                    </svg>
                </a>
                <ul class="submenu" v-if="item.open">
                    <li v-for="sub in item.submenu" :key="sub.title">
                        <router-link :to="sub.link" @click="closeMenu">{{ $t(sub.title) }}</router-link>
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
            menuOpen: false,
            isScrolled: false,
            menuItems: [
                { title: 'XỬ LÝ CHẤT THẢI', submenu: [
                    { title: 'Xử lý CT trọn gói', link: '/trongoi' },
                    { title: 'Xử lý CT y tế', link: '/yte' },
                    { title: 'Báo giá', link: '/baogia' }
                ], open: false },
                { title: 'logistic', submenu: [
                    { title: 'Vận tải quốc tế (Sea, Air)', link: '/logistic/vantai' },
                    { title: 'Chuyển phát nhanh quốc tế', link: '/logistic/chuyenphatnhanh' }
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
        toggleSubmenu(item) {
            item.open = !item.open;
        },
        closeMenu() {
            this.menuOpen = false;
        }
    }
};
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2E7D32;
    padding: 10px 20px;
    color: white;
    width: 100%;
    transition: all 0.3s ease;
}
.navbar.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.menu {
    list-style: none;
    display: flex;
    gap: 20px;
    text-transform: uppercase;
}
.menu.open {
    display: block;
}
.menu-toggle {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
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
        width: 100%;
        background: #2E7D32;
        padding: 10px;
    }
    .menu-toggle {
        display: block;
    }
    .menu.open {
        display: flex;
    }
}
</style>
