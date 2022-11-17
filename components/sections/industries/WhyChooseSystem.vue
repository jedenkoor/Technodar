<template>
  <section class="section-margin full-wide wcs">
    <div class="hr1"><hr></div>
    <div class="wcs__wrapper desktop-only" v-if="displaySize == 'desktop'">
      <div class="wcs__nav--title">Почему клиенты выбрали систему мониторинга транспорта</div>
      <div class="wcs__elems">
        <div class="wcs__elems-item" v-for="(card, index) in cards" :key="index">
          <div class="incard-icon">
            <img :src="card.icon">
          </div>
          <div class="item__text">{{ card.title }}</div>
        </div>
      </div>
      <div class="wcs__wide-elem">
        <div class="item__title">Решение ГК Технодар подходят <span class="blue">крупному бизнесу</span> с автопарком <span class="blue">более 100 единиц техники</span></div>
        <img class="mt-2rem" src="/images/industries/group-cars.png">
      </div>
    </div>
    <div class="wcs__wrapper-mobile tablet-mobile" v-else>
      <div class="wcs__nav">
        <div class="wcs__nav--title">Почему клиенты выбрали систему мониторинга транспорта</div>
        <div class="wcs__navigations">
          <button class="wcs-navigations__arr wcs-navigations__arr--prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="wcs-navigations__arr wcs-navigations__arr--next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L16 12L8 4" stroke="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      <div v-swiper:swiper="swiperOptions" @slideChange="slideChange">
        <div class="swiper-wrapper">
          <div class="wcs__elems-item swiper-slide" v-for="(card, index) in cards" :key="index">
            <div class="incard-icon">
              <img :src="card.icon">
            </div>
            <div class="item__text">{{ card.title }}</div>
          </div>
        </div>
      </div>
      <div class="wcs__wide-elem">
        <div class="item__title">Решение ГК Технодар подходят <span class="blue">крупному бизнесу</span> с автопарком <span class="blue">более 100 единиц техники</span></div>
        <img class="mt-2rem" src="/images/industries/group-cars.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesWhyChooseSystem',
  data () {
    return {
      displaySize: '',
      activeSlide: 0,
      swiperOptions: {
        spaceBetween: 20,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.wcs-navigations__arr--prev',
          nextEl: '.wcs-navigations__arr--next'
        }
      },
      cards: [
        {
          title: 'Экономия топлива до 50%',
          icon: '/images/industries/svg/what.svg'
        },
        {
          title: 'Единая сервисная служба',
          icon: '/images/industries/svg/headphone.svg'
        },
        {
          title: 'Контроль местоположения и маршрута',
          icon: '/images/industries/svg/pin.svg'
        },
        {
          title: 'Проверенные опытом отраслевые решения',
          icon: '/images/industries/svg/case.svg'
        },
        {
          title: 'Контроль режима эксплуатации транспорта',
          icon: '/images/industries/svg/chip.svg'
        },
        {
          title: 'Глубокая аналитика и автоматизированные отчеты',
          icon: '/images/industries/svg/doc_blue.svg'
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.displaySize = document.documentElement.clientWidth < 1200 ? 'mobile' : 'desktop'
    },
    slideChange () {
      this.activeSlide = this.swiper.activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.blue {
  color: var(--primary-blue)
}
.mt-2rem {
  margin-top: 2rem;
}
.desktop-only {
  @include w1199 {
    display: none;
  }
  @include w767 {
    display: none;
  }
}
.tablet-mobile {
  display: none;
  @include w1199 {
    display: block;
  }
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: span 2;
}
.hr1 {
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 0 var(--container-padding);
  hr {
    width: 100%;
    height: 0.1rem;
    margin: 0;
    border: none !important;
    background-color: var(--text-300);
  }
}
.wcs {
  background-color: var(--text-200);
  padding-top: var(--section-margin);
  /* margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: var(--section-margin) var(--container-padding) 0;
  @include w767 {
    padding: 2.4rem var(--container-padding) 2rem;
  } */
  &__wrapper {
    padding: 3.2rem 0;
  }
  &__wrapper-mobile {
    display: block;
    padding: 3.2rem 0;
    .in-grid__mobile {
      margin-top: 1.6rem;
    }
  }
  &__elems {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 17.4rem) auto;
    gap: 1.6rem;
    @include w767 {
      grid-template-columns: 1fr;
    }
    &-item {
      border-radius: 1.6rem;
      background-color: var(--text-000);
      padding: 3.2rem;
      .incard-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        padding: 0;
        border-radius: 50%;
        border: 0.1rem solid var(--text-300);
        background: var(--text-300);;
        transition: 0.2s;
        margin-right: 1.6rem;
        margin-bottom: 3.2rem;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
      .item__text {
        font-size: 2rem;
        width: 75%;
        @include w1199 {
          width: auto;
        }
        @include w767 {
          width: auto;
          font-size: 2rem;
        }
      }
      @include w1199 {
        max-width: 42.4rem;
        margin-right: 1.6rem;
        padding: 2rem;
      }
      @include w767 {
        max-width: 36rem;
      }
    }
  }
  &__wide-elem {
    border-radius: 1.6rem;
    background-color: var(--text-000);
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .item__title {
      font-size: 3.8rem;
      width: 94.4rem;
      text-align: center;
      @include w1199 {
        font-size: 3.2rem;
        width: auto;
      }
      @include w767 {
        font-size: 2rem;
        width: auto;
      }
    }
    @include w1199 {
      margin-top: 1.6rem;
    }
  }
  &__nav {
    position: relative;
    bottom: 0;
    z-index: 5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.2rem 5rem 3.2rem 3.2rem;
    @include w1199 {
      width: 100%;
    }
    @include w767 {
      width: 100%;
      margin-top: 0.8rem;
      padding: 1.6rem 0;
      flex-wrap: wrap;
    }
    &--title {
      padding: 1.5rem 0;
      display: block;
      margin-right: 3.2rem;
      font-size: 4.0rem;
      width: 50%;
      @include w1199 {
        display: block;
        width: 60%;
        font-size: 3.2rem;
        margin-right: auto;
      }
      @include w767 {
        display: block;
        font-size: 2.4rem;
        width: 100%;
        padding: 1.5rem 0;
      }
    }
  }
  &__numbers {
    padding: 1.5rem 0;
    border: 0.1rem solid var(--text-300);
    border-radius: 3.2rem;
    display: flex;
  }
  &-numbers {
    &__num {
      line-height: 1.12;
      &--current {
        width: 5.6rem;
        padding-left: 2.4rem;
        border-right: 0.1rem solid var(--text-300);
        color: var(--text-900);
      }
      &--all {
        padding: 0 2.4rem 0 1.6rem;
        color: var(--text-300);
      }
    }
  }
  &__navigations {
    display: flex;
  }
  &-navigations {
    &__arr {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
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
      &--next {
        margin-left: 1.6rem;
        @include w767 {
          margin-left: 0.8rem;
        }
      }
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
}
.group {
  margin-top: 1.6rem;
  display: flex;
  align-content: center;
}
</style>
