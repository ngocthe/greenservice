<template>
    <div>
        <Navbar2 />
        <router-view />
    </div>
</template>

<script>
import Navbar2 from './components/Navbar2.vue';

export default {
    components: { Navbar2 }
};
</script>
