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
  