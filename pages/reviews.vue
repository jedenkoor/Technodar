<i18n>
{
  "ru": {
    "title": "Отзывы о нашей работе",
    "row": {
      "text": "Поделитесь мнением о нашей работе",
      "btn": "Оставить отзыв"
    }
  },
  "en": {
    "title": "Reviews about our work",
    "number": "reviews",
    "row": {
      "text": "Share your opinion about our work",
      "btn": "Leave feedback"
    }
  }
}
</i18n>

<template>
  <main class="content full-wide white-footer reviews">
    <h1 class="title reviews__title">{{ $t('title') }}</h1>
    <span class="reviews__number">
      {{ reviews.length }}
      <slot v-if="$i18n.locale === 'ru'">{{ declOfNum(reviews.length, ['отзыв', 'отзыва', 'отзывов']) }}</slot>
      <slot v-else>{{ $t('number') }}</slot>
    </span>
    <ul class="reviews__list">
      <template v-for="(review, reviewIndex) in reviews">
        <li v-if="reviewIndex >= offset && reviewIndex < offset + limit" :key="reviewIndex" class="reviews__item">
          <svg class="reviews-item__icon" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#F2F2F2"/>
            <path d="M23.8279 25.5055H21.5262L23.9984 19H21.2705L18.5 25.1099V31H23.8279V25.5055ZM31.3295 25.5055H29.0279L31.5 19H28.7721L26.0016 25.1099V31H31.3295V25.5055Z" fill="#1333BB"/>
          </svg>
          <p class="reviews-item__text">{{ review.text }}</p>
          <div class="reviews-item__images" :class="{ 'one': review.images.length === 1 }">
            <template v-for="(image, imageIndex) in review.images">
              <img
                v-if="imageIndex < numImages"
                :key="imageIndex"
                :src="image"
                :alt="review.author"
                class="reviews-item__img"
                @click="review.index = imageIndex"
              >
            </template>
            <span v-if="review.images.length > numImages" class="reviews-item__more">
              +{{ review.images.length - numImages }}
            </span>
            <client-only>
              <CoolLightBox
                :items="review.images"
                :index="review.index"
                @close="review.index = null"
                :close-on-click-outside-mobile="true"
              />
            </client-only>
          </div>
          <hr>
          <span class="reviews-item__author">{{ review.author }}</span>
          <span class="reviews-item__position">{{ review.position }}</span>
          <span class="reviews-item__location">{{ review.location }}</span>
        </li>
      </template>
    </ul>
    <div class="section-margin reviews__pagination">
      <div class="reviews-pagination__numbers">
        <span class="reviews-pagination__num current">{{ `${currentPage}`.padStart(2, '0') }}</span>
        <span class="reviews-pagination__num all">{{ `${totalPages}`.padStart(2, '0') }}</span>
      </div>
      <div class="reviews-pagination__arrows">
        <a :href="`${$route.path}?page=${currentPage - 1}`" :class="['reviews-pagination__arr', 'prev', { 'disabled': currentPage === 1 }]" @click.prevent="prevPage">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
          </svg>
        </a>
        <a :href="`${$route.path}?page=${currentPage + 1}`" :class="['reviews-pagination__arr', 'next', { 'disabled': currentPage === totalPages }]" @click.prevent="nextPage">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 20L16 12L8 4" stroke="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="section-margin row">
      <div class="row__icon">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2828 17.8686H18.8651M15.2828 22.6449H24.8355M32 20.2568C32 26.8515 26.6539 32.1976 20.0592 32.1976C17.7709 32.1976 15.633 31.5539 13.8166 30.4378L9.66808 32.2157C8.67732 32.6404 7.67556 31.6386 8.10017 30.6478L9.8781 26.4993C8.76197 24.6829 8.11832 22.545 8.11832 20.2568C8.11832 13.662 13.4644 8.31592 20.0592 8.31592C26.6539 8.31592 32 13.662 32 20.2568Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="row__text">{{ $t('row.text') }}</p>
      <nuxt-link to="/" class="btn btn-white-filled row__btn">
        {{ $t('row.btn') }}
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import throttle from 'lodash/throttle'
import { declOfNum } from '~/functions/declOfNum'

