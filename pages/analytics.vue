<i18n>
{
  "ru": {
    "tiles": {
      "title": "Визуализация данных откроет вам новые возможности",
      "items": [
        "Отследить процесс приема-передачи топлива",
        "Проверить состояние двигателей и потребителей топлива",
        "Увидеть сравнительные графики и сводные отчеты",
        "Определить маршрут и местоположение объекта",
        "Отследить процесс приема-передачи топлива",
        "Проверить состояние двигателей и потребителей топлива"
      ]
    },
    "info": {
      "title": "Для полноценного отслеживания всех показателей мы устанавливаем контроллер VMTS и комплекс DOTS",
      "items": [
        {
          "title": "VMTS",
          "shortText": "Передает данные в реальном времени",
          "text": [
            "Датчики фиксируют данные на месте и передают их контроллерам. Все показатели по контроллерам VMTS транслирует онлайн",
            "Таким образом, ваши сотрудники могут решить проблему сразу, как увидят отклонение от нормы"
          ]
        },
        {
          "title": "DOTS",
          "shortText": "Сводит все параметры и показатели объекта",
          "text": [
            "VMTS переводит необработанные данные в конкретные показатели и отправляет их в DOTS",
            "В интерфейсе DOTS вы можете работать с нужными метриками и выгружать отчеты"
          ]
        }
      ]
    }
  },
  "en": {
    "tiles": {
      "title": "Data visualization will open up new possibilities for you",
      "items": [
        "Track the process of receiving and transferring fuel",
        "Check the condition of engines and fuel consumers",
        "See comparison charts and summary reports",
        "Determine the route and location of the object",
        "Track the process of receiving and transferring fuel",
        "Check the condition of engines and fuel consumers"
      ]
    },
    "info": {
      "title": "To fully track all indicators, we install a VMTS controller and a DOTS complex",
      "items": [
        {
          "title": "VMTS",
          "shortText": "Transmits data in real time",
          "text": [
            "The sensors capture the data in place and transmit it to the controllers. All indicators for VMTS controllers are broadcast online",
            "Thus, your employees can solve the problem as soon as they see a deviation from the norm."
          ]
        },
        {
          "title": "DOTS",
          "shortText": "Brings together all the parameters and indicators of the object",
          "text": [
            "VMTS translates raw data into specific metrics and sends it to DOTS",
            "In the DOTS interface, you can work with the necessary metrics and upload reports"
          ]
        }
      ]
    }
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage"/>
    <section class="section-margin full-wide tiles">
      <h2 class="title tiles__title">{{ $t('tiles.title') }}</h2>
      <div v-swiper:swiper="swiperOptions" class="tiles__slider">
        <div class="swiper-wrapper">
          <div v-for="(slide, index) in $t('tiles.items')" :key="index" class="swiper-slide tiles__slide">
            {{ slide }}
          </div>
        </div>
        <div class="tiles__navigations" ref="navigations">
          <button class="tiles__arr prev">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="tiles__arr next">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L16 12L8 4" stroke="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
    <GeneralSmallBlueRow/>
    <section class="section-margin info">
      <h2 class="title info__title">{{ $t('info.title') }}</h2>
      <ul class="info__list">
        <li v-for="(item, itemIndex) in $t('info.items')" :key="itemIndex" class="info__item">
          <div class="info-item__top">
            <img src="/images/icons/vmts-about1.svg" :alt="item.title" class="info-item__icon">
            <div class="info-item__col">
              <span class="info-item__title">{{ item.title }}</span>
              <p class="info-item__descr">{{ item.shortText }}</p>
            </div>
          </div>
          <p v-for="(text, textIndex) in item.text" :key="textIndex" class="info-item__text">
            {{ text }}
          </p>
        </li>
      </ul>
    </section>
    <hr class="section-margin">
    <GeneralSystemInterface :page="page" :slides="slides"/>
    <GeneralForm/>
    <DevelopmentOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'AnalyticsPage',
  data () {
    return {
      page: 'analytics',
      bannerImage: '/images/development/analytics-banner.jpg',
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.prev',
          nextEl: '.next'
        }
      },
      slides: [
        {
          image: '/images/general/slides.jpg',
          focusImage: '/images/general/slides-focus.jpg',
          focusImageWidth: '26.4%',
          focusImageTop: '9.3%',
          focusImageLeft: '29.2%',
          hintPositionVertical: 'top',
          hintPositionHorizontal: 'right'
        },
        {
          image: '/images/general/slides.jpg',
          focusImage: '/images/general/slides-focus.jpg',
          focusImageTop: '20%',
          focusImageLeft: '40%',
          hintPositionVertical: 'top',
          hintPositionHorizontal: 'left'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tiles {
  counter-reset: item;
  overflow: hidden;
  &__title {
    max-width: 63rem;
    margin-top: 0;
    margin-bottom: 4rem;
    @include w1199 {
      max-width: 50rem;
    }
    @include w767 {
      margin-bottom: 11rem;
    }
  }
  &__slider {
    overflow: visible;
  }
  &__slide {
    width: 31.2rem;
    height: 31.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.4rem;
    background-color: var(--text-200);
    border-radius: 1.6rem;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -0.03em;
    color: var(--text-1000);
    @include w767 {
      width: 100%;
    }
    &:before {
      counter-increment: item;
      content: "0" counter(item);
      width: 5rem;
      height: 5rem;
      padding-top: 1rem;
      border-radius: 50%;
      border: 0.1rem solid var(--text-300);
      text-align: center;
    }
  }
  &__navigations {
    position: absolute;
    top: -9rem;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    @include w1199 {
      top: -12rem;
    }
    @include w767 {
      top: -9rem;
      right: auto;
      left: 0;
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
    svg {
      width: 2.4rem;
    }
  }
}
.info {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
    text-align: center;
    @include w767 {
      font-size: 2rem;
      line-height: 1.4;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: auto;
    }
    @include w767 {
      grid-gap: 1.6rem;
    }
  }
  &__item {
    padding: 3.1rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    @include w767 {
      padding: 2.3rem;
    }
  }
  &-item {
    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 3.2rem;
      padding-bottom: 3.2rem;
      border-bottom: 0.1rem solid var(--text-200);
      @include w767 {
        margin-bottom: 2.4rem;
        padding-bottom: 2.4rem;
      }
    }
    &__icon {
      width: 5rem;
      margin-right: 1.6rem;
    }
    &__title {
      display: block;
      margin-bottom: 0.8rem;
      font-weight: 400;
      font-size: 2rem;
      line-height: 1.4;
    }
    &__descr {
      font-size: 1.4rem;
      line-height: 1.14;
      color: var(--text-700);
      letter-spacing: normal;
    }
    &__text {
      max-width: 51rem;
      color: var(--text-700);
      &:not(:last-child) {
        margin-bottom: 3.2rem;
        @include w767 {
          margin-bottom: 2.4rem;
        }
      }
    }
  }
}
</style>
