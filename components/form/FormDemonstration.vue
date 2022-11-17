<template>
  <div class="form__content">
    <div class="form__left">
      <img class="form__img" src="/images/square.png" :alt="$t('form.title')">
      <h2 class="title form__title">{{ $t('form.title') }}</h2>
      <p class="form__text">{{ $t('form.text') }}</p>
    </div>
    <div class="form__right">
      <FormBlock/>
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
  </div>
</template>

<script>
export default {
  name: 'FormDemonstration',
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
.form {
  &__content {
    width: 109.6rem;
    max-width: 100%;
    min-height: 52.8rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 1.6rem;
    overflow: hidden;
    @include w1023 {
      grid-template-columns: auto;
      min-height: auto;
    }
  }
  &__left {
    position: relative;
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    color: var(--text-000);
    @include w767 {
      padding: 2.4rem 1.6rem;
    }
  }
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__title {
    position: relative;
    max-width: 33rem;
    margin: 0;
    @include w1023 {
      margin-bottom: 9.6rem;
      font-size: 4rem;
      line-height: 1.2;
    }
    @include w767 {
      max-width: 26rem;
      margin-bottom: 2.7rem;
      font-size: 2.4rem;
      line-height: 1.33;
    }
  }
  &__text {
    position: relative;
    max-width: 29.3rem;
    display: block;
    margin-top: auto;
    font-weight: 450;
    color: var(--primary-100);
  }
  &__right {
    background-color: var(--text-000);
  }
  &__bottom {
    display: flex;
    padding: 3.2rem;
    align-items: center;
    border-top: 0.1rem solid var(--text-200);
    @include w767 {
      flex-direction: column;
      align-items: center;
      padding: 2.4rem;
    }
  }
  &__socials {
    display: flex;
    padding-left: 0;
    list-style: none;
    @include w767 {
      order: 2;
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
      margin-bottom: 2rem;
      margin-left: 0;
    }
  }
}
</style>
