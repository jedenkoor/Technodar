<template>
  <transition name="fade">
    <div v-if="$store.state.popup.typeContent" class="popup-content">
      <button class="popup-content__close" @click.prevent="$store.commit('popup/updateContent', { flag: false })">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 9L23 23M23 9L9 23" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="title popup-content__title mobile">{{ $store.state.popup.arrayContent[activeItem].title }}</div>
      <img
        :src="$store.state.popup.arrayContent[activeItem].image"
        alt="$store.state.popup.arrayContent[activeItem].title"
        class="popup-content__img"
      >
      <div class="popup-content__col">
        <div class="title popup-content__title">{{ $store.state.popup.arrayContent[activeItem].title }}</div>
        <div class="popup-content__text" v-html="$store.state.popup.arrayContent[activeItem].text"/>
        <div v-if="$store.state.popup.arrayContent.length > 1" class="slider__navigations">
          <button
            class="slider__arr slider__arr--prev"
            :class="{ 'disabled': activeItem === 0 }"
            @click.prevent="activeItem--"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
            </svg>
          </button>
          <button
            class="slider__arr slider__arr--next"
            :class="{ 'disabled': activeItem === $store.state.popup.arrayContent.length - 1 }"
            @click.prevent="activeItem++"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L16 12L8 4" stroke="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PopupContent',
  data () {
    return {
      activeItem: 0
    }
  },
  watch: {
    '$store.state.popup.typeContent' () {
      this.activeItem = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-content {
  position: fixed;
  z-index: 11;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
  width: 109.6rem;
  max-width: calc(100vw - 2 * var(--container-padding));
  height: 56.4rem;
  max-height: calc(100vh - 2 * var(--container-padding));
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.6rem));
  grid-gap: 3.2rem;
  padding: 3.2rem;
  overflow-y: auto;
  border-radius: 1.6rem;
  background-color: var(--text-000);
  @include w1023 {
    top: var(--container-padding);
    height: auto;
    grid-template-columns: 20rem 1fr;
  }
  @include w767 {
    display: block;
    padding: 2.4rem 1.6rem;
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
    @include w767 {
      padding: 0.8rem;
    }
  }
  &__img {
    width: 100%;
    margin: auto;
    @include w1023 {
      margin: 0;
    }
  }
  &__col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    margin-bottom: 6.4rem;
    @include w1199 {
      padding-right: 2rem;
    }
    @include w1023 {
      margin-bottom: 4rem;
    }
    @include w767 {
      display: none;
      margin-bottom: 2rem;
    }
    &.mobile {
      display: none;
      @include w767 {
        display: block;
      }
    }
  }
  &__text {
    margin-bottom: 4rem;
    @include w767 {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 0.1rem solid var(--text-200);
    }
  }
}

.slider {
  &__navigations {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
  &__arr {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    border: 0.1rem solid var(--text-300);
    background: none;
    cursor: pointer;
    color: var(--text-1000);
    transition: 0.2s;
    @include hover {
      &:hover,
      &:focus {
        color: var(--primary-blue);
        border-color: var(--primary-blue);
      }
      &:active {
        color: var(--text-1000);
        border-color: var(--primary-shadow);
      }
    }
    @include active {
      &:active {
        color: var(--text-1000);
        border-color: var(--primary-shadow);
      }
    }
    &.disabled {
      border-color: var(--text-300);
      pointer-events: none;
      svg {
        opacity: 0.3;
      }
    }
    &--next {
      margin-left: 1.6rem;
    }
    svg {
      width: 2.4rem;
    }
  }
}
</style>
