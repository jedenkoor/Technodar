<i18n>
{
  "ru": {
    "info": {
      "title": "Наша команда это <span>75</span> профессиональных специалистов",
      "text": "<p>Проектные инженеры, диспетчеры-аналитики, сотрудники производственного отдела, специалисты IT-отдела и мастера установщики, обладающие высоким уровнем квалификации и наличием специализированного образования</p><p>Благодаря офис-менеджерам, маркетологам и менеджерам по продажам мы успешно осуществляем коммерческую и административно-управленческую деятельность</p><p>Также ГК Технодар располагает собственными производственными и офисными помещениями, мастерской-лабораторией для диагностики оборудования, складами и автопарком</p>"
    },
    "philosophy": {
      "title": "Философия компании",
      "items": [
        {
          "title": "Знания и опыт",
          "text": "Знание, опыт и результаты работы компании. Особенно впечатляет разработка и внедрение продукта. Всегда приятно быть часть проекта, а если отвечаешь за все его этапы, ведешь его – приятно вдвойне."
        },
        {
          "title": "Слайд 2",
          "text": "Текст 2"
        }
      ]
    }
  },
  "en": {
    "info": {
      "title": "Our team is <span>75</span> professional specialists",
      "text": "<p>Project engineers, dispatchers-analysts, employees of the production department, specialists of the IT department and installers with a high level of qualification and specialized education</p><p>Thanks to office managers, marketers and sales managers, we successfully implement commercial and administrative and managerial activities</p><p>Tekhnodar Group of Companies also has its own production and office premises, a workshop-laboratory for equipment diagnostics, warehouses and a vehicle fleet</p>"
    },
    "philosophy": {
      "title": "Company philosophy",
      "items": [
        {
          "title": "Knowledge and experience",
          "text": "Knowledge, experience and performance of the company. Particularly impressive is the development and implementation of the product. It is always nice to be a part of a project, and if you are responsible for all its stages, you lead it, it is doubly pleasant."
        },
        {
          "title": "Slide 2",
          "text": "Text 2"
        }
      ]
    }
  }
}
</i18n>

<template>
  <main class="white-footer content">
    <GeneralBannerWithBlueBlock :page="page" :slides="bannerSlides" :is-slider="false"/>
    <section class="section-margin info">
      <div class="info__col">
        <h2 class="title info__title" v-html="$t('info.title')"/>
        <div class="info__images">
          <img src="/images/careers/careers-team1.jpg" alt="1" class="info__image">
          <img src="/images/careers/careers-team2.jpg" alt="2" class="info__image">
          <img src="/images/careers/careers-team3.jpg" alt="3" class="info__image">
          <div class="info__image">+75</div>
        </div>
      </div>
      <div class="info__text" v-html="$t('info.text')"/>
    </section>
    <hr class="section-margin">
    <section class="section-margin philosophy">
      <h2 class="philosophy__title">{{ $t('philosophy.title') }}</h2>
      <div class="philosophy__wrap">
        <img src="/images/careers/careers-philosophy.png" :alt="$t('philosophy.title')" class="philosophy__img">
        <div v-swiper:swiper="swiperOptions" class="philosophy__slider">
          <div class="swiper-wrapper">
            <div v-for="(slide, index) in $t('philosophy.items')" :key="index" class="swiper-slide philosophy__slide">
              <p class="philosophy-slide__title">{{ slide.title }}</p>
              <div class="philosophy-slide__bot">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M48.6119 34.1161C49.1 34.6043 49.1 35.3957 48.6119 35.8839L38.6119 45.8839C38.3774 46.1183 38.0595 46.25 37.728 46.25C37.3965 46.25 37.0785 46.1183 36.8441 45.8839L31.3896 40.4293C30.9014 39.9412 30.9014 39.1497 31.3896 38.6616C31.8777 38.1734 32.6692 38.1734 33.1573 38.6616L37.728 43.2322L46.8441 34.1161C47.3323 33.628 48.1237 33.628 48.6119 34.1161Z" fill="white"/>
                  <rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="#A2B2F6"/>
                </svg>
                <p class="philosophy-slide__text">{{ slide.text }}</p>
              </div>
            </div>
          </div>
          <div class="philosophy__navigations" ref="navigations">
            <button class="philosophy__arr prev">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
              </svg>
            </button>
            <button class="philosophy__arr next">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 20L16 12L8 4" stroke="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <CareersForm/>
  </main>
