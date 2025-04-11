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
        <!-- ...giữ nguyên toàn bộ menu của bạn ở đây... -->
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