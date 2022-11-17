<i18n>
{
  "ru": {
    "tiles": {
      "title": "Сократите время на формирование отчетности, автоматизировав процесс с помощью DOTS",
      "items": [
        "Формируйте отчеты, графики и треки и выгружайте их в Excel",
        "Стройте итоговые таблицы и сводные отчеты",
        "Применяйте фильтры по минимальным, средним и максимальным значениям",
        "Собирайте статистику за период (день, неделя, месяц, год)",
        "Сравнивайте динамику по показателям на одном графике"
      ]
    },
    "icons": {
      "title": "Автоматизируйте процесс, чтобы уделять время более важным задачам",
      "text": "Наша система позволяет настроить автоматическое формирование отчетов, которые будут отправляться прямо на ваше устройство"
    }
  },
  "en": {
    "tiles": {
      "title": "Reduce reporting time by automating the process with DOTS",
      "items": [
        "Generate reports, graphs and tracks and upload them to Excel",
        "Build summary tables and summary reports",
        "Apply filters by minimum, average and maximum values",
        "Collect statistics for a period (day, week, month, year)",
        "Compare dynamics by indicators on one chart"
      ]
    },
    "icons": {
      "title": "Automate your process so you can focus on more important tasks",
      "text": "Our system allows you to set up automatic generation of reports that will be sent directly to your device"
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
    <GeneralSystemInterface :page="page" :slides="slides"/>
    <div class="section-margin icons">
      <div class="icons__row">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.4 45L36.9392 44.4787C36.7979 44.3325 36.6033 44.25 36.4 44.25C36.1967 44.25 36.0021 44.3325 35.8608 44.4787L36.4 45ZM59.6 51L59.0608 51.5213C59.2021 51.6675 59.3967 51.75 59.6 51.75C59.8033 51.75 59.9979 51.6675 60.1392 51.5213L59.6 51ZM63.0392 48.5213C63.3271 48.2235 63.3191 47.7486 63.0213 47.4608C62.7235 47.1729 62.2486 47.1809 61.9608 47.4787L63.0392 48.5213ZM57.2392 47.4787C56.9514 47.1809 56.4765 47.1729 56.1787 47.4608C55.8809 47.7486 55.8729 48.2235 56.1608 48.5213L57.2392 47.4787ZM38.7608 48.5213C39.0486 48.8191 39.5235 48.8271 39.8213 48.5392C40.1191 48.2514 40.1271 47.7765 39.8392 47.4787L38.7608 48.5213ZM32.9608 47.4787C32.6729 47.7765 32.6809 48.2514 32.9787 48.5392C33.2765 48.8271 33.7514 48.8191 34.0392 48.5213L32.9608 47.4787ZM38.7865 39.5093C38.5155 39.8225 38.5498 40.2962 38.863 40.5672C39.1762 40.8382 39.6499 40.804 39.9209 40.4907L38.7865 39.5093ZM57.2135 56.4907C57.4845 56.1775 57.4502 55.7038 57.137 55.4328C56.8238 55.1618 56.3501 55.196 56.0791 55.5093L57.2135 56.4907ZM48 59.25C42.0315 59.25 37.15 54.2374 37.15 48H35.65C35.65 55.0175 41.1555 60.75 48 60.75V59.25ZM48 36.75C53.9685 36.75 58.85 41.7626 58.85 48H60.35C60.35 40.9825 54.8445 35.25 48 35.25V36.75ZM37.15 48V45H35.65V48H37.15ZM58.85 48V51H60.35V48H58.85ZM60.1392 51.5213L63.0392 48.5213L61.9608 47.4787L59.0608 50.4787L60.1392 51.5213ZM60.1392 50.4787L57.2392 47.4787L56.1608 48.5213L59.0608 51.5213L60.1392 50.4787ZM35.8608 45.5213L38.7608 48.5213L39.8392 47.4787L36.9392 44.4787L35.8608 45.5213ZM35.8608 44.4787L32.9608 47.4787L34.0392 48.5213L36.9392 45.5213L35.8608 44.4787ZM39.9209 40.4907C41.9118 38.1897 44.796 36.75 48 36.75V35.25C44.333 35.25 41.0438 36.9003 38.7865 39.5093L39.9209 40.4907ZM56.0791 55.5093C54.0882 57.8103 51.204 59.25 48 59.25V60.75C51.6671 60.75 54.9562 59.0997 57.2135 56.4907L56.0791 55.5093Z" fill="#1333BB"/>
          <rect x="0.5" y="0.5" width="95" height="95" rx="47.5" stroke="#E1E1E1"/>
        </svg>
        <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="#E1E1E1"/>
        </svg>
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M57.0303 39.4697C57.3232 39.7626 57.3232 40.2374 57.0303 40.5303L40.5303 57.0303C40.2374 57.3232 39.7626 57.3232 39.4697 57.0303L30.4697 48.0303C30.1768 47.7374 30.1768 47.2626 30.4697 46.9697C30.7626 46.6768 31.2374 46.6768 31.5303 46.9697L40 55.4393L42.6893 52.75L37.9697 48.0303C37.6768 47.7374 37.6768 47.2626 37.9697 46.9697C38.2626 46.6768 38.7374 46.6768 39.0303 46.9697L43.75 51.6893L55.9697 39.4697C56.2626 39.1768 56.7374 39.1768 57.0303 39.4697ZM64.5303 39.4697C64.8232 39.7626 64.8232 40.2374 64.5303 40.5303L48.0303 57.0303C47.7374 57.3232 47.2626 57.3232 46.9697 57.0303C46.6768 56.7374 46.6768 56.2626 46.9697 55.9697L63.4697 39.4697C63.7626 39.1768 64.2374 39.1768 64.5303 39.4697Z" fill="#1333BB"/>
          <rect x="0.5" y="0.5" width="95" height="95" rx="47.5" stroke="#E1E1E1"/>
        </svg>
      </div>
      <div class="icons__content">
        <p class="icons__title">{{ $t('icons.title') }}</p>
        <p class="icons__text">{{ $t('icons.text') }}</p>
      </div>
    </div>
    <GeneralForm/>
    <DevelopmentOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'ReportsPage',
  data () {
    return {
      page: 'reports',
      bannerImage: '/images/development/reports-banner.jpg',
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
  position: relative;
  overflow: hidden;
  &__title {
    max-width: 90rem;
    margin-top: 0;
    margin-bottom: 4rem;
    @include w1199 {
      max-width: 60%;
    }
    @include w767 {
      max-width: none;
      margin-bottom: 11rem;
    }
  }
  &__slider {
    overflow: visible;
    @include w1199 {
      position: static;
    }
    @include w767 {
      position: relative;
    }
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
      top: 0;
      right: var(--container-padding);
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
.icons {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 4rem 2.4rem;
  @include w1199 {
    grid-template-columns: auto;
  }
  @include w767 {
    grid-gap: 2rem;
  }
  &__row {
    height: max-content;
    grid-column: 1 / 6;
    display: flex;
    align-items: center;
    @include w1199 {
      grid-column: auto;
    }
    svg {
      &:nth-child(1),
      &:nth-child(3) {
        width: 9.6rem;
        height: auto;
        @include w767 {
          width: 7.2rem;
        }
      }
      &:nth-child(2) {
        width: 6.4rem;
        height: auto;
        margin: 0 2.4rem;
        @include w1023 {
          margin: 0 1.6rem;
        }
      }
    }
  }
  &__content {
    grid-column: 7 / 12;
    @include w1199 {
      grid-column: auto;
    }
  }
  &__title {
    margin-bottom: 2rem;
    font-size: 2.4rem;
    line-height: 1.33;
    color: var(--text-1000);
    letter-spacing: -0.03em;
    @include w1199 {
      max-width: 65%;
    }
    @include w767 {
      max-width: none;
      font-size: 2rem;
      line-height: 1.4;
    }
  }
  &__text {
    color: var(--text-700);
    @include w1199 {
      max-width: 80%;
    }
    @include w767 {
      max-width: none;
    }
  }
}
</style>
