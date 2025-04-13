<template>
    <nav :class="{ 'navbar': true, 'fixed': isScrolled }">
      <div class="logo">
        <a href="/"><img src="/images/logo.png" alt="Logo" ref="logo"></a>
      </div>
  
      <ul class="menu" :class="{ 'menu-open': isMobileMenuOpen }">
        <li><router-link to="/">{{ $t('home') }}</router-link></li>
  
        <!-- Dropdown 0 -->
        <li class="dropdown" :class="{ open: openDropdown === 0 }">
          <a href="#" @click.prevent="toggleDropdown(0)">
            {{ $t('XỬ LÝ CHẤT THẢI') }}
            <svg class="icon" viewBox="0 0 24 24">
              <path fill="white" d="M7 10l5 5 5-5z"></path>
            </svg>
          </a>
          <ul class="submenu">
            <li><router-link to="/trongoi" @click="closeMobileMenu">{{ $t('Xử lý CT trọn gói') }}</router-link></li>
            <li><router-link to="/yte" @click="closeMobileMenu">{{ $t('Xử lý CT y tế') }}</router-link></li>
            <li><router-link to="/baogia" @click="closeMobileMenu">{{ $t('Báo giá') }}</router-link></li>
          </ul>
        </li>
  
        <!-- Dropdown 1 -->
        <li class="dropdown" :class="{ open: openDropdown === 1 }">
          <a href="#" @click.prevent="toggleDropdown(1)">
            {{ $t('logistic') }}
            <svg class="icon" viewBox="0 0 24 24">
              <path fill="white" d="M7 10l5 5 5-5z"></path>
            </svg>
          </a>
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
  
        <!-- Dropdown 2 -->
        <li class="dropdown" :class="{ open: openDropdown === 2 }">
          <a href="#" @click.prevent="toggleDropdown(2)">
            {{ $t('Tiêu hủy hàng lỗi') }}
            <svg class="icon" viewBox="0 0 24 24">
              <path fill="white" d="M7 10l5 5 5-5z"></path>
            </svg>
          </a>
          <ul class="submenu">
            <li><router-link to="/loihong">{{ $t('Hàng nhập khẩu bị lỗi, hư hỏng') }}</router-link></li>
            <li><router-link to="/vipham">{{ $t('Hàng vi phạm quy định nhập khẩu') }}</router-link></li>
            <li><router-link to="/thuhoi">{{ $t('Hàng hóa bị thu hồi') }}</router-link></li>
            <li><router-link to="/package">{{ $t('Thực phẩm, mỹ phẩm, dược phẩm quá hạn') }}</router-link></li>
            <li><router-link to="/package">{{ $t('Hàng giả, hàng nhái, hàng vi phạm sở hữu trí tuệ') }}</router-link></li>
          </ul>
        </li>
  
        <!-- Dropdown 3 -->
        <li class="dropdown" :class="{ open: openDropdown === 3 }">
          <a href="#" @click.prevent="toggleDropdown(3)">
            {{ $t('Hồ sơ năng lực') }}
          </a>
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
  
      <div class="mobile-menu-btn" @click="toggleMobileMenu">
        ☰
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
      isMobileMenuOpen: false,
      openDropdown: null, // NEW: index của dropdown đang mở
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
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      this.openDropdown = null;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.openDropdown = null;
    },
    toggleDropdown(index) {
      if (this.openDropdown === index) {
        this.openDropdown = null;
      } else {
        this.openDropdown = index;
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  watch: {
    $route() {
      this.isMobileMenuOpen = false;
      this.openDropdown = null;
    }
  }
};
</script>


<style scoped>
/* Icon mũi tên xuống */

.icon {
    width: 12px;
    height: 12px;
    fill: white;
    /* Màu trắng để phù hợp với menu xanh lá */
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
    background: #2E7D32;
    /* Màu xanh lá cây */
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
    /* Màu xanh nhạt */
}

/* Dropdown */
.dropdown:hover .submenu {
    display: block;
}
.icon {
    width: 12px;
    height: 12px;
    fill: white;
    transition: transform 0.3s ease;
  }
  .dropdown:hover .icon {
    transform: rotate(180deg);
  }

.submenu {
    display: none;
    position: absolute;
    background: #388E3C;
    text-transform: uppercase;
    z-index: 999;
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

/* Nút ☰ hiển thị trên mobile */
.mobile-menu-btn {
    display: none;
    font-size: 26px;
    color: white;
    cursor: pointer;
    margin-left: auto;
    padding: 5px 15px;
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }

    .menu {
        display: none;
        flex-direction: column;
        width: 100%;
        background: #2E7D32;
        position: absolute;
        top: 80px;
        left: 0;
        z-index: 999;
    }

    .menu.menu-open {
        display: flex;
    }

    .submenu {
        position: static;
        box-shadow: none;
        width: 100%;
    }

    .dropdown:hover .submenu {
        display: none;
    }

    .dropdown .submenu {
        display: none;
    }

    .dropdown:focus-within .submenu,
    .dropdown.open .submenu {
        display: block;
    }

    .right-section {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }
    .right-section {
        flex-direction: row !important;
        justify-content: start;
        flex-wrap: wrap;
        gap: 10px;
        padding-top: 10px;
      }
    
      .right-section .social-icons {
        order: 1;
      }
    
      .language-select {
        order: 2;
      }
      .mobile-menu-btn {
        display: block;
      }
    
      .menu {
        display: none;
        flex-direction: column;
        width: 100%;
        background: #2E7D32;
        position: absolute;
        top: 80px;
        left: 0;
        z-index: 999;
      }
    
      .menu.menu-open {
        display: flex;
      }
    
      .submenu {
        position: static;
        box-shadow: none;
        width: 100%;
        display: none;
      }
    
      .dropdown.open .submenu {
        display: block;
      }
    
      .dropdown:hover .submenu {
        display: none;
      }
    
      .right-section {
        flex-direction: row !important;
        justify-content: start;
        flex-wrap: wrap;
        gap: 10px;
        padding-top: 10px;
      }
    
      .right-section .social-icons {
        order: 1;
      }
    
      .language-select {
        order: 2;
      }
}
</style>
