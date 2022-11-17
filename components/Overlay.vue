<template>
  <transition name="fade">
    <div
      v-if="value || $store.state.popup.popupOpened"
      v-scroll-lock="value || $store.state.popup.popupOpened"
      class="overlay"
      :class="{ 'up': $store.state.popup.typeDemonstration || $store.state.popup.typeContent }"
      @click="closePopup"
    >
      <div class="overlay__bar">
        <div class="overlay__round">
          <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5L19.5 19M19.5 5L5.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="overlay__close">{{ $t('overlay') }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CommonOverlay',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closePopup () {
      this.$store.commit('popup/updateCallback', false)
      this.$store.commit('popup/updateDemonstration', false)
      this.$store.commit('popup/updateContent', false)
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  &.up {
    z-index: 4;
  }
  &__bar {
    position: absolute;
    bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    @include hover {
      &:hover {
        svg {
          transform: rotate(90deg);
        }
      }
    }
    @include active {
      &:active {
        svg {
          transform: rotate(90deg);
        }
      }
    }
    @include w1199 {
      display: none;
    }
  }
  &__round {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--text-200);
    svg {
      width: 2.4rem;
      height: auto;
      display: block;
      color: var(--secondary-red);
      transition: transform 0.3s;
    }
  }
  &__close {
    margin-top: 1.6rem;
    line-height: 1.12;
    color: var(--text-000);
    letter-spacing: normal;
  }
}
</style>
