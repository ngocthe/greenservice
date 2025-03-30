<template>
    <header>
      <div class="header-container">
        <div class="logo">
          <img src="/logo.png" alt="Logo">
        </div>
        <button class="menu-toggle" @click="menuOpen = !menuOpen">☰</button>
        <nav :class="{ 'menu-open': menuOpen }">
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
        <div class="social-icons">
          <a href="tel:+123456789"><i class="fa fa-phone"></i></a>
          <a href="https://zalo.me"><i class="fa fa-comment"></i></a>
          <a href="https://facebook.com"><i class="fa fa-facebook"></i></a>
        </div>
      </div>
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
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
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
  .header-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .logo img {
    height: 40px;
  }
  nav {
    flex: 1;
  }
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
  .social-icons a {
    color: white;
    font-size: 18px;
    margin-left: 15px;
  }
  .menu-toggle {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
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
      background: #008000;
      width: 100%;
    }
    .menu-open {
      display: flex;
    }
    .menu-toggle {
      display: block;
    }
  }
  </style>
  