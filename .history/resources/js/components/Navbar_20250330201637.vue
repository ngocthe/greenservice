<template>
    <header>
      <button class="menu-toggle" @click="menuOpen = true">☰</button>
      <nav :class="{ 'menu-open': menuOpen }">
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
  @media (max-width: 768px) {
    .menu {
      position: fixed;
      top: 0;
      left: -100%; /* Ẩn menu bên ngoài màn hình */
      width: 250px;
      height: 100%;
      background: #008000;
      display: flex;
      flex-direction: column;
      padding-top: 60px;
      transition: left 0.3s ease-in-out;
    }
    .menu-open {
      left: 0; /* Trượt menu vào khi mở */
    }
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
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 24px;
      color: white;
      background: none;
      border: none;
      cursor: pointer;
    }
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
  }
  
</style>