<template>
    <v-container class="app-container">
        <HomeView></HomeView>
    </v-container>
</template>
<script>
import HomeView from '@/views/HomeView.vue';
export default {
    name: 'App',
    components: {
        HomeView
    }
};
</script>

<style scoped>
.app-container {
    height: 100vh;
}
</style>
