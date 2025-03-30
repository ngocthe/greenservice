<template>
    <header>
      <!-- Nút mở menu trên mobile -->
      <button class="menu-toggle" @click="menuOpen = true">☰</button>
  
      <!-- Logo -->
      <div class="logo">
        <img src="/images/logo.png" alt="Logo">
      </div>
  
      <!-- Menu chính -->
      <nav :class="{ 'menu-open': menuOpen }">
        <!-- Nút đóng menu trên mobile -->
        <button class="close-menu" @click="menuOpen = false">✖</button>
  
        <ul class="menu">
          <li v-for="item in menuItems" :key="item.id" class="menu-item">
            <a @click="toggleSubmenu(item)" :href="item.link">{{ item.title }}
              <span v-if="item.submenu" class="arrow">&#9662;</span>
            </a>
            <ul v-if="item.submenu" :class="{ 'submenu-open': item.open }" class="submenu">
              <li v-for="sub in item.submenu" :key="sub.id">
                <a :href="sub.link">{{ sub.title }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
  
      <!-- Overlay để đóng menu khi nhấn ra ngoài -->
      <div v-if="menuOpen" class="overlay show" @click="menuOpen = false"></div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
        menuItems: [
          { id: 1, title: "Home", link: "#" },
          { id: 2, title: "Services", link: "#", submenu: [
              { id: 21, title: "Logistics", link: "#" },
              { id: 22, title: "Waste Management", link: "#" }
            ]
          },
          { id: 3, title: "Contact", link: "#" }
        ]
      };
    },
    methods: {
      toggleSubmenu(item) {
        if (item.submenu) {
          item.open = !item.open;
        }
      }
    }
  };
  </script>
  
  <style>
  /* Reset */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  /* Header */
  header {
    background: #008000;
    color: white;
    padding: 10px 20px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
  }
  
  /* Logo */
  .logo img {
    height: 40px;
  }
  
  /* Menu chính */
  .menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  .menu-item {
    position: relative;
    padding: 10px;
  }
  .menu-item a {
    color: white;
    text-decoration: none;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .arrow {
    margin-left: 5px;
  }
  
  /* Submenu */
  .submenu {
    display: none;
    position: absolute;
    background: white;
    color: black;
    list-style: none;
    padding: 0;
    margin: 0;
    top: 100%;
    left: 0;
    min-width: 150px;
  }
  .submenu li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .submenu li a {
    color: black;
  }
  .submenu-open {
    display: block;
  }
  
  /* Responsive Menu */
  @media (max-width: 768px) {
    /* Nút mở menu */
    .menu-toggle {
      display: block;
      font-size: 28px;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      position: fixed;
      top: 15px;
      left: 20px;
      z-index: 1100;
    }
  
    /* Menu mobile */
    nav {
      position: fixed;
      top: 0;
      left: -100%; /* Ẩn menu */
      width: 250px;
      height: 100%;
      background: #008000;
      display: flex;
      flex-direction: column;
      padding-top: 60px;
      transition: left 0.3s ease-in-out;
      z-index: 1050;
    }
    .menu-open {
      left: 0; /* Hiển thị menu khi mở */
    }
  
    /* Nút đóng menu */
    .close-menu {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 24px;
      color: white;
      background: none;
      border: none;
      cursor: pointer;
    }
  
    /* Overlay */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      z-index: 1000;
    }
    .overlay.show {
      display: block;
    }
  
    /* Ẩn menu chính trên mobile */
    .menu {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .menu-item {
      padding: 15px;
    }
  }
  /* Ẩn menu-toggle và close-menu trên màn hình lớn */
.menu-toggle,
.close-menu {
  display: none;
}

/* Chỉ hiển thị trên màn hình nhỏ */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    font-size: 28px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    position: fixed;
    top: 15px;
    left: 20px;
    z-index: 1100;
  }

  .close-menu {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }
}

  </style>
  