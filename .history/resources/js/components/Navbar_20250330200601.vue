<template>
    <nav :class="{'navbar': true, 'fixed': isScrolled}">
        <div class="logo">
            <a href="/"><img src="/images/logo.png" alt="Logo" ref="logo"></a>
        </div>

        <button class="menu-toggle" @click="toggleMenu">
            <i :class="{'fas': true, 'fa-bars': !isMenuOpen, 'fa-times': isMenuOpen}"></i>
        </button>

        <ul class="menu" :class="{'open': isMenuOpen}">
            <li><router-link to="/" @click="closeMenu">{{ $t('home') }}</router-link></li>
            
            <li class="dropdown" @click="toggleDropdown('waste')">
                <a href="#">{{ $t('XỬ LÝ CHẤT THẢI') }} <svg class="icon" viewBox="0 0 24 24">
                    <path fill="white" d="M7 10l5 5 5-5z"></path>
                </svg></a>
                <ul class="submenu" :class="{'open': dropdowns.waste}">
                    <li><router-link to="/trongoi" @click="closeMenu">{{ $t('Xử lý CT trọn gói') }}</router-link></li>
                    <li><router-link to="/yte" @click="closeMenu">{{ $t('Xử lý CT y tế') }}</router-link></li>
                </ul>
            </li>
            
            <li><router-link to="/news" @click="closeMenu">{{ $t('Tin tức') }}</router-link></li>
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
            isScrolled: false,
            isMenuOpen: false,
            dropdowns: {
                waste: false
            }
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
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleDropdown(menu) {
            this.dropdowns[menu] = !this.dropdowns[menu];
        },
        closeMenu() {
            this.isMenuOpen = false;
            for (let key in this.dropdowns) {
                this.dropdowns[key] = false;
            }
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

.menu {
    list-style: none;
    display: flex;
    gap: 20px;
}

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
        width: 100%;
        background: #2E7D32;
    }

    .menu.open {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }
}
</style>