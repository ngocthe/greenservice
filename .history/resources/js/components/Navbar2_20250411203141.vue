<template>
    <nav :class="{'navbar': true, 'fixed': isScrolled}">
      <div class="logo">
        <a href="/"><img src="/images/logo.png" alt="Logo" ref="logo" /></a>
      </div>
  
      <!-- Mobile menu button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        ☰
      </button>
  
  
      <ul class="menu" :class="{ open: isMobileMenuOpen }">
        <li><router-link to="/">{{ $t('home') }}</router-link></li>

        <li class="dropdown">
            <a href="#">{{ $t('XỬ LÝ CHẤT THẢI') }}     <svg class="icon" viewBox="0 0 24 24">
        <path fill="white" d="M7 10l5 5 5-5z"></path>
    </svg></a>
            <ul class="submenu">
                <li><router-link to="/trongoi">{{ $t('Xử lý CT trọn gói') }}</router-link></li>
                <li><router-link to="/yte">{{ $t('Xử lý CT y tế') }}</router-link></li>
                <li><router-link to="/baogia">{{ $t('Báo giá') }}</router-link></li>
            </ul>
        </li>
         <li class="dropdown">
            <a href="#">{{ $t('logistic') }}     <svg class="icon" viewBox="0 0 24 24">
        <path fill="white" d="M7 10l5 5 5-5z"></path>
    </svg></a>
            <ul class="submenu">
                <li><router-link to="/logistic/vantai">{{ $t('Vận tải quốc tế (Sea, Air)') }}</router-link></li>
                <li><router-link to="/logistic/chuyenphatnhanh">{{ $t('Chuyển phát nhanh quốc tế') }}</router-link></li>
                <li><router-link to="/logistic/co">{{ $t('Xin C/O') }}</router-link></li>
                <li><router-link to="/logistic/tuvanhaiquan">{{ $t('Tư vấn Hải Quan') }}</router-link></li>
                <li><router-link to="/logistic/dichvuhaiquan">{{ $t('Thủ tục Hải quan xuất - nhập khẩu') }}</router-link></li>
                <li><router-link to="/logistic/thanhkhoan">{{ $t('Thanh khoản hàng gia công, sản xuất xuất khẩu') }}</router-link></li>
                <li><router-link to="/logistic/noidia">{{ $t('Vận tải Nội địa') }}</router-link></li>
                <li><router-link to="/logistic/khobai">{{ $t('Dịch vụ kho bãi') }}</router-link></li>
            </ul>
        </li>
            <li class="dropdown">
            <a href="#">{{ $t('Tiêu hủy hàng lỗi') }}  
             <svg class="icon" viewBox="0 0 24 24">
        <path fill="white" d="M7 10l5 5 5-5z"></path>
    </svg></a>
            <ul class="submenu">
                <li><router-link to="/loihong">{{ $t('Hàng nhập khẩu bị lỗi, hư hỏng') }}</router-link></li>
                <li><router-link to="/vipham">{{ $t('Hàng vi phạm quy định nhập khẩu') }}</router-link></li>
                <li><router-link to="/thuhoi">{{ $t('Hàng hóa bị thu hồi') }}</router-link></li>
                <li><router-link to="/package">{{ $t('Thực phẩm, mỹ phẩm, dược phẩm quá hạn') }}</router-link></li>
                <li><router-link to="/package">{{ $t('Hàng giả, hàng nhái, hàng vi phạm sở hữu trí tuệ') }}</router-link></li>

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
      }
    }
  };
</script>
<style scoped>
/* Nút menu mobile */
.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .mobile-menu-btn {
      display: block;
      margin-left: auto;
      margin-right: 20px;
    }
  
    .menu {
      display: none;
      flex-direction: column;
      width: 100%;
      background: #2E7D32;
      position: absolute;
      top: 60px;
      left: 0;
      z-index: 1001;
    }
  
    .menu.open {
      display: flex;
    }
  
    .menu li {
      text-align: left;
      border-bottom: 1px solid #4CAF50;
    }
  
    .submenu {
      position: relative;
      box-shadow: none;
      width: 100%;
    }
  
    .submenu li {
      border: none;
    }
  
    .right-section {
      display: none;
    }
  }
  @media (max-width: 768px) {
    /* ... các rule khác ... */
  
    .logo img {
      width: 130px;
      max-width: 100%;
      height: auto;
    }
  
    nav.navbar {
      flex-wrap: wrap;
    }
  
    .logo {
      flex: 1;
    }
  
    .mobile-menu-btn {
      flex-shrink: 0;
    }
  }
  
</style>