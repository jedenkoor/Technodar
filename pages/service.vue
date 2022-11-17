<i18n>
{
  "ru": {
    "tiles": [
      "Выездной монтаж",
      "Шеф-монтаж",
      "Пусконаладочные работы",
      "Обслуживание и сопровождение проекта"
    ],
    "why": {
      "title": "Почему стоит выбрать ГК Технодар?",
      "items": [
        {
          "title": "Сроки",
          "text": "В договоре на реализацию мы всегда прописываем четкие сроки и штрафные санкции за задержки"
        },
        {
          "title": "География работы",
          "text": "В договоре на реализацию мы всегда прописываем четкие сроки и штрафные санкции за задержки"
        },
        {
          "title": "Квалифицированные специалисты",
          "text": "В договоре на реализацию мы всегда прописываем четкие сроки и штрафные санкции за задержки"
        },
        {
          "title": "Полный цикл работы",
          "text": "В договоре на реализацию мы всегда прописываем четкие сроки и штрафные санкции за задержки"
        },
        {
          "title": "Портфолио",
          "text": "В договоре на реализацию мы всегда прописываем четкие сроки и штрафные санкции за задержки"
        },
        {
          "title": "Внимание к деталям",
          "text": "В договоре на реализацию мы всегда прописываем четкие сроки и штрафные санкции за задержки"
        }
      ]
    },
    "map": {
      "title": "Выездной монтаж",
      "text": "Доставим оборудование в любой регион России или зарубежья. Привезем все необходимое, а также подготовим команду опытных специалистов, которые будут выполнять и контролировать процесс на месте"
    },
    "supervision": {
      "title": "Шеф-монтаж",
      "text": "Предусматривает наблюдение и организационно-техническое руководство процессом поставки и установки доставленного оборудования",
      "items": [
        "Проверяем соответствие заказанного оборудования",
        "Контролируем размещение оборудования согласно правилам",
        "Проводим обучение персонала",
        "Осуществляем ПНР"
      ]
    },
    "info": {
      "title": "Обслуживание и сопровождение проекта",
      "text": "<p>После монтажа и проверки оборудования мы берем на себя ответственность за полное сопровождение проекта.</p><p>Это значит, что мы окажем любую помощь по вашей заявке: консультацию, выезд на ремонт, корректировку данных в системах аналитики.</p><p>Раз в определенное количество времени мы будем проверять состояние систем и их работоспособность</p>"
    },
    "icons": "Мы подходим к проектам комплексно — возьмем на себя все процессы, начиная от разработки проекта и заканчивая сервисным обслуживанием"
  },
  "en": {
    "tiles": [
      "Field installation",
      "Installation supervision",
      "Commissioning works",
      "Maintenance and support of the project"
    ],
    "why": {
      "title": "Why choose Technodar Group of Companies?",
      "items": [
        {
          "title": "Timing",
          "text": "In the implementation contract, we always prescribe clear deadlines and penalties for delays"
        },
        {
          "title": "Geography of work",
          "text": "In the implementation contract, we always prescribe clear deadlines and penalties for delays"
        },
        {
          "title": "Qualified specialists",
          "text": "In the implementation contract, we always prescribe clear deadlines and penalties for delays"
        },
        {
          "title": "Full cycle of work",
          "text": "In the implementation contract, we always prescribe clear deadlines and penalties for delays"
        },
        {
          "title": "Portfolio",
          "text": "In the implementation contract, we always prescribe clear deadlines and penalties for delays"
        },
        {
          "title": "Attention to detail",
          "text": "In the implementation contract, we always prescribe clear deadlines and penalties for delays"
        }
      ]
    },
    "map": {
      "title": "Field installation",
      "text": "We will deliver the equipment to any region of Russia or abroad. We will bring everything you need, as well as prepare a team of experienced specialists who will carry out and control the process on site"
    },
    "supervision": {
      "title": "Installation supervision",
      "text": "Provides supervision and organizational and technical management of the process of delivery and installation of the delivered equipment",
      "items": [
        "We check the conformity of the ordered equipment",
        "We control the placement of equipment in accordance with the rules",
        "We provide staff training",
        "We carry out commissioning"
      ]
    },
    "info": {
      "title": "Project maintenance and support",
      "text": "After installation and testing of the equipment, we take responsibility for the full support of the project. This means that we will provide any assistance at your request - consultation, departure for repairs, correction of data in analytics systems. Once in a certain amount of time, we will check the status of the systems and their performance"
    },
    "icons": "We take a comprehensive approach to projects - we will take care of all processes, from project development to service maintenance"
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage" class="service"/>
    <ul class="section-margin tiles">
      <li v-for="(item, index) in $t('tiles')" :key="index" class="tiles__item">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" rx="25" transform="matrix(1 0 0 -1 0 50)" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1663 21.4697C30.4592 21.7626 30.4592 22.2374 30.1663 22.5303L24.1663 28.5303C24.0257 28.671 23.8349 28.75 23.636 28.75C23.4371 28.75 23.2463 28.671 23.1057 28.5303L19.833 25.2576C19.5401 24.9647 19.5401 24.4898 19.833 24.1969C20.1258 23.904 20.6007 23.904 20.8936 24.1969L23.636 26.9393L29.1057 21.4697C29.3986 21.1768 29.8734 21.1768 30.1663 21.4697Z" fill="#1333BB"/>
        </svg>
        {{ item }}
      </li>
    </ul>
    <section class="section-margin why">
      <div class="why__col">
        <h2 class="title why__title">{{ $t('why.title') }}</h2>
        <SvgLogoCircles/>
      </div>
      <div class="why__col">
        <ul class="why__list">
          <li v-for="(item, index) in $t('why.items')" :key="index" ref="accordion" :class="['why__item', { 'active': index === activeAccordionIndex }]">
            <button class="why-item__area" @click.prevent="openAccordion(index)"/>
            <div class="why-item__top">
              <h3 class="why-item__title">{{ item.title }}</h3>
              <div class="icon why-item__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L11.6464 16.3536L12 16.7071L12.3536 16.3536L12 16ZM3.64645 8.35355L11.6464 16.3536L12.3536 15.6464L4.35355 7.64645L3.64645 8.35355ZM12.3536 16.3536L20.3536 8.35355L19.6464 7.64645L11.6464 15.6464L12.3536 16.3536Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <p class="why-item__text" :style="{ height: index === activeAccordionIndex ? $refs.accordion[index].querySelector('.why-item__text').scrollHeight + 'px' : 0}">
              {{ item.text }}
            </p>
          </li>
        </ul>
      </div>
    </section>
    <hr class="section-margin">
    <section class="map">
      <h2 class="title map__title">{{ $t('map.title') }}</h2>
      <p class="map__text">{{ $t('map.text') }}</p>
      <div class="map__img">
        <img v-lazy-load data-src="/images/production/map.png" :alt="$t('supervision.title')">
      </div>
    </section>
    <div class="section-margin full-wide gray">
      <section class="section-margin supervision">
        <h2 class="title supervision__title">{{ $t('supervision.title') }}</h2>
        <p class="supervision__text">{{ $t('supervision.text') }}</p>
        <ul class="supervision__list">
          <li v-for="(item, index) in $t('supervision.items')" :key="index" class="supervision__item">
            <img v-lazy-load :data-src="`/images/icons/supervision${++index}.svg`" :alt="item">
            <h3 class="supervision-item__title">{{ item }}</h3>
            <span class="supervision-item__number">{{ `0${index}` }}</span>
          </li>
        </ul>
      </section>
      <GeneralSmallBlueRow/>
      <div class="section-margin info">
        <h2 class="title info__title">{{ $t('info.title') }}</h2>
        <div class="info__text" v-html="$t('info.text')"/>
      </div>
      <hr class="section-margin">
      <ProductionDocumentation :page="page" :link="documentationLink"/>
    </div>
    <div class="section-margin icons">
      <div class="icons__row">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.25 36C35.25 35.5858 35.5858 35.25 36 35.25H42C42.4142 35.25 42.75 35.5858 42.75 36C42.75 36.4142 42.4142 36.75 42 36.75H37.8107L44.9303 43.8697C45.2232 44.1626 45.2232 44.6374 44.9303 44.9303C44.6374 45.2232 44.1626 45.2232 43.8697 44.9303L36.75 37.8107V42C36.75 42.4142 36.4142 42.75 36 42.75C35.5858 42.75 35.25 42.4142 35.25 42V36ZM53.25 36C53.25 35.5858 53.5858 35.25 54 35.25H60C60.4142 35.25 60.75 35.5858 60.75 36V42C60.75 42.4142 60.4142 42.75 60 42.75C59.5858 42.75 59.25 42.4142 59.25 42V37.8107L52.1303 44.9303C51.8374 45.2232 51.3626 45.2232 51.0697 44.9303C50.7768 44.6374 50.7768 44.1626 51.0697 43.8697L58.1893 36.75H54C53.5858 36.75 53.25 36.4142 53.25 36ZM44.9303 51.0697C45.2232 51.3626 45.2232 51.8374 44.9303 52.1303L37.8107 59.25H42C42.4142 59.25 42.75 59.5858 42.75 60C42.75 60.4142 42.4142 60.75 42 60.75H36C35.5858 60.75 35.25 60.4142 35.25 60V54C35.25 53.5858 35.5858 53.25 36 53.25C36.4142 53.25 36.75 53.5858 36.75 54V58.1893L43.8697 51.0697C44.1626 50.7768 44.6374 50.7768 44.9303 51.0697ZM51.0697 51.0697C51.3626 50.7768 51.8374 50.7768 52.1303 51.0697L59.25 58.1893V54C59.25 53.5858 59.5858 53.25 60 53.25C60.4142 53.25 60.75 53.5858 60.75 54V60C60.75 60.4142 60.4142 60.75 60 60.75H54C53.5858 60.75 53.25 60.4142 53.25 60C53.25 59.5858 53.5858 59.25 54 59.25H58.1893L51.0697 52.1303C50.7768 51.8374 50.7768 51.3626 51.0697 51.0697Z" fill="#1333BB"/>
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
      <p class="icons__text">{{ $t('icons') }}</p>
    </div>
    <GeneralForm/>
    <ProductionOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'ServicePage',
  data () {
    return {
      page: 'service',
      activeAccordionIndex: null,
      bannerImage: '/images/production/service-banner.jpg',
      documentationLink: '#'
    }
  },
  methods: {
    openAccordion (index) {
      this.activeAccordionIndex = this.activeAccordionIndex === index ? null : index
    }
  }
}
</script>

<style lang="scss" scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 20rem;
  grid-gap: 2.4rem;
  padding-left: 0;
  list-style: none;
  @include w1199 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20rem 20rem;
  }
  @include w767 {
    display: flex;
    grid-gap: 0;
    overflow-x: auto;
    margin-left: calc(-1 * var(--container-padding));
    margin-right: calc(-1 * var(--container-padding));
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.3rem;
    background: var(--text-200);
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem;
    font-size: 2rem;
    line-height: 1.4;
    color: var(--text-1000);
    letter-spacing: -0.03em;
    @include w767 {
      flex: 0 0 28rem;
      height: 20rem;
    }
    &:not(:last-child) {
      @include w767 {
        margin-right: 1.6rem;
      }
    }
  }
}
.why {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 4rem 2.4rem;
  height: 57.6rem;
  @include w1199 {
    grid-template-columns: auto;
    height: auto;
  }
  &__col {
    &:first-child {
      grid-column: 1 / 6;
      @include w1199 {
        grid-column: auto;
      }
    }
    &:last-child {
      grid-column: 7 / 13;
      @include w1199 {
        grid-column: auto;
      }
    }
    > svg {
      width: 100%;
      height: auto;
      @include w1199 {
        display: none;
      }
    }
  }
  &__title {
    max-width: 41.4rem;
    margin-top: 0;
    margin-bottom: 19.2rem;
    @include w1199 {
      max-width: none;
      margin-bottom: 0;
    }
  }
  &__list {
    padding-left: 0;
    list-style: none;
  }
  &__item {
    position: relative;
    &:not(:last-child) {
      margin-bottom: 1.9rem;
      padding-bottom: 1.9rem;
      border-bottom: 0.1rem solid var(--text-200);
    }
    &.active {
      svg {
        transform: scale(-1);
        color: var(--primary-blue);
      }
    }
  }
  &-item {
    &__area {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      padding: 0;
      cursor: pointer;
      @include hover {
        &:hover,
        &:focus {
          & ~ .why-item__top .why-item__title,
          & ~ .why-item__top .why-item__icon {
            color: var(--primary-blue);
            border-color: var(--primary-blue);
          }
        }
      }
      @include active {
        &:active {
          & ~ .why-item__top .why-item__title,
          & ~ .why-item__top .why-item__icon {
            color: var(--primary-blue);
            border-color: var(--primary-blue);
          }
        }
      }
    }
    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: margin-bottom 0.2s;
    }
    &__title {
      margin: 0;
      font-weight: 450;
      font-size: 2rem;
      letter-spacing: -0.03em;
      color: var(--text-1000);
      transition: color 0.2s;
    }
    &__icon {
      border-color: var(--text-300);
      transition: 0.2s;
      svg {
        transition: 0.2s;
      }
    }
    &__text {
      max-width: 90%;
      height: 0;
      overflow: hidden;
      transition: height 0.3s;
      color: var(--text-700);
      pointer-events: none;
      @include w767 {
        max-width: 79%;
      }
    }
  }
}
.map {
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
    @include w767 {
      margin-bottom: 1.7rem;
    }
  }
  &__text {
    max-width: 85rem;
    margin-bottom: 4rem;
    color: var(--text-700);
  }
  &__img {
    padding-top: 4.1rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem 1.6rem 0 0;
    @include w1199 {
      padding-top: 7.7rem;
    }
    @include w767 {
      padding-top: 0;
    }
    img {
      @include w767 {
        height: 37.8rem;
        object-fit: cover;
      }
    }
  }
}
.gray {
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: var(--text-200);
  @include w767 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
.supervision {
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  &__text {
    max-width: 61.5rem;
    margin-bottom: 4rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 31.2rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 30rem 30rem;
    }
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-gap: 1.6rem;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem;
    background: var(--text-000);
    border-radius: 1.6rem;
    img {
      margin-bottom: 2rem;
      @include w767 {
        display: none;
      }
    }
  }
  &-item {
    &__title {
      margin-top: 0;
      margin-bottom: auto;
      font-weight: 450;
      font-size: 2rem;
      line-height: 1.4;
      letter-spacing: -0.03em;
    }
    &__number {
      font-size: 2rem;
      color: var(--text-400);
      @include w767 {
        order: -1;
        margin-bottom: 1.6rem;
        line-height: 1.4;
      }
    }
  }
}
.info {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem 2.4rem;
  @include w1199 {
    grid-template-columns: auto;
  }
  &__title {
    grid-column: 1 / 6;
    margin: 0;
    @include w1199 {
      grid-column: auto;
    }
  }
  &__text {
    grid-column: 7 / 13;
    color: var(--text-700);
    @include w1199 {
      grid-column: auto;
      max-width: 85%;
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
    grid-column: 1 / 6;
    display: flex;
    align-items: center;
    @include w1199 {
      grid-column: auto;
      justify-content: center;
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
  &__text {
    grid-column: 7 / 13;
    font-size: 2.4rem;
    line-height: 1.33;
    color: var(--text-1000);
    letter-spacing: -0.03em;
    @include w1199 {
      grid-column: auto;
      text-align: center;
    }
    @include w767 {
      font-size: 1.6rem;
      line-height: 1.5;
    }
  }
}
</style>
