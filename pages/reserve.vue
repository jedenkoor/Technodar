<i18n>
{
  "ru": {
    "features": {
      "tag": "Как работает система",
      "text": "С помощью установленных в топливных танках датчиков система отслеживает количество топлива с заданной точностью в пределах погрешности 3-5% и передает данные о запасе топлива на судне",
      "items": [
        "С помощью бортового контроллера VMTS и панели оператора, данные отражаются по каждому танку суммарно и отдельно",
        "Информация о запасе всегда доступна персоналу судна как в машинном отделении, так и в рубке",
        "Дополнительно можно передать данные через систему DOTS прямо в офис компании"
      ]
    },
    "uniqueness": {
      "title": "Уникальность решения",
      "text": "Формирование системы на основе датчиков разного типа",
      "tiles": [
        "Датчики емкостного типа",
        "Датчики давления",
        "Радарные уровнемеры"
      ],
      "content": {
        "title": "Эта вариативность также позволяет выбирать разные типы монтажа, а также оборудования и способов его установки.",
        "text": "Например, можно удаленно подобрать схему монтажа, заранее подготовив комплект с нужной надстройкой под определенную конфигурацию. Останется лишь отправить на место судоремонта или монтажа."
      }
    },
    "examples": {
      "tag": "Пример использования системы",
      "title": "Компания “Морвенна”",
      "text": "Серия буксиров КРТ-2500 1с"
    },
    "scheme": {
      "title": "Как работает СИЗТ от ГК Технодар?",
      "top": [
        {
          "title": "На судне"
        },
        {
          "title": "Датчики",
          "text": "Измеряют заданные параметры системы"
        },
        {
          "title": "Контроллер",
          "text": "Получает данные с датчиков и расходомеров и передает их системе управления."
        },
        {
          "tag": "На судне",
          "text": "Система сбора информации"
        },
        {
          "tag": "На судне",
          "title": "Панель оператора",
          "text": "Отображает данные в режиме реального времени на судне"
        }
      ],
      "bot": [
        {
          "title": "На берегу или в офисе",
          "text": "Дополнительно можно установить систему DOTS "
        },
        {
          "tag": "На любом устройстве",
          "text": "Собирает данные и транслирует их на любое удобное устройство"
        }
      ]
    }
  },
  "en": {
    "features": {
      "tag": "How the system works",
      "text": "With the help of sensors installed in fuel tanks, the system monitors the amount of fuel with a given accuracy within an error of 3-5% and transmits data on the fuel supply on the ship",
      "items": [
        "With the help of the onboard VMTS controller and the operator panel, the data is reflected for each tank in total and separately",
        "Information about the reserve is always available to the ship's personnel both in the engine room and in the wheelhouse",
        "Additionally, you can transfer data via the DOTS system directly to the company's office"
      ]
    },
    "uniqueness": {
      "title": "Solution uniqueness",
      "text": "Formation of a system based on sensors of various types",
      "tiles": [
        "Capacitive type sensors",
        "Pressure Sensors",
        "Radar level gauges"
      ],
      "content": {
        "title": "This versatility also allows you to choose different types of mounting, as well as equipment and installation methods.",
        "text": "For example, you can remotely select a mounting scheme by preparing a kit with the necessary add-on for a specific configuration in advance. It remains only to send to the place of ship repair or installation."
      }
    },
    "examples": {
      "tag": "An example of using the system",
      "title": "\"Morwenna\" company",
      "text": "Series of tugs KRT-2500 1s"
    }
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage"/>
    <section class="section-margin features">
      <div class="features__top">
        <div class="features__col">
          <div class="features__tag">{{ $t('features.tag') }}</div>
        </div>
        <p class="features__text">{{ $t('features.text') }}</p>
      </div>
      <ul class="features__list">
        <li v-for="(feature, index) in $t('features.items')" :key="index" class="features__item">
          <p class="features-item__text">{{ feature }}</p>
        </li>
      </ul>
    </section>
    <section class="section-margin full-wide uniqueness">
      <div class="uniqueness__col">
        <h2 class="title uniqueness__title">{{ $t('uniqueness.title') }}</h2>
        <p class="uniqueness__text">{{ $t('uniqueness.text') }}</p>
      </div>
      <div class="uniqueness__col">
        <ul class="uniqueness__tiles">
          <li v-for="(tile, index) in $t('uniqueness.tiles')" :key="index" class="uniqueness__tile">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.75 1C17.75 0.585786 17.4142 0.25 17 0.25C16.5858 0.25 16.25 0.585786 16.25 1H17.75ZM24.15 1C24.15 0.585786 23.8142 0.25 23.4 0.25C22.9858 0.25 22.65 0.585786 22.65 1H24.15ZM11.35 1C11.35 0.585786 11.0142 0.25 10.6 0.25C10.1858 0.25 9.85 0.585786 9.85 1H11.35ZM16.25 33C16.25 33.4142 16.5858 33.75 17 33.75C17.4142 33.75 17.75 33.4142 17.75 33H16.25ZM22.65 33C22.65 33.4142 22.9858 33.75 23.4 33.75C23.8142 33.75 24.15 33.4142 24.15 33H22.65ZM9.85 33C9.85 33.4142 10.1858 33.75 10.6 33.75C11.0142 33.75 11.35 33.4142 11.35 33H9.85ZM1 16.25C0.585786 16.25 0.25 16.5858 0.25 17C0.25 17.4142 0.585786 17.75 1 17.75V16.25ZM1 9.85C0.585786 9.85 0.25 10.1858 0.25 10.6C0.25 11.0142 0.585786 11.35 1 11.35V9.85ZM1 22.65C0.585786 22.65 0.25 22.9858 0.25 23.4C0.25 23.8142 0.585786 24.15 1 24.15V22.65ZM33 17.75C33.4142 17.75 33.75 17.4142 33.75 17C33.75 16.5858 33.4142 16.25 33 16.25V17.75ZM33 11.35C33.4142 11.35 33.75 11.0142 33.75 10.6C33.75 10.1858 33.4142 9.85 33 9.85V11.35ZM33 24.15C33.4142 24.15 33.75 23.8142 33.75 23.4C33.75 22.9858 33.4142 22.65 33 22.65V24.15ZM10.6 10.6V9.85C10.1858 9.85 9.85 10.1858 9.85 10.6H10.6ZM23.4 10.6H24.15C24.15 10.1858 23.8142 9.85 23.4 9.85V10.6ZM23.4 23.4V24.15C23.8142 24.15 24.15 23.8142 24.15 23.4H23.4ZM10.6 23.4H9.85C9.85 23.8142 10.1858 24.15 10.6 24.15V23.4ZM16.25 1V4.2H17.75V1H16.25ZM17 4.95H23.4V3.45H17V4.95ZM22.65 1V4.2H24.15V1H22.65ZM10.6 4.95H17V3.45H10.6V4.95ZM9.85 1V4.2H11.35V1H9.85ZM16.25 29.8V33H17.75V29.8H16.25ZM23.4 29.05H17V30.55H23.4V29.05ZM22.65 29.8V33H24.15V29.8H22.65ZM17 29.05H10.6V30.55H17V29.05ZM9.85 29.8V33H11.35V29.8H9.85ZM7.4 4.95H10.6V3.45H7.4V4.95ZM10.6 29.05H7.4V30.55H10.6V29.05ZM26.6 29.05H23.4V30.55H26.6V29.05ZM23.4 4.95H26.6V3.45H23.4V4.95ZM4.2 16.25H1V17.75H4.2V16.25ZM4.95 17V10.6H3.45V17H4.95ZM4.95 10.6V7.4H3.45V10.6H4.95ZM4.2 9.85H1V11.35H4.2V9.85ZM4.95 26.6V23.4H3.45V26.6H4.95ZM4.95 23.4V17H3.45V23.4H4.95ZM4.2 22.65H1V24.15H4.2V22.65ZM29.8 17.75H33V16.25H29.8V17.75ZM29.05 7.4V10.6H30.55V7.4H29.05ZM29.05 10.6V17H30.55V10.6H29.05ZM29.8 11.35H33V9.85H29.8V11.35ZM29.05 17V23.4H30.55V17H29.05ZM29.05 23.4V26.6H30.55V23.4H29.05ZM29.8 24.15H33V22.65H29.8V24.15ZM7.4 29.05C6.0469 29.05 4.95 27.9531 4.95 26.6H3.45C3.45 28.7815 5.21848 30.55 7.4 30.55V29.05ZM26.6 30.55C28.7815 30.55 30.55 28.7815 30.55 26.6H29.05C29.05 27.9531 27.9531 29.05 26.6 29.05V30.55ZM26.6 4.95C27.9531 4.95 29.05 6.0469 29.05 7.4H30.55C30.55 5.21848 28.7815 3.45 26.6 3.45V4.95ZM7.4 3.45C5.21848 3.45 3.45 5.21848 3.45 7.4H4.95C4.95 6.0469 6.0469 4.95 7.4 4.95V3.45ZM10.6 11.35H23.4V9.85H10.6V11.35ZM22.65 10.6V23.4H24.15V10.6H22.65ZM23.4 22.65H10.6V24.15H23.4V22.65ZM11.35 23.4V10.6H9.85V23.4H11.35Z" fill="#1333BB"/>
            </svg>
            <p class="uniqueness-tile__text">{{ tile }}</p>
          </li>
        </ul>
        <div class="uniqueness__content">
          <p class="uniqueness-content__title">{{ $t('uniqueness.content.title') }}</p>
          <p class="uniqueness-content__text">{{ $t('uniqueness.content.text') }}</p>
        </div>
      </div>
    </section>
    <section class="section-margin full-wide examples">
      <div class="examples__col">
        <div class="examples__tag">{{ $t('examples.tag') }}</div>
      </div>
      <div class="examples__col">
        <h2 class="title examples__title">{{ $t('examples.title') }}</h2>
        <p class="examples__text">{{ $t('examples.text') }}</p>
        <div class="examples__wrap">
          <div v-swiper:swiper="examples.swiperOptions" class="swiper-container examples__slider" @slideChange="slideChange">
            <div class="swiper-wrapper">
              <div v-for="(slide, index) in examples.items" :key="index" class="swiper-slide examples__slide">
                <img v-lazy-load :data-src="slide.image" :alt="slide.name" class="examples-slide__img">
                <span class="examples-slide__name">{{ slide.name }}</span>
              </div>
            </div>
            <div class="examples-slider__numbers">
              <span class="examples-slider-numbers__num current">{{ `${examples.activeIndex + 1}`.padStart(2, '0') }}</span>
              <span class="examples-slider-numbers__num all">{{ `${examples.items.length}`.padStart(2, '0') }}</span>
            </div>
            <div class="examples-slider__navigations">
              <button class="examples-slider__arr prev">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
                </svg>
              </button>
              <button class="examples-slider__arr next">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 20L16 12L8 4" stroke="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="section-margin">
    <section class="section-margin scheme">
      <h2 class="title scheme__title">{{ $t('scheme.title') }}</h2>
      <ul class="scheme__top">
        <li v-for="(item, index) in $t('scheme.top')" :key="index" class="scheme__item">
          <img :src="`/images/icons/reserve-scheme-top${++index}.svg`" :alt="item.title">
          <span v-if="item.tag" class="scheme-item__tag">{{ item.tag }}</span>
          <span v-if="item.title" class="scheme-item__title">{{ item.title }}</span>
          <p v-if="item.text" class="scheme-item__text">{{ item.text }}</p>
        </li>
      </ul>
      <ul class="scheme__bot">
        <li v-for="(item, index) in $t('scheme.bot')" :key="index" class="scheme__item">
          <img :src="`/images/icons/reserve-scheme-bot${++index}.svg`" :alt="item.title">
          <span v-if="item.tag" class="scheme-item__tag">{{ item.tag }}</span>
          <span v-if="item.title" class="scheme-item__title">{{ item.title }}</span>
          <p v-if="item.text" class="scheme-item__text">{{ item.text }}</p>
        </li>
      </ul>
    </section>
    <GeneralSystemInterface :page="page" :slides="slides"/>
    <GeneralForm/>
    <ProductionOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'ReservePage',
  data () {
    return {
      page: 'reserve',
      bannerImage: '/images/production/reserve-banner.jpg',
      examples: {
        activeIndex: 0,
        swiperOptions: {
          slidesPerView: 'auto',
          spaceBetween: 24,
          resistanceRatio: 0,
          navigation: {
            prevEl: '.prev',
            nextEl: '.next'
          }
        },
        items: [
          {
            image: '/images/production/example1.jpg',
            name: 'Венна'
          },
          {
            image: '/images/production/example2.jpg',
            name: 'Конвенна'
          },
          {
            image: '/images/production/example1.jpg',
            name: 'Венна'
          }
        ]
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
  },
  methods: {
    slideChange () {
      this.examples.activeIndex = this.swiper.activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  &__top {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2.4rem;
    margin-bottom: 8rem;
    @include w1199 {
      display: block;
    }
    @include w767 {
      margin-bottom: 4rem;
    }
  }
  &__col {
    grid-column: 1 / 5;
    @include w1199 {
      margin-bottom: 3.2rem;
    }
  }
  &__tag {
    width: max-content;
    padding: 1.6rem 3.2rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 3.2rem;
    color: var(--text-1000);
    line-height: 1.12;
    letter-spacing: -0.03em;
    @include w767 {
      width: 100%;
      padding: 1.6rem 0;
      text-align: center;
    }
  }
  &__text {
    grid-column: 5 / 13;
    font-size: 4rem;
    line-height: 1.2;
    color: var(--text-1000);
    letter-spacing: -0.03em;
    @include w1199 {
      font-size: 2.4rem;
      line-height: 1.33;
    }
    @include w767 {
      font-size: 2rem;
      line-height: 1.4;
    }
  }
  &__list {
    counter-reset: item;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 28rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: auto;
      grid-gap: 1.5rem;
      grid-template-rows: repeat(3, 20.2rem);
    }
    @include w767 {
      grid-template-rows: repeat(3, 28rem);
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    padding: 3.2rem;
    background: var(--text-200);
    border-radius: 1.6rem;
    &:before {
      counter-increment: item;
      content: "0" counter(item);
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--text-000);
      font-size: 2rem;
      color: var(--primary-blue);
    }
  }
  &-item {
    &__text {
      margin-top: auto;
      font-size: 2rem;
      line-height: 1.4;
      letter-spacing: -0.03em;
    }
  }
}
.uniqueness {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.4rem;
  padding-top: var(--section-margin);
  padding-bottom: var(--section-margin);
  background-color: var(--text-200);
  @include w1199 {
    display: block;
  }
  &__col {
    &:first-child {
      grid-column: span 4;
    }
    &:last-child {
      grid-column: span 8;
    }
  }
  &__title {
    max-width: 27rem;
    margin-top: 0;
    margin-bottom: 2rem;
    @include w1199 {
      max-width: none;
    }
  }
  &__text {
    max-width: 25rem;
    color: var(--text-700);
    @include w1199 {
      max-width: none;
      margin-bottom: 4rem;
    }
  }
  &__tiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 20rem;
    grid-gap: 2rem;
    margin-bottom: 4rem;
    padding-bottom: 4rem;
    padding-left: 0;
    list-style: none;
    border-bottom: 0.1rem solid var(--text-300);
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: repeat(3, 16.8rem);
      grid-gap: 1.6rem;
    }
  }
  &__tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2.4rem;
    background: var(--text-000);
    border-radius: 1.6rem;
  }
  &-tile {
    &__text {
      max-width: 17rem;
      line-height: 1.4;
      font-size: 2rem;
      letter-spacing: -0.03em;
      @include w1199 {
        max-width: 13rem;
        font-size: 1.6rem;
      }
    }
  }
  &-content {
    &__title {
      margin-bottom: 3.9rem;
      font-size: 4rem;
      line-height: 1.2;
      color: var(--text-1000);
      letter-spacing: -0.03em;
      @include w1199 {
        margin-bottom: 2rem;
        font-size: 3.2rem;
        line-height: 1.25;
      }
      @include w767 {
        font-size: 2.4rem;
        line-height: 1.33;
      }
    }
    &__text {
      max-width: 42rem;
      color: var(--text-700);
      @include w1199 {
        max-width: none;
      }
    }
  }
}
.examples {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.4rem;
  overflow: hidden;
  @include w1199 {
    display: block;
  }
  &__col {
    &:first-child {
      grid-column: 1 / 5;
    }
    &:last-child {
      grid-column: 5 / 13;
    }
  }
  &__tag {
    width: max-content;
    padding: 1.6rem 3.2rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 3.2rem;
    color: var(--text-1000);
    line-height: 1.12;
    letter-spacing: -0.03em;
    @include w1199 {
      margin-bottom: 3.2rem;
    }
    @include w767 {
      width: 100%;
      padding: 1.6rem 0;
      text-align: center;
    }
  }
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
    @include w767 {
      margin-bottom: 1.2rem;
    }
  }
  &__text {
    margin-bottom: 15.4rem;
    color: var(--text-700);
  }
  &__wrap {
    position: relative;
  }
  &__slider {
    position: static;
    width: 42.4rem;
    margin-left: 0;
    overflow: visible;
    @include w767 {
      width: 100%;
    }
  }
  &-slider {
    &__numbers {
      position: absolute;
      left: 0;
      top: -7.4rem;
      padding: 1.5rem 0;
      border: 0.1rem solid var(--text-300);
      border-radius: 3.2rem;
      display: flex;
    }
    &-numbers {
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
    }
    &__navigations {
      position: absolute;
      top: -7.4rem;
      right: 0;
      z-index: 5;
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
      svg {
        width: 2.4rem;
      }
    }
  }
  &__slide {
    position: relative;
    width: 42.4rem;
    height: 26rem;
    @include w767 {
      width: 100%;
    }
  }
  &-slide {
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1.6rem;
    }
    &__name {
      position: absolute;
      top: 1.6rem;
      left: 1.6rem;
      padding: 1.2rem 2.4rem;
      background: #FFFFFF;
      border-radius: 3.2rem;
      line-height: 1.12;
    }
  }
}
.scheme {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__top {
    display: grid;
    grid-template-columns: 14.4% repeat(4, 1fr);
    grid-template-rows: 32rem;
    grid-gap: 2.4rem;
    margin-bottom: 2.4rem;
    padding: 2.3rem;
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto repeat(3, 20rem);
    }
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: auto 20rem 24rem 20rem 20rem;
      margin-right: -1.6rem;
      margin-left: -1.6rem;
      padding: 2.2rem 1.6rem;
      border-right: none;
      border-left: none;
    }
    .scheme__item {
      &:nth-child(1) {
        @include w1199 {
          grid-column: span 2;
        }
        @include w767 {
          grid-column: auto;
        }
      }
      &:nth-child(2) {
        @include w1199 {
          grid-column: span 2;
        }
        @include w767 {
          grid-column: auto;
        }
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          width: 2.4rem;
          height: 0.6rem;
          background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
          @include w1199 {
            display: none;
          }
          @include w767 {
            display: block;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 0.6rem;
            height: 2.4rem;
            background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
          }
        }
      }
      &:nth-child(3) {
        @include w1199 {
          grid-row: span 2;
        }
        @include w767 {
          grid-row: auto;
        }
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          width: 2.4rem;
          height: 0.6rem;
          background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
          @include w1199 {
            top: auto;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 0.6rem;
            height: 2.4rem;
            background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
          }
          @include w767 {
            top: 100%;
            bottom: auto;
          }
        }
      }
      &:nth-child(4) {
        @include w1199 {
          order: 2;
        }
        @include w767 {
          order: initial;
        }
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          width: 2.4rem;
          height: 0.6rem;
          background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
          @include w1199 {
            right: 100%;
            left: auto;
          }
          @include w767 {
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 0.6rem;
            height: 2.4rem;
            background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
          }
        }
        &:after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 0.6rem;
          height: 7.2rem;
          background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
          @include w1199 {
            height: 15.6rem;
          }
          @include w767 {
            right: 1rem;
            left: auto;
            height: 40.4rem;
          }
        }
      }
      &:nth-child(5) {
        @include w767 {
          width: calc(100% - 3.2rem);
        }
        &:before {
          @include w1199 {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 0.6rem;
            height: 2.4rem;
            background: url('/images/icons/gray-arrow-top.svg') center top/cover no-repeat;
          }
          @include w767 {
            display: none;
          }
        }
      }
    }
  }
  &__bot {
    display: grid;
    grid-template-columns: 14.4% repeat(4, 1fr);
    grid-template-rows: 24rem;
    grid-gap: 2.4rem;
    padding: 2.3rem;
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto 20rem;
    }
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: auto 20rem;
      margin-right: -1.6rem;
      margin-left: -1.6rem;
      padding: 2.4rem 1.6rem;
      border-right: none;
      border-left: none;
    }
    .scheme__item {
      grid-column: span 2;
      @include w767 {
        grid-column: auto;
      }
      &:first-child {
        .scheme-item__text {
          max-width: 25rem;
          @include w1199 {
            max-width: none;
          }
          @include w767 {
            max-width: 79%;
          }
        }
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem;
    background: var(--text-200);
    border-radius: 1.6rem;
    &:first-child {
      padding: 0;
      background: none;
      img {
        margin-bottom: 0;
      }
      .scheme-item {
        &__title {
          max-width: 13rem;
          margin-bottom: auto;
          @include w1199 {
            max-width: none;
          }
        }
        &__text {
          @include w1199 {
            margin-top: 0.6rem;
          }
        }
      }
    }
    img {
      margin-bottom: auto;
    }
  }
  &-item {
    &__tag {
      position: absolute;
      top: 2.4rem;
      right: 2.4rem;
      padding: 0.6rem 1.2rem;
      border-radius: 1.6rem;
      background-color: var(--text-000);
      color: var(--text-700);
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.14;
      text-transform: lowercase;
      letter-spacing: normal;
      @include w1300 {
        font-size: 1.2rem;
      }
      @include w1199 {
        font-size: 1.4rem;
      }
      @include w359 {
        font-size: 1.2rem;
      }
    }
    &__title {
      font-size: 2rem;
      line-height: 1.4;
    }
    &__text {
      max-width: 29rem;
      margin-top: 1.6rem;
      @include w1199 {
        max-width: none;
      }
    }
  }
}
</style>
