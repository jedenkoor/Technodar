<template>
  <section class="section-margin full-wide icb">
    <div class="icb__wrapper desktop-only" v-if="displaySize == 'desktop'">
      <div class="icb__nav--title title">Готовые отраслевые решения</div>
      <div class="icb__cards">
        <div class="icb-cards__card" v-for="(card, index) in desitions" :key="index">
          <div class="card--head">
            <div class="card--title">{{ card.title }}</div>
            <a class="card--btn" href="#modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 20L16 12L8 4" stroke="#1333BB"/>
              </svg>
            </a>
          </div>
          <ul class="card--list" v-for="(elem, indx) in card.list" :key="indx">
            <li>{{ elem.text }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="icb__wrapper-mobile" v-else>
      <div class="icb__nav">
        <div class="icb__nav--title">Готовые отраслевые решения</div>
        <div class="icb__navigations">
          <button class="icb-navigations__arr icb-navigations__arr--prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="icb-navigations__arr icb-navigations__arr--next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L16 12L8 4" stroke="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      <div v-swiper:swiper="swiperOptions" @slideChange="slideChange">
        <div class="swiper-wrapper">
          <div class="icb-cards__card swiper-slide" v-for="(card, index) in desitions" :key="index">
            <div class="card--head">
              <div class="card--title">{{ card.title }}</div>
              <a class="card--btn" href="#modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 20L16 12L8 4" stroke="#1333BB"/>
                </svg>
              </a>
            </div>
            <ul class="card--list" v-for="(elem, indx) in card.list" :key="indx">
              <li>{{ elem.text }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesIndustry3ColumnsBlock',
  data () {
    return {
      displaySize: '',
      activeSlide: 0,
      swiperOptions: {
        spaceBetween: 20,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.icb-navigations__arr--prev',
          nextEl: '.icb-navigations__arr--next'
        }
      },
      desitions: [
        {
          title: 'Логистическим компаниям',
          list: [
            { text: 'Контроль местоположения ТС' },
            { text: 'Отчет по пробегу ТС' },
            { text: 'Отчет по моточасам ТС' },
            { text: 'Контроль топлива' },
            { text: 'Анализ работы механизмов' },
            { text: 'Контроль времени простоя ТС' },
            { text: 'Видеомониторинг' },
            { text: 'Контроль всех потребителей' },
            { text: 'Контроль режимов эксплуатации' }
          ]
        },
        {
          title: 'Строительным организациям',
          list: [
            { text: 'Контроль местоположения ТС' },
            { text: 'Отчет по пробегу ТС' },
            { text: 'Отчет по моточасам ТС' },
            { text: 'Контроль топлива' },
            { text: 'Анализ работы механизмов' },
            { text: 'Контроль времени простоя ТС' },
            { text: 'Видеомониторинг' },
            { text: 'Контроль всех потребителей' },
            { text: 'Контроль режимов эксплуатации' }
          ]
        },
        {
          title: 'Производственным компаниям',
          list: [
            { text: 'Контроль местоположения ТС' },
            { text: 'Отчет по пробегу ТС' },
            { text: 'Отчет по моточасам ТС' },
            { text: 'Контроль топлива' },
            { text: 'Анализ работы механизмов' },
            { text: 'Контроль времени простоя ТС' },
            { text: 'Видеомониторинг' },
            { text: 'Контроль всех потребителей' },
            { text: 'Контроль режимов эксплуатации' }
          ]
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
.icb {
  &__wrapper {
    padding: 3.2rem 0;
  }
  &__wrapper-mobile {
    display: block;
    padding: 0 0 3.2rem;
  }
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.4rem;
  }
  &-cards__card {
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem;
    background-color: var(--text-200);
    padding: 3.2rem;
    .card {
      &--head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.2rem;
      }
      &--title {
        font-size: 2.4rem;
        width: 45%;
      }
      &--btn {
        margin-left: auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 5rem;
        background-color: var(--text-000);
        border-radius: 50%;
        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
      &--list {
        list-style: none;
        padding: 0;
        li {
          border-top: 0.1rem solid var(--text-300);
          padding: 2rem 0;
          font-size: 1.6rem;
        }
      }
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
      display: block;
      margin-right: 3.2rem;
      font-size: 4.0rem;
      width: 50%;
      margin-bottom: 3.2rem;
      @include w1199 {
        display: block;
        width: 40%;
        font-size: 3.2rem;
        margin-right: auto;
        margin-bottom: 0;
      }
      @include w767 {
        display: block;
        font-size: 2.4rem;
        width: 70%;
        padding: 1.5rem 0;
        margin-right: 2rem;
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
</style>
