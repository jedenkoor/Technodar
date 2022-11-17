<i18n>
{
  "ru": {
    "title": "Оставьте свои контактные данные и наши специалисты свяжутся с вами"
  },
  "en": {
    "title": "Leave your contact details and our specialists will contact you"
  }
}
</i18n>

<template>
  <transition name="fade">
    <div v-if="$store.state.popup.typeCallback" class="container callback">
      <div class="callback__col">
        <button class="callback__close" @click="$store.commit('popup/updateCallback', false)">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9L23 23M23 9L9 23" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="title callback__title">{{ $t('title') }}</div>
        <div class="form__bottom">
          <ul class="form__socials">
            <li v-for="(social, index) in socials" :key="index" class="form__social">
              <a :href="social.link">
                <img :src="`/images/icons/${social.icon}.svg`" :alt="social.name" :title="social.name">
              </a>
            </li>
          </ul>
          <a class="form__link" href="mailto:info@skrt.biz">info@skrt.biz</a>
          <a class="form__link" href="tel:8 800 250-00-16">8 800 250-00-16</a>
        </div>
      </div>
      <div class="callback__col">
        <FormBlock/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PopupCallback',
  data () {
    return {
      socials: [
        {
          icon: 'tg',
          name: 'Telegram',
          link: '#'
        },
        {
          icon: 'vk',
          name: 'Vkontakte',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
body[style*="padding-right: 6px;"] .callback {
  right: calc(0.6rem + var(--container-padding));
}
.callback {
  position: fixed;
  top: 16.3rem;
  right: var(--container-padding);
  left: var(--container-padding);
  z-index: 10;
  width: auto;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.2rem));
  grid-gap: 2.4rem;
  @include more-1600 {
    left: calc((100vw - 135.7rem) / 2);
    right: calc((100vw - 135.7rem) / 2 + 0.6rem);
  }
  @include w1199 {
    grid-template-columns: auto;
    grid-gap: 0;
    background: var(--text-000);
    border-radius: 1.6rem;
    max-height: 69rem;
    height: calc(100% - 19.3rem);
    overflow-y: auto;
  }
  @include w1023 {
    top: 10.3rem;
    height: calc(100% - 13.3rem);
  }
  @include w767 {
    top: 8.3rem;
    max-height: none;
    height: calc(100% - 11.3rem);
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
  &__col {
    position: relative;
    background-color: var(--text-000);
    border-radius: 1.6rem;
    &:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 3.2rem;
      @include w1199 {
        border-bottom: 0.1rem solid var(--text-200);
      }
      @include w767 {
        padding: 2.4rem 1.6rem;
      }
    }
  }
  &__close {
    position: absolute;
    top: 0;
    right: 0;
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
  &__title {
    max-width: 72%;
    margin: 0;
    @include w1400 {
      max-width: none;
    }
    @include w1199 {
      margin-bottom: 8rem;
      padding-right: 3rem;
    }
    @include w767 {
      margin-bottom: 4rem;
    }
  }
}

.form {
  &__bottom {
    display: flex;
    align-items: center;
    @include w767 {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__socials {
    display: flex;
    padding-left: 0;
    list-style: none;
    @include w767 {
      margin-bottom: 2rem;
    }
  }
  &__social {
    flex-shrink: 0;
    & + & {
      margin-left: 2rem;
    }
    a {
      width: 3.2rem;
      height: 3.2rem;
      display: flex;
      margin: 0;
      border-radius: 50%;
      transition: transform 0.3s;
      @include hover {
        &:hover,
        &:focus {
          transform: translateY(-0.4rem);
        }
      }
      @include active {
        &:active {
          transform: translateY(-0.4rem);
        }
      }
    }
    svg {
      margin: auto;
      height: auto;
      display: block;
    }
  }
  &__link {
    margin-left: 2rem;
    font-weight: 450;
    line-height: 1.12;
    letter-spacing: normal;
    color: var(--text-1000);
    @include hover {
      &:hover,
      &:focus {
        color: var(--primary-blue);
      }
      &:active {
        color: var(--primary-shadow);
      }
    }
    @include active {
      &:active {
        color: var(--primary-shadow);
      }
    }
    @include w767 {
      margin-left: 0;
    }
    & + & {
      @include w767 {
        margin-top: 2rem;
      }
    }
  }
}
</style>