export default {
  name: 'ReviewsPage',
  data () {
    return {
      page: 'reviews',
      limit: 3,
      currentPage: null,
      winW: null,
      reviews: [
        {
          text: 'Группа компаний Технодар успешно подобрала оборудование, показала свою эффективность и высокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах Группа компаний Технодар успешно подобрала оборудование, показала свою эффективность и высокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах Группа компаний Технодар успешно подобрала',
          author: 'Абузаров А. А.',
          position: 'Начальник железнодорожного участка',
          location: 'Загорский трубный завод',
          images: [
            '/images/temp/review.jpg',
            '/images/temp/review.jpg'
          ]
        },
        {
          text: 'Группа компаний Технодар успешно подобрала оборудование, показала свою эффективность и высокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах Группа компаний Технодар успешно подобрала оборудование, показала свою эффективность и высокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах сокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах',
          author: 'Абузаров А. А.',
          position: 'Начальник железнодорожного участка',
          location: 'Загорский трубный завод',
          images: [
            '/images/temp/review.jpg',
            '/images/temp/review.jpg',
            '/images/temp/review.jpg',
            '/images/temp/review.jpg',
            '/images/temp/review.jpg',
            '/images/temp/review.jpg',
            '/images/temp/review.jpg'
          ]
        },
        {
          text: 'На выставке “Нева 2019” в Санкт-Петербурге мы познакомились с предложением по внедрению системы контроля расхода топлива ГК Технодар. Уже через полгода СКРТ была установлена специалистами ГК Технодар на первое судно нашей компании. С внедрением системы стали доступны возможности по отслеживанию расхода топлива в режиме реального времени. Система позволила автоматизировать учет топлива на предприятии: есть функции автоматического формирования отчетов за любой период времени. Также хотим отметить работу технического и диспетчерского отделов ГК Технодар, которые оперативно реагируют на запросы и оказывают консультации. Считаем, что эффективность установки СКРТ от ГК Технодар доказала необходимость дальнейшей работы в данном направлении.',
          author: 'Абузаров А. А.',
          position: 'Начальник железнодорожного участка',
          location: 'Загорский трубный завод',
          images: [
            '/images/temp/review.jpg'
          ]
        },
        {
          text: 'Группа компаний Технодар успешно подобрала оборудование, показала свою эффективность и высокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах',
          author: 'Абузаров А. А.',
          position: 'Начальник железнодорожного участка',
          location: 'Загорский трубный завод',
          images: [
            '/images/temp/review.jpg',
            '/images/temp/review.jpg'
          ]
        },
        {
          text: 'Группа компаний Технодар успешно подобрала оборудование, показала свою эффективность и высокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах',
          author: 'Абузаров А. А.',
          position: 'Начальник железнодорожного участка',
          location: 'Загорский трубный завод',
          images: [
            '/images/temp/review.jpg',
            '/images/temp/review.jpg'
          ]
        },
        {
          text: 'Группа компаний Технодар успешно подобрала оборудование, показала свою эффективность и высокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах',
          author: 'Абузаров А. А.',
          position: 'Начальник железнодорожного участка',
          location: 'Загорский трубный завод',
          images: [
            '/images/temp/review.jpg',
            '/images/temp/review.jpg'
          ]
        },
        {
          text: 'Группа компаний Технодар успешно подобрала оборудование, показала свою эффективность и высокий уровень качества производимых работ. Теперь нынешняя система дает понимание о фактическом расходе топлива на всех тепловозах',
          author: 'Абузаров А. А.',
          position: 'Начальник железнодорожного участка',
          location: 'Загорский трубный завод',
          images: [
            '/images/temp/review.jpg',
            '/images/temp/review.jpg'
          ]
        }
      ]
    }
  },
  computed: {
    offset () {
      return (this.currentPage - 1) * this.limit
    },
    totalPages () {
      return Math.ceil(this.reviews.length / this.limit)
    },
    numImages () {
      if (this.winW > 1023) {
        return 4
      } else if (this.winW > 767 && this.winW < 1024) {
        return 2
      } else {
        return 1
      }
    }
  },
  created () {
    this.reviews.forEach((review) => {
      this.$set(review, 'index', null)
    })
    this.currentPage = +this.$route.query.page || 1
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages
      this.$router.replace({ path: this.$route.path, query: { page: this.currentPage } })
    } else if (this.currentPage < 1) {
      this.currentPage = 1
      this.$router.replace({ path: this.$route.path, query: { page: this.currentPage } })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.winW = window.innerWidth
      this.$nuxt.$on('win-resize', throttle(({ winW }) => {
        this.winW = winW
      }, 300))
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('win-resize')
  },
  methods: {
    declOfNum,
    prevPage () {
      if (this.currentPage !== 1) {
        this.currentPage--
        this.$router.push({ path: this.$route.path, query: { page: this.currentPage } })
        this.$scrollTo('body')
      }
    },
    nextPage () {
      if (this.currentPage !== this.totalPages) {
        this.currentPage++
        this.$router.push({ path: this.$route.path, query: { page: this.currentPage } })
        this.$scrollTo('body')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 22.3rem;
  background-color: var(--text-200);
  @include w1199 {
    padding-top: 17.8rem;
  }
  @include w767 {
    padding-top: 10.4rem;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: center;
  }
  &__number {
    display: inline-flex;
    margin-bottom: 4rem;
    padding: 1.5rem 3.2rem;
    border-radius: 3.2rem;
    border: 0.1rem solid var(--text-300);
    line-height: 1.12;
  }
  &__list {
    max-width: 87.2rem;
    padding-left: 0;
    list-style: none;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3.2rem;
    background: var(--text-000);
    border-radius: 2rem;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    hr {
      margin-bottom: 3.2rem;
    }
  }
  &-item {
    &__icon {
      margin-bottom: 3.1rem;
    }
    &__text {
      margin-bottom: 3.2rem;
      color: var(--text-700);
    }
    &__images {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1.6rem;
      margin-bottom: 3.2rem;
      @include w1023 {
        grid-template-columns: repeat(2, 1fr);
      }
      @include w767 {
        grid-template-columns: auto;
      }
      &.one {
        grid-template-columns: auto;
        img {
          height: auto;
        }
      }
      img {
        width: 100%;
        height: 12rem;
        border-radius: 0.8rem;
        cursor: pointer;
        object-fit: cover;
        @include w1023 {
          height: 20rem;
        }
        @include w767 {
          height: 16.4rem;
        }
      }
    }
    &__more {
      position: absolute;
      top: 0;
      right: 0;
      width: calc((100% - 4.8rem) / 4);
      height: 12rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0.8rem;
      color: var(--text-000);
      pointer-events: none;
      @include w1023 {
        width: calc((100% - 1.6rem) / 2);
        height: 20rem;
      }
      @include w767 {
        width: 100%;
        height: 16.4rem;
      }
    }
    &__author {
      margin-bottom: 1.6rem;
      line-height: 1.12;
    }
    &__position {
      margin-bottom: 0.8rem;
      font-weight: 400;
      font-size: 1.4rem;
      letter-spacing: normal;
      color: var(--text-700);
      line-height: 1.14;
    }
    &__location {
      font-weight: 400;
      font-size: 1.4rem;
      letter-spacing: normal;
      color: var(--text-700);
      line-height: 1.14;
    }
  }
  &__pagination {
    width: 100%;
    max-width: 87.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  }
  &-pagination {
    &__numbers {
      padding: 1.5rem 0;
      border: 0.1rem solid var(--text-300);
      border-radius: 3.2rem;
      display: flex;
    }
    &__num {
      line-height: 1.12;
      &.current {
        width: 5.6rem;
        padding-left: 2.4rem;
        border-right: 0.1rem solid var(--text-300);
        color: var(--text-900);
      }
      &.all {
        padding: 0 2.4rem 0 1.6rem;
        color: var(--text-300);
      }
    }
    &__arrows {
      display: flex;
      align-items: center;
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
      &.next {
        margin-left: 1.6rem;
      }
      &.disabled {
        opacity: 0.4;
        pointer-events: none;
        color: var(--text-1000);
        border-color: var(--text-300);
      }
      svg {
        width: 2.4rem;
      }
    }
  }
}
.row {
  width: 100%;
  max-width: 87.2rem;
  display: flex;
  align-items: center;
  padding: 2.4rem;
  border-radius: 1.6rem;
  background-color: var(--primary-blue);
  @include w1023 {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  &__icon {
    width: 6.4rem;
    height: 6.4rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.4rem;
    border: 0.1rem dashed var(--primary-100);
    border-radius: 0.8rem;
    @include w1023 {
      margin-right: 0;
      margin-bottom: 2.4rem;
    }
    svg {
      width: 4rem;
    }
  }
  &__text {
    margin-right: auto;
    margin-bottom: 0;
    font-weight: 450;
    font-size: 2.4rem;
    line-height: 1.33;
    color: var(--text-000);
    letter-spacing: -0.03em;
    @include w1023 {
      max-width: 45rem;
      margin-right: 0;
      margin-bottom: 2.4rem;
    }
    @include w767 {
      max-width: 25rem;
      font-size: 2rem;
      line-height: 1.4;
    }
    @include w359 {
      font-size: 1.9rem;
    }
  }
  &__btn {
    padding: 1.6rem 3.2rem;
    white-space: nowrap;
    letter-spacing: normal;
    line-height: 1.12;
    @include w767 {
      width: 100%;
      padding: 1.6rem 0;
    }
  }
}
</style>
