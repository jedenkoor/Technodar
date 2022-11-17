<i18n>
{
  "ru": {
    "reading": "Время чтения:",
    "subscribe": "Подписаться на рассылку",
    "navigation": "Навигация",
    "font": "Шрифт",
    "source": "Источник:",
    "also": "Также читайте"
  },
  "en": {
    "reading": "Reading time:",
    "subscribe": "Subscribe to newsletter",
    "navigation": "Navigation",
    "font": "Font",
    "source": "Source:",
    "also": "Also read"
  }
}
</i18n>

<template>
  <main class="full-wide white-footer content post">
    <div class="section-margin post__wrap">
      <div class="post__info">
        <div class="post__row">
          <div class="post__date">
            <span>{{ date }}</span>
            |
            <span>{{ time }}</span>
          </div>
          <div class="post__reading">
            <span>{{ $t('reading') }}</span>
            <span>{{ reading }}</span>
          </div>
        </div>
        <h1 class="title post__title">{{ title }}</h1>
        <p class="post__descr">{{ description }}</p>
        <div class="post__row">
          <ul class="post__socials">
            <li v-for="(social, index) in socials" :key="index" class="post__social">
              <a :href="social" class="post-social__link">
                <img :src="`/images/icons/post-social${index + 1}.svg`" alt="">
              </a>
            </li>
          </ul>
          <button class="btn btn-blue-outlined post__subscribe">{{ $t('subscribe') }}</button>
        </div>
      </div>
    </div>
    <img :src="banner" :alt="title" class="section-margin post__banner">
    <div class="full-wide section-margin post__wrap">
      <aside class="post__aside">
        <div class="post-aside__col">
          <p class="post-aside__title">{{ $t('navigation') }}</p>
          <ul class="post-aside__list">
            <li v-for="(item, index) in navigation" :key="index" :data-id="item.replace(/\s/g, '')" class="post-aside__item">
              <a
                :href="`#${item.replace(/\s/g, '')}`"
                class="post-aside__link"
                @click.prevent="goNavigation(item.replace(/\s/g, ''))"
              >{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="post-aside__col">
          <p class="post-aside__title">{{ $t('font') }}</p>
          <div class="post-aside__font">
            <div class="post-aside-font__top">
              <span>A</span>
              <span>A</span>
            </div>
            <range-slider
              class="post-aside-font__slider"
              min="1"
              max="5"
              step="1"
              v-model="font"
            />
          </div>
        </div>
      </aside>
      <article class="post__content">
        <div v-html="content"/>
        <p class="post__source">
          {{ $t('source') }}
          <a :href="`https://${source}`" rel="noopener noreferrer">{{ source }}</a>
        </p>
      </article>
    </div>
    <div class="section-margin post__also">
      <h2 class="title post-also__title">{{ $t('also') }}</h2>
      <ul class="post-also__list">
        <li v-for="(item, index) in also" :key="index" class="post-also__item">
          <CommonBlogItem :data="item"/>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import throttle from 'lodash/throttle'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  name: 'PostPage',
  components: {
    RangeSlider
  },
  data () {
    return {
      socials: [
        '#',
        '#',
        '#',
        '#'
      ],
      font: 2,
      date: '19.05.2022',
      time: '13:17',
      reading: '8 минут',
      title: 'Грант на новый лайнер может получить Московское речное пароходство',
      description: 'Судовой утилизационный грант (СУГ) в 750 млн рублей на строительство круизного судна могут выделить Московскому речному пароходству.',
      banner: '/images/temp/post-banner.jpg',
      content: '<p class="content__title" id="СУГ">СУГ</p><p class="content__text">СУГ предоставляется компаниям на строительство нового судна в обмен на утилизацию старого, возраст которого составляет не менее 30 лет, сообщает ТАСС. "Мы видим большой интерес наших граждан к внутреннему туризму, их желание отдыхать в России и готовы помогать с грантами туристическим компаниям, которые будут заказывать современный круизный флот в России", - сказал Спиридонов.</p><img src="/images/temp/post-banner.jpg" alt=""><p class="content__title" id="ПетрВеликий">Петр Великий</p><p class="content__text">По словам парламентария, у отечественных судостроителей есть все компетенции для обновления флота. Так,  "Петр Великий" строится на астраханском судостроительном заводе "Лотос", входящем Объединенную судостроительную корпорацию. Лайнер должен выйдет в первую навигацию весной 2023 года.</p><img src="/images/temp/post-banner.jpg" alt=""><p class="content__title"  id="Габариты">Габариты</p><p class="content__text">Это новейший проект теплохода класса "Река - море". Пятипалубный корабль возьмет на борт 310 пассажиров и 121 члена экипажа. Длина судна - 141,1 м, ширина - 16,84 м, осадка - 3,2 м, скорость - 22,5 км/ч. Основные маршруты пролегают через порты Черного моря, Каспия и реки Волги. "Петр Великий" станет флагманом линейки теплоходов PV300VD.</p>',
      navigation: [
        'СУГ',
        'Петр Великий',
        'Габариты'
      ],
      source: 'korabel.ru',
      also: [
        {
          tag: 'Новости компании',
          link: '1',
          image: '/images/temp/blog1.jpg',
          date: '19.05.2022',
          time: '13:17',
          title: 'Грант на новый лайнер может получить Московское речное пароходство'
        },
        {
          tag: 'Новости сферы',
          link: '2',
          image: '/images/temp/blog2.jpg',
          date: '19.05.2022',
          time: '13:17',
          title: 'Метрологические услуги – поверка расходомеров для учета судового топлива Метрологические услуги – поверка расходомеров для учета судового топлива'
        },
        {
          tag: 'Статьи',
          link: '3',
          image: '/images/temp/blog3.jpg',
          date: '19.05.2022',
          time: '13:17',
          title: 'Сделку по продаже «Совкомфлотом» 12 судов назвали удачной'
        }
      ]
    }
  },
  watch: {
    font (value) {
      const titles = document.querySelectorAll('.content__title')
      const texts = document.querySelectorAll('.content__text')
      let sizeTitle = null
      let sizeText = null
      switch (value) {
        case 1:
          sizeTitle = 48
          sizeText = 24
          break
        case 2:
          sizeTitle = 40
          sizeText = 20
          break
        case 3:
          sizeTitle = 32
          sizeText = 18
          break
        case 4:
          sizeTitle = 28
          sizeText = 16
          break
        case 5:
          sizeTitle = 24
          sizeText = 14
          break
      }
      titles.forEach((item) => {
        item.style.fontSize = `${sizeTitle}px`
      })
      texts.forEach((item) => {
        item.style.fontSize = `${sizeText}px`
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.checkNavigationItems()
      this.$nuxt.$on('win-scroll', throttle(() => {
        this.checkNavigationItems()
      }, 300))
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('win-scroll')
  },
  methods: {
    checkNavigationItems () {
      const titles = document.querySelectorAll('.content__title')
      titles.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight) {
          document.querySelector(`.post-aside__item[data-id="${item.getAttribute('id')}"]`).classList.add('active')
        } else {
          document.querySelector(`.post-aside__item[data-id="${item.getAttribute('id')}"]`).classList.remove('active')
        }
      })
    },
    goNavigation (item) {
      this.$scrollTo(`#${item}`, {
        offset: -190
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding-top: 25.9rem;
  background-color: var(--text-200);
  @include w1023 {
    padding-top: 17.9rem;
  }
  @include w767 {
    padding-top: 8.4rem;
  }
  &__wrap {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2.4rem;
    @include w1199 {
      display: block;
      margin-bottom: 4rem;
    }
  }
  &__info {
    grid-column: 5 / 13;
  }
  &__row {
    display: flex;
    align-items: center;
    @include w767 {
      display: block;
    }
  }
  &__date {
    margin-right: 4rem;
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: normal;
    color: var(--text-300);
    @include w767 {
      margin-bottom: 0.8rem;
    }
    span {
      color: var(--text-600);
      &:first-child {
        margin-right: 0.6rem;
      }
      &:last-child {
        margin-left: 0.6rem;
      }
    }
  }
  &__reading {
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: normal;
    color: var(--text-600);
    span {
      &:last-child {
        margin-left: 0.4rem;
        color: var(--text-1000);
      }
    }
  }
  &__title {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  &__descr {
    max-width: 90%;
    margin-bottom: 4rem;
    color: var(--text-700);
    @include w1199 {
      max-width: none;
    }
  }
  &__socials {
    display: flex;
    align-items: center;
    margin-right: 8rem;
    padding-left: 0;
    list-style: none;
    @include w767 {
      margin-right: 0;
      margin-bottom: 2.4rem;
    }
  }
  &__social {
    &:not(:last-child) {
      margin-right: 2.4rem;
    }
  }
  &-social {
    &__link {
      display: flex;
      img {
        width: 4.4rem;
        @include w767 {
          width: 5rem;
        }
      }
    }
  }
  &__subscribe {
    padding: 1.5rem 3.1rem;
    @include w767 {
      font-size: 1.6rem;
    }
  }
  &__banner {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 64rem;
    object-fit: cover;
    border-radius: 1.6rem;
    @include w1199 {
      height: 29rem;
      margin-bottom: 4rem;
    }
    @include w767 {
      height: 26rem;
    }
    & + .post__wrap {
      position: relative;
      z-index: 2;
      padding-bottom: 8rem;
      @include w1199 {
        margin-bottom: 0;
      }
      &:before {
        content: '';
        position: absolute;
        top: -40rem;
        left: 0;
        z-index: -1;
        width: 100%;
        height: calc(100% + 40rem);
        background-color: var(--text-000);
        @include w1199 {
          display: none;
        }
      }
    }
  }
  &__aside {
    position: sticky;
    top: 17rem;
    grid-column: 1 / 3;
    height: max-content;
    @include w1199 {
      position: static;
      display: flex;
    }
    @include w767 {
      display: block;
      margin-bottom: 3.5rem;
    }
  }
  &-aside {
    &__col {
      @include w1199 {
        flex: 0 0 20rem;
        margin-right: 8rem;
      }
      @include w767 {
        margin-right: 0;
      }
    }
    &__title {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 0.1rem solid var(--text-300);
      line-height: 1.12;
    }
    &__list {
      margin-bottom: 8rem;
      padding-left: 0;
      list-style: none;
      @include w1199 {
        margin-bottom: 4rem;
      }
    }
    &__item {
      display: flex;
      color: var(--text-400);
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
      &.active {
        color: var(--text-1000);
      }
    }
    &__link {
      line-height: 1.12;
    }
    &__font {
      margin-top: 4rem;
    }
    &-font {
      &__top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        span {
          &:first-child {
            font-size: 4rem;
            line-height: 1.2;
          }
          &:last-child {
            font-size: 1.4rem;
            line-height: 1.14;
          }
        }
      }
      &__slider {
        padding: 0;
        width: 100%;
        margin-top: 1rem;
      }
    }
  }
  &__content {
    grid-column: 5 / 13;
    @include w1199 {
      padding: 4rem 3.2rem;
      background: var(--text-000);
      border-radius: 1.6rem;
    }
    @include w767 {
      margin-right: calc(-1 * var(--container-padding));
      margin-left: calc(-1 * var(--container-padding));
      padding: 4rem 1.6rem;
    }
  }
  &__source {
    margin-top: 6rem;
    line-height: 1.12;
    letter-spacing: normal;
  }
  &-also {
    &__title {
      margin-top: 0;
      margin-bottom: 4rem;
    }
    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2.4rem;
      padding-left: 0;
      list-style: none;
      @include w1199 {
        margin-right: calc(-1 * var(--container-padding));
        margin-left: calc(-1 * var(--container-padding));
        margin-bottom: -1rem;
        padding-right: var(--container-padding);
        padding-left: var(--container-padding);
        padding-bottom: 1rem;
        overflow-x: scroll;
      }
    }
    &__item {
      @include w1199 {
        width: 42.4rem;
      }
      @include w767 {
        width: 35.4rem;
      }
    }
  }
}
</style>
