<i18n>
{
  "ru": {
    "devices": "Информация передается в режиме реального времени на удобное устройство",
    "tiles": {
      "title": "Внедрив мониторинг, вы решите следующие проблемы",
      "items": [
        "Предотвратите рейсы экипажа вне регламента и оказание услуг третьей стороне",
        "Возьмете под контроль выполнение маневров, которые могут повредить груз",
        "Будете в курсе текущего состояние техники",
        "Сможете оперативно регулировать маршрут и сроки прибытия"
      ]
    }
  },
  "en": {
    "devices": "Information is transmitted in real time to a convenient device",
    "tiles": {
      "title": "By implementing monitoring, you will solve the following problems",
      "items": [
        "Prevent out-of-schedule crew flights and third party services",
        "Take control of the execution of maneuvers that can damage the cargo",
        "Stay up to date with the current state of technology",
        "You will be able to quickly adjust the route and arrival time"
      ]
    }
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage"/>
    <GeneralSystemInterface :page="page" :slides="slides"/>
    <hr class="section-margin hr">
    <section class="section-margin devices">
      <h2 class="title devices__title">{{ $t('devices') }}</h2>
      <div class="devices__icons">
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="79" height="79" rx="39.5" fill="white" stroke="#E1E1E1"/>
          <path d="M22.9004 52.7992L22.3004 52.3492C22.1299 52.5765 22.1025 52.8805 22.2296 53.1346C22.3566 53.3887 22.6163 53.5492 22.9004 53.5492V52.7992ZM58.1004 52.7992V53.5492C58.3845 53.5492 58.6442 53.3887 58.7712 53.1346C58.8983 52.8805 58.8708 52.5765 58.7004 52.3492L58.1004 52.7992ZM30.9004 27.9492H50.1004V26.4492H30.9004V27.9492ZM52.5504 30.3992V46.3992H54.0504V30.3992H52.5504ZM53.3004 45.6492H27.7004V47.1492H53.3004V45.6492ZM28.4504 46.3992V30.3992H26.9504V46.3992H28.4504ZM27.1004 45.9492L22.3004 52.3492L23.5004 53.2492L28.3004 46.8492L27.1004 45.9492ZM22.9004 53.5492H58.1004V52.0492H22.9004V53.5492ZM58.7004 52.3492L53.9004 45.9492L52.7004 46.8492L57.5004 53.2492L58.7004 52.3492ZM50.1004 27.9492C51.4535 27.9492 52.5504 29.0461 52.5504 30.3992H54.0504C54.0504 28.2177 52.2819 26.4492 50.1004 26.4492V27.9492ZM30.9004 26.4492C28.7189 26.4492 26.9504 28.2177 26.9504 30.3992H28.4504C28.4504 29.0461 29.5473 27.9492 30.9004 27.9492V26.4492Z" fill="#183FE7"/>
        </svg>
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="79" height="79" rx="39.5" fill="white" stroke="#E1E1E1"/>
          <path d="M38.9004 50.4504C38.4862 50.4504 38.1504 50.7862 38.1504 51.2004C38.1504 51.6146 38.4862 51.9504 38.9004 51.9504V50.4504ZM42.1004 51.9504C42.5146 51.9504 42.8504 51.6146 42.8504 51.2004C42.8504 50.7862 42.5146 50.4504 42.1004 50.4504V51.9504ZM34.1004 23.1504H46.9004V21.6504H34.1004V23.1504ZM49.3504 25.6004V54.4004H50.8504V25.6004H49.3504ZM31.6504 54.4004V25.6004H30.1504V54.4004H31.6504ZM46.9004 56.8504H34.1004V58.3504H46.9004V56.8504ZM38.9004 51.9504H42.1004V50.4504H38.9004V51.9504ZM30.1504 54.4004C30.1504 56.5819 31.9189 58.3504 34.1004 58.3504V56.8504C32.7473 56.8504 31.6504 55.7535 31.6504 54.4004H30.1504ZM49.3504 54.4004C49.3504 55.7535 48.2535 56.8504 46.9004 56.8504V58.3504C49.0819 58.3504 50.8504 56.5819 50.8504 54.4004H49.3504ZM46.9004 23.1504C48.2535 23.1504 49.3504 24.2473 49.3504 25.6004H50.8504C50.8504 23.4189 49.0819 21.6504 46.9004 21.6504V23.1504ZM34.1004 21.6504C31.9189 21.6504 30.1504 23.4189 30.1504 25.6004H31.6504C31.6504 24.2473 32.7473 23.1504 34.1004 23.1504V21.6504Z" fill="#183FE7"/>
        </svg>
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="79" height="79" rx="39.5" fill="white" stroke="#E1E1E1"/>
          <path d="M38.8992 50.4504C38.485 50.4504 38.1492 50.7862 38.1492 51.2004C38.1492 51.6146 38.485 51.9504 38.8992 51.9504V50.4504ZM42.0992 51.9504C42.5134 51.9504 42.8492 51.6146 42.8492 51.2004C42.8492 50.7862 42.5134 50.4504 42.0992 50.4504V51.9504ZM30.8992 23.1504H50.0992V21.6504H30.8992V23.1504ZM52.5492 25.6004V54.4004H54.0492V25.6004H52.5492ZM28.4492 54.4004V25.6004H26.9492V54.4004H28.4492ZM50.0992 56.8504H30.8992V58.3504H50.0992V56.8504ZM38.8992 51.9504H42.0992V50.4504H38.8992V51.9504ZM26.9492 54.4004C26.9492 56.5819 28.7177 58.3504 30.8992 58.3504V56.8504C29.5461 56.8504 28.4492 55.7535 28.4492 54.4004H26.9492ZM52.5492 54.4004C52.5492 55.7535 51.4523 56.8504 50.0992 56.8504V58.3504C52.2807 58.3504 54.0492 56.5819 54.0492 54.4004H52.5492ZM50.0992 23.1504C51.4523 23.1504 52.5492 24.2473 52.5492 25.6004H54.0492C54.0492 23.4189 52.2807 21.6504 50.0992 21.6504V23.1504ZM30.8992 21.6504C28.7177 21.6504 26.9492 23.4189 26.9492 25.6004H28.4492C28.4492 24.2473 29.5461 23.1504 30.8992 23.1504V21.6504Z" fill="#183FE7"/>
        </svg>
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="79" height="79" rx="39.5" fill="white" stroke="#E1E1E1"/>
          <path d="M46.9004 55.1496C47.3146 55.1496 47.6504 54.8138 47.6504 54.3996C47.6504 53.9854 47.3146 53.6496 46.9004 53.6496V55.1496ZM34.1004 53.6496C33.6862 53.6496 33.3504 53.9854 33.3504 54.3996C33.3504 54.8138 33.6862 55.1496 34.1004 55.1496V53.6496ZM26.1004 26.3496H54.9004V24.8496H26.1004V26.3496ZM57.3504 28.7996V44.7996H58.8504V28.7996H57.3504ZM23.6504 44.7996V28.7996H22.1504V44.7996H23.6504ZM54.9004 47.2496H40.5004V48.7496H54.9004V47.2496ZM40.5004 47.2496H26.1004V48.7496H40.5004V47.2496ZM39.7504 47.9996V54.3996H41.2504V47.9996H39.7504ZM40.5004 55.1496H46.9004V53.6496H40.5004V55.1496ZM40.5004 53.6496H34.1004V55.1496H40.5004V53.6496ZM22.1504 44.7996C22.1504 46.9811 23.9189 48.7496 26.1004 48.7496V47.2496C24.7473 47.2496 23.6504 46.1527 23.6504 44.7996H22.1504ZM57.3504 44.7996C57.3504 46.1527 56.2535 47.2496 54.9004 47.2496V48.7496C57.0819 48.7496 58.8504 46.9811 58.8504 44.7996H57.3504ZM54.9004 26.3496C56.2535 26.3496 57.3504 27.4465 57.3504 28.7996H58.8504C58.8504 26.6181 57.0819 24.8496 54.9004 24.8496V26.3496ZM26.1004 24.8496C23.9189 24.8496 22.1504 26.6181 22.1504 28.7996H23.6504C23.6504 27.4465 24.7473 26.3496 26.1004 26.3496V24.8496Z" fill="#183FE7"/>
        </svg>
      </div>
    </section>
    <div class="full-wide grey">
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
      <hr>
    </div>
    <GeneralForm/>
    <DevelopmentOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'MonitoringPage',
  data () {
    return {
      page: 'monitoring',
      bannerImage: '/images/development/monitoring-banner.jpg',
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
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 24,
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
.hr {
  @include w1199 {
    display: none;
  }
}
.devices {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__title {
    max-width: 87rem;
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__icons {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 3.9rem;
    @include w767 {
      grid-template-columns: repeat(2, auto);
      grid-gap: 1.6rem;
    }
  }
}
.grey {
  padding-top: var(--section-margin);
  background-color: var(--text-200);
}
.tiles {
  counter-reset: item;
  position: relative;
  overflow: hidden;
  &__title {
    max-width: 60rem;
    margin-top: 0;
    margin-bottom: 4rem;
    @include w1199 {
      max-width: 71%;
    }
    @include w767 {
      max-width: none;
      margin-bottom: 9rem;
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
    width: 42.4rem;
    height: 24rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3.2rem;
    background-color: var(--text-000);
    border-radius: 1.6rem;
    color: var(--text-1000);
    @include w767 {
      width: 100%;
      height: 19.4rem;
      padding: 2.4rem;
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
      top: -7rem;
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
</style>
