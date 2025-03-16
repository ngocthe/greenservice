<template>
    <nav :class="{'navbar': true, 'fixed': isScrolled}">
        <div class="logo">
            <img src="https://greenservicelogistics.vn/wp-content/uploads/2024/07/logo-white.svg" alt="Logo" ref="logo">
        </div>

        <ul class="menu">
            <li><router-link to="/">{{ $t('home') }}</router-link></li>

            <li class="dropdown">
                <a href="#">{{ $t('Xử lý chất thải') }}     <svg class="icon" viewBox="0 0 24 24">
            <path fill="white" d="M7 10l5 5 5-5z"></path>
        </svg></a>
                <ul class="submenu">
                    <li><router-link to="/trongoi">{{ $t('Trọn gói') }}</router-link></li>
                    <li><router-link to="/yte">{{ $t('Xử lý CT y tế') }}</router-link></li>
                    <li><router-link to="/baogia">{{ $t('Báo giá') }}</router-link></li>
                </ul>
            </li>
             <li class="dropdown">
                <a href="#">{{ $t('logistic') }}     <svg class="icon" viewBox="0 0 24 24">
            <path fill="white" d="M7 10l5 5 5-5z"></path>
        </svg></a>
                <ul class="submenu">
                    <li><router-link to="vantai">{{ $t('Vận tải quốc tế (Sea, Air)') }}</router-link></li>
                    <li><router-link to="chuyenphatnhanh">{{ $t('Chuyển phát nhanh quốc tế') }}</router-link></li>
                    <li><router-link to="/xinco">{{ $t('Xin C/O') }}</router-link></li>
                    <li><router-link to="/tuvanhaiquan">{{ $t('Tư vấn Hải Quan') }}</router-link></li>
                    <li><router-link to="/thutuchaiquan">{{ $t('Thủ tục Hải quan xuất - nhập khẩu') }}</router-link></li>
                    <li><router-link to="/thutuchaiquan">{{ $t('Thanh khoản hàng gia công, sản xuất xuất khẩu') }}</router-link></li>
                    <li><router-link to="/thutuchaiquan">{{ $t('Vận tải Nội địa') }}</router-link></li>
                    <li><router-link to="/thutuchaiquan">{{ $t('Dịch vụ kho bãi') }}</router-link></li>
                </ul>
            </li>
                <li class="dropdown">
                <a href="#">{{ $t('Tiêu hủy hàng lỗi') }}  
                 <svg class="icon" viewBox="0 0 24 24">
            <path fill="white" d="M7 10l5 5 5-5z"></path>
        </svg></a>
                <ul class="submenu">
                    <li><router-link to="/waste-management">{{ $t('Tiêu hủy hàng lỗi') }}</router-link></li>
                    <li><router-link to="/waste-management">{{ $t('Tiêu hủy hàng không có giá trị') }}</router-link></li>
                    <li><router-link to="/package">{{ $t('Đơn giá') }}</router-link></li>
                </ul>
            </li>

        <li class="dropdown">
                <a href="#">{{ $t('Hồ sơ năng lực') }}</a>
                <ul class="submenu">
                    <li><router-link to="/sodo">{{ $t('Sơ đồ tổ chức') }}</router-link></li>
                    <li><router-link to="/hethon">{{ $t('Hệ thống xử lý') }}</router-link></li>
                </ul>
            </li>
            <li><router-link to="/news">{{ $t('Tin tức') }}</router-link></li>
        </ul>

        <div class="right-section">
            <!-- Ô tìm kiếm -->
            <div class="search-box">
                <input type="text" v-model="search" :placeholder="$t('search')">
            </div>

            <!-- Select ngôn ngữ -->
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
            isScrolled: false
        };
    },
    mounted() {
        // Animation logo
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
        }
    }
};
</script>

<style scoped>
/* Icon mũi tên xuống */

.icon {
    width: 12px;
    height: 12px;
    fill: white; /* Màu trắng để phù hợp với menu xanh lá */
    transition: transform 0.3s ease;
}

/* Khi hover, icon sẽ xoay */
.dropdown:hover .icon {
    transform: rotate(180deg);
}   
/* Navbar */
.navbar {
    font-family: Montserrat, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2E7D32; /* Màu xanh lá cây */
    padding: 10px 20px;
    color: white;
    width: 100%;
    transition: all 0.3s ease;
}

/* Khi cuộn xuống, navbar sẽ fixed */
.navbar.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Để tránh nội dung bị che khi menu fixed */
body {
    padding-top: 0;
}



/* Logo */
.logo img {
    width: 170px;
    transition: transform 0.3s ease;
}

.logo img:hover {
    transform: rotate(10deg);
}

/* Menu */
.menu {
    list-style: none;
    display: flex;
    gap: 20px;
    margin-top:10px
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
    color: #C8E6C9; /* Màu xanh nhạt */
}

/* Dropdown */
.dropdown:hover .submenu {
    display: block;
}

.submenu {
    display: none;
    position: absolute;
    background: #388E3C;
    z-index:999;
    pointer: cursor;
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

/* Search Box */
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

/* Ngôn ngữ */
.right-section {
    display: flex;
    align-items: center;
    gap: 15px;
}

.language-select {
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
</style>
