<template>
  <transition name="fade">
    <div v-if="$store.state.popup.typeDemonstration" class="demonstration">
      <button class="demonstration__close" @click="$store.commit('popup/updateDemonstration', false)">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 9L23 23M23 9L9 23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <FormDemonstration/>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PopupDemonstration'
}
</script>

<style lang="scss" scoped>
.demonstration {
  position: fixed;
  z-index: 11;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
  max-width: calc(100vw - 2 * var(--container-padding));
  max-height: calc(100vh - 2 * var(--container-padding));
  overflow-y: auto;
  border-radius: 1.6rem;
  @include w1023 {
    top: var(--container-padding);
  }
  &::-webkit-scrollbar {
    width: 0.6rem;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--primary-blue);
    border-radius: 0.6rem;
  }
  &::-webkit-scrollbar-track {
    background: var(--text-000);
  }
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    background: none;
    border: none;
    cursor: pointer;
    @include w1199 {
      display: flex;
    }
    @include w1023 {
      color: var(--text-000);
    }
    @include w767 {
      padding: 0.8rem;
    }
  }
}
</style>
