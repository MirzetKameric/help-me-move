<template>
  <div id="app" class="app">
      <div class="container app__content pt-3">
          <router-view/>
      </div>
      <div class="app__footer d-flex">
          <div class="container d-flex align-items-center">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
          </div>
      </div>
  </div>
</template>

<style lang="scss">
@import 'assets/scss/main';
$footer-height: 65px;

.app {
    min-height: 100vh;

    &__content {
        min-height: calc(100vh - #{$footer-height});
    }

    &__footer {
        min-height: $footer-height;
        background-color: rgba(0,0,0,0.06);

        a {
            margin-right: 1rem;
        }
    }
}
</style>
