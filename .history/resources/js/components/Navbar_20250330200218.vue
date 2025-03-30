<template>
    <nav :class="{'navbar': true, 'fixed': isScrolled}">
        <div class="logo">
            <a href="/"><img src="/images/logo.png" alt="Logo" ref="logo"></a>
        </div>
        
        <!-- Nút toggle cho mobile -->
        <div class="menu-toggle" @click="toggleMenu">
            <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </div>

        <ul class="menu" :class="{'open': menuOpen}">
            <li><router-link to="/" @click="closeMenu">{{ $t('home') }}</router-link></li>
            <li class="dropdown" @click="toggleDropdown('waste')">
                <a href="#">{{ $t('XỬ LÝ CHẤT THẢI') }}     <svg class="icon" viewBox="0 0 24 24">
                    <path fill="white" d="M7 10l5 5 5-5z"></path>
                </svg></a>
                <ul class="submenu" :class="{'open': dropdowns.waste}">
                    <li><router-link to="/trongoi" @click="closeMenu">{{ $t('Xử lý CT trọn gói') }}</router-link></li>
                    <li><router-link to="/yte" @click="closeMenu">{{ $t('Xử lý CT y tế') }}</router-link></li>
                    <li><router-link to="/baogia" @click="closeMenu">{{ $t('Báo giá') }}</router-link></li>
                </ul>
            </li>
            <li class="dropdown" @click="toggleDropdown('logistic')">
                <a href="#">{{ $t('logistic') }} <svg class="icon" viewBox="0 0 24 24">
                    <path fill="white" d="M7 10l5 5 5-5z"></path>
                </svg></a>
                <ul class="submenu" :class="{'open': dropdowns.logistic}">
                    <li><router-link to="/logistic/vantai" @click="closeMenu">{{ $t('Vận tải quốc tế (Sea, Air)') }}</router-link></li>
                    <li><router-link to="/logistic/chuyenphatnhanh" @click="closeMenu">{{ $t('Chuyển phát nhanh quốc tế') }}</router-link></li>
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
export default {
    data() {
        return {
            isScrolled: false,
            menuOpen: false,
            dropdowns: {
                waste: false,
                logistic: false,
            }
        };
    },
    mounted() {
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
            this.dropdowns[menu] = !this.dropdowns[menu];
        },
        closeMenu() {
            this.menuOpen = false;
            this.dropdowns = { waste: false, logistic: false };
        }
    }
};
</script>

<style scoped>
.menu-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    .menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #2E7D32;
        padding: 10px 0;
    }
    .menu.open {
        display: flex;
    }
    .submenu {
        display: none;
    }
    .submenu.open {
        display: block;
    }
}
</style>