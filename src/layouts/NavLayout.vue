<template>
  <div class="layout">
    <Header class="layout__top" />
    <div class="layout__body">
      <SideNav class="layout__sidebar" />

      <main class="layout__content">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
    </div>

    <!-- <Footer class="layout__top" /> -->
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import SideNav from '@/components/SideNav.vue'
// import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  overflow: hidden;
}

.layout__top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  z-index: 1000;
  background: white;
  border-bottom: 1px solid #ddd;
}

.layout__body {
  display: flex;
  margin-top: 100px; // компенсация высоты TopNav
  height: calc(100vh - 100px);
}

.layout__sidebar {
  position: fixed;
  top: 65px;
  left: 0;
  width: 240px;
  height: calc(100vh - 65px);
  background-color: #fff;
  box-shadow: var(--shadow-main-right);
  z-index: 100;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.layout__content {
  margin-left: 240px; // компенсация ширины SideNav
  padding: 20px;
  width: calc(100% - 240px);
  height: calc(100vh - 65px);
  overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px); // Изменено с translateX на translateY
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
