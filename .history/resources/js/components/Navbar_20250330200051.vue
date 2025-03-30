<template>
    <nav :class="{'navbar': true, 'fixed': isScrolled}">
        <div class="logo">
            <a href="/"><img src="/images/logo.png" alt="Logo" ref="logo"></a>
        </div>
        
        <button class="menu-toggle" @click="toggleMenu">
            <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
        
        <ul :class="{'menu': true, 'open': menuOpen}">
            <li><router-link to="/" @click="closeMenu">{{ $t('home') }}</router-link></li>
            
            <li class="dropdown" @click="toggleDropdown('waste')">
                <a href="#">{{ $t('XỬ LÝ CHẤT THẢI') }} <svg class="icon"><path fill="white" d="M7 10l5 5 5-5z"></path></svg></a>
                <ul v-if="openDropdown === 'waste'" class="submenu">
                    <li><router-link to="/trongoi" @click="closeMenu">{{ $t('Xử lý CT trọn gói') }}</router-link></li>
                    <li><router-link to="/yte" @click="closeMenu">{{ $t('Xử lý CT y tế') }}</router-link></li>
                    <li><router-link to="/baogia" @click="closeMenu">{{ $t('Báo giá') }}</router-link></li>
                </ul>
            </li>
            
            <li class="dropdown" @click="toggleDropdown('logistic')">
                <a href="#">{{ $t('logistic') }} <svg class="icon"><path fill="white" d="M7 10l5 5 5-5z"></path></svg></a>
                <ul v-if="openDropdown === 'logistic'" class="submenu">
                    <li><router-link to="/logistic/vantai" @click="closeMenu">{{ $t('Vận tải quốc tế (Sea, Air)') }}</router-link></li>
                    <li><router-link to="/logistic/chuyenphatnhanh" @click="closeMenu">{{ $t('Chuyển phát nhanh quốc tế') }}</router-link></li>
                </ul>
            </li>
        </ul>
        
        <div class="right-section">
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
            isScrolled: false,
            menuOpen: false,
            openDropdown: null
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
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        toggleDropdown(menu) {
            this.openDropdown = this.openDropdown === menu ? null : menu;
        },
        closeMenu() {
            this.menuOpen = false;
            this.openDropdown = null;
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

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

.submenu {
    display: none;
    position: absolute;
    background: #388E3C;
    width: 180px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.submenu li a {
    padding: 10px;
    display: block;
}

.right-section {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-right: 30px;
}

.language-select {
    padding: 5px;
    border-radius: 5px;
    border: none;
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
        text-align: left;
        padding: 10px;
    }
    
    .menu.open {
        display: flex;
    }
    
    .menu-toggle {
        display: block;
    }
}
</style>
