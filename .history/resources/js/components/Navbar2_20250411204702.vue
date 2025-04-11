<template>
    <nav :class="{ 'navbar': true, 'fixed': isScrolled }">
        <div class="logo">
            <a href="/"><img src="/images/logo.png" alt="Logo" ref="logo"></a>
        </div>

        <div class="mobile-toggle" @click="toggleMobileMenu">☰</div>

        <ul class="menu" :class="{ open: isMobileMenuOpen }">
            <li><router-link to="/" @click="closeMobileMenu">{{ $t('home') }}</router-link></li>

            <li class="dropdown">
                <a href="#">{{ $t('XỬ LÝ CHẤT THẢI') }}
                    <svg class="icon" viewBox="0 0 24 24">
                        <path fill="white" d="M7 10l5 5 5-5z"></path>
                    </svg>
                </a>
                <ul class="submenu">
                    <li><router-link to="/trongoi" @click="closeMobileMenu">{{ $t('Xử lý CT trọn gói') }}</router-link>
                    </li>
                    <li><router-link to="/yte" @click="closeMobileMenu">{{ $t('Xử lý CT y tế') }}</router-link></li>
                    <li><router-link to="/baogia" @click="closeMobileMenu">{{ $t('Báo giá') }}</router-link></li>
                </ul>
            </li>

            <li class="dropdown">
                <a href="#">{{ $t('logistic') }}
                    <svg class="icon" viewBox="0 0 24 24">
                        <path fill="white" d="M7 10l5 5 5-5z"></path>
                    </svg>
                </a>
                <ul class="submenu">
                    <li><router-link to="/logistic/vantai" @click="closeMobileMenu">{{ $t('Vận tải quốc tế (Sea, Air)')
                            }}</router-link></li>
                    <li><router-link to="/logistic/chuyenphatnhanh" @click="closeMobileMenu">{{ $t('Chuyển phát nhanh
                            quốc tế') }}</router-link></li>
                    <li><router-link to="/logistic/co" @click="closeMobileMenu">{{ $t('Xin C/O') }}</router-link></li>
                    <li><router-link to="/logistic/tuvanhaiquan" @click="closeMobileMenu">{{ $t('Tư vấn Hải Quan')
                            }}</router-link></li>
                    <li><router-link to="/logistic/dichvuhaiquan" @click="closeMobileMenu">{{ $t('Thủ tục Hải quan xuất
                            - nhập khẩu') }}</router-link></li>
                    <li><router-link to="/logistic/thanhkhoan" @click="closeMobileMenu">{{ $t('Thanh khoản hàng gia
                            công, sản xuất xuất khẩu') }}</router-link></li>
                    <li><router-link to="/logistic/noidia" @click="closeMobileMenu">{{ $t('Vận tải Nội địa')
                            }}</router-link></li>
                    <li><router-link to="/logistic/khobai" @click="closeMobileMenu">{{ $t('Dịch vụ kho bãi')
                            }}</router-link></li>
                </ul>
            </li>

            <li class="dropdown">
                <a href="#">{{ $t('Tiêu hủy hàng lỗi') }}
                    <svg class="icon" viewBox="0 0 24 24">
                        <path fill="white" d="M7 10l5 5 5-5z"></path>
                    </svg>
                </a>
                <ul class="submenu">
                    <li><router-link to="/loihong" @click="closeMobileMenu">{{ $t('Hàng nhập khẩu bị lỗi, hư hỏng')
                            }}</router-link></li>
                    <li><router-link to="/vipham" @click="closeMobileMenu">{{ $t('Hàng vi phạm quy định nhập khẩu')
                            }}</router-link></li>
                    <li><router-link to="/thuhoi" @click="closeMobileMenu">{{ $t('Hàng hóa bị thu hồi') }}</router-link>
                    </li>
                    <li><router-link to="/package" @click="closeMobileMenu">{{ $t('Thực phẩm, mỹ phẩm, dược phẩm quá
                            hạn') }}</router-link></li>
                    <li><router-link to="/package" @click="closeMobileMenu">{{ $t('Hàng giả, hàng nhái, hàng vi phạm sở
                            hữu trí tuệ') }}</router-link></li>
                </ul>
            </li>

            <li class="dropdown">
                <a href="#">{{ $t('Hồ sơ năng lực') }}</a>
                <ul class="submenu">
                    <li><router-link to="/sodo" @click="closeMobileMenu">{{ $t('Sơ đồ tổ chức') }}</router-link></li>
                    <li><router-link to="/hethon" @click="closeMobileMenu">{{ $t('Hệ thống xử lý') }}</router-link></li>
                </ul>
            </li>

            <li><router-link to="/news" @click="closeMobileMenu">{{ $t('Tin tức') }}</router-link></li>
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
            isMobileMenuOpen: false
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
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
        }
    }
};
</script>

<style scoped>
.icon {
    width: 12px;
    height: 12px;
    fill: white;
    transition: transform 0.3s ease;
}

.dropdown:hover .icon {
    transform: rotate(180deg);
}

.navbar {
    font-family: Montserrat, sans-serif;
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

.logo img {
    width: 170px;
    transition: transform 0.3s ease;
}

.logo img:hover {
    transform: rotate(10deg);
}

.menu {
    list-style: none;
    display: flex;
    gap: 20px;
    margin-top: 10px;
    text-transform: uppercase;
}

.menu li {
    position: relative;
}

.menu a {
    color: white;
    text-decoration: none;
    padding: 10px;
    display: block;
    transition: color 0.3s;
}

.menu a:hover {
    color: #C8E6C9;
}

.dropdown:hover .submenu {
    display: block;
}

.submenu {
    display: none;
    position: absolute;
    background: #388E3C;
    text-transform: uppercase;
    z-index: 999;
    top: 100%;
    left: 0;
    list-style: none;
    width: 180px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.submenu li {
    border-bottom: 1px solid #4CAF50;
}

.submenu li a {
    padding: 10px;
    display: block;
}

.search-box input {
    padding: 8px;
    border: none;
    border-radius: 20px;
    outline: none;
    width: 200px;
    transition: width 0.3s ease;
}

.search-box input:focus {
    width: 250px;
}

.right-section {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-right: 30px;
}

.right-section .social-icons {
    font-size: 17px;
}

.language-select {
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

/* Mobile responsive */
.mobile-toggle {
    display: none;
    font-size: 28px;
    cursor: pointer;
    color: white;
    margin-right: 15px;
}

@media (max-width: 768px) {
    .mobile-toggle {
        display: block;
    }

    .menu {
        display: none;
        flex-direction: column;
        background: #2E7D32;
        width: 100%;
        position: absolute;
        top: 60px;
        left: 0;
        padding: 15px 0;
        z-index: 999;
    }

    .menu.open {
        display: flex;
    }

    .submenu {
        position: relative;
        background: #388E3C;
        box-shadow: none;
        width: 100%;
    }

    .submenu li a {
        padding-left: 25px;
    }
}
</style>