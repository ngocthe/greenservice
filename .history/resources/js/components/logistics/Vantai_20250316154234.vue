<template>
  <div class="service-detail">
    <transition name="fade">
      <h1 class="title">Dịch Vụ Vận Tải Quốc Tế (Sea, Air)</h1>
    </transition>
    
    <transition name="slide-up">
      <p class="description">
        Dịch vụ vận tải Quốc Tế của Green Service ngày càng trở nên phổ biến...
      </p>
    </transition>
    
    <div v-for="(section, index) in sections" :key="index" class="section">
      <transition name="slide-right" appear>
        <h2>{{ section.title }}</h2>
      </transition>
      
      <transition name="fade" appear>
        <ul>
          <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>

</style>