</template>

<script>
export default {
  name: 'CareersPage',
  data () {
    return {
      page: 'careers',
      bannerSlides: [
        '/images/careers/careers-banner.jpg'
      ],
      swiperOptions: {
        loop: true,
        effect: 'fade',
        resistanceRatio: 0,
        navigation: {
          prevEl: '.prev',
          nextEl: '.next'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  padding-bottom: 6rem;
  @include w1199 {
    padding-bottom: 4rem;
  }
  @include w767 {
    padding-bottom: 2rem;
  }
}
.info {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.4rem;
  @include w1199 {
    display: block;
  }
  & + hr {
    @include w1199 {
      display: none;
    }
  }
  &__col {
    grid-column: span 7;
  }
  &__title {
    max-width: 47rem;
    margin-top: 0;
    margin-bottom: 4.8rem;
    @include w1199 {
      margin-bottom: 4rem;
    }
  }
  &__images {
    display: flex;
    @include w1199 {
      margin-bottom: 4rem;
    }
  }
  &__image {
    width: 9.6rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -2.4rem;
    border-radius: 50%;
    border: 0.1rem solid var(--text-300);
    font-size: 2rem;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      position: relative;
      z-index: -1;
    }
  }
  &__text {
    grid-column: span 5;
    @include w1199 {
      max-width: 77%;
    }
    @include w767 {
      max-width: none;
    }
  }
}
.philosophy {
  &__title {
    margin-bottom: 2.4rem;
    font-weight: 450;
    font-size: 2.4rem;
    line-height: 1.33;
    letter-spacing: -0.03em;
    @include w1199 {
      margin-bottom: 4rem;
    }
  }
  &__wrap {
    position: relative;
    border-radius: 1.6rem;
    background: var(--primary-blue);
  }
  &__img {
    position: absolute;
    top: 2.9rem;
    right: 9.3rem;
    mix-blend-mode: multiply;
    @include w1199 {
      display: none;
    }
  }
  &__slide {
    height: 44rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem;
    opacity: 0!important;
    color: var(--text-000);
    @include w1199 {
      height: 31.2rem;
      padding: 3.2rem;
    }
    @include w767 {
      height: 44.2rem;
      padding: 1.6rem 1.6rem 10.6rem;
    }
    &.swiper-slide-active {
      opacity: 1!important;
    }
  }
  &-slide {
    &__title {
      font-weight: 450;
      font-size: 6.4rem;
      line-height: 1.12;
      letter-spacing: -0.03em;
      @include w1199 {
        font-size: 4rem;
        line-height: 1.2;
      }
      @include w767 {
        font-size: 3.2rem;
        line-height: 1.25;
      }
    }
    &__bot {
      display: flex;
      align-items: center;
      margin-top: auto;
      @include w767 {
        display: block;
      }
      svg {
        width: 8rem;
        height: auto;
        flex-shrink: 0;
        margin-right: 10.4rem;
        @include w1199 {
          margin-right: 1.6rem;
        }
        @include w767 {
          margin-right: 0;
          margin-bottom: 1.6rem;
        }
      }
    }
    &__text {
      max-width: 54rem;
      @include w1199 {
        max-width: 54%;
      }
      @include w767 {
        max-width: none;
      }
    }
  }
  &__navigations {
    position: absolute;
    z-index: 2;
    right: 8.4rem;
    bottom: 4rem;
    display: flex;
    align-items: center;
    @include w1199 {
      right: 3.2rem;
      bottom: 3.2rem;
    }
    @include w767 {
      right: auto;
      bottom: 1.6rem;
      left: 1.6rem;
    }
  }
  &__arr {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    border: 0.1rem solid var(--text-000);
    background: none;
    cursor: pointer;
    color: var(--text-000);
    transition: 0.2s;
    @include hover {
      &:hover,
      &:focus {
        color: var(--text-200);
        border-color: var(--text-200);
      }
    }
    @include active {
      &:active {
        color: var(--text-200);
        border-color: var(--text-200);
      }
    }
    &.next {
      margin-left: 1.6rem;
    }
    svg {
      width: 2.4rem;
    }
  }
}
</style>

<style lang="scss">
.info {
  &__title {
    span {
      color: var(--primary-blue);
    }
  }
}
</style>
