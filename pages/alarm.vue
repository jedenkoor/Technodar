<i18n>
{
  "ru": {
    "features": [
      {
        "title": "Дисциплинируйте персонал",
        "text": "Под постоянным контролем дисциплина и внимание к служебным обязанностям повысятся в разы"
      },
      {
        "title": "Держите проблемные области под контролем",
        "text": "Данные транслируются в реальном времени и реакция на резкое отклонение будет мгновенной"
      }
    ],
    "scheme": {
      "title": "Система устанавливается на объект вместе с VMTS",
      "items": [
        "Установленные датчики собирают данные о работе транспорта и движении топлива",
        "Показатели попадают в бортовой контроллер VMTS и выводятся на экран",
        "",
        "Если значения отличаются от контрольных, устройство звукового оповещения подаст сигнал"
      ]
    },
    "accordions": [
      {
        "title": "Оповещающее устройство - своего рода сигнализация",
        "text": "Оно поможет заметить недостачи при приеме топлива от подрядчиков, хищение и передачу ГСМ третьим лицам, расход сверх нормы в двигателях и дизель-генераторах"
      },
      {
        "title": "Быстро выявляйте нестандартные ситуации и моментально находите неполадки в функционировании оборудования",
        "text": "Оно поможет заметить недостачи при приеме топлива от подрядчиков, хищение и передачу ГСМ третьим лицам, расход сверх нормы в двигателях и дизель-генераторах"
      }
    ],
    "tiles": {
      "title": "Звуковое оповещение поможет вам",
      "items": [
        "Выбирать для сотрудничества только надежных подрядчиков",
        "Определять оптимальный режим работы потребителей",
        "Контролировать операции с топливом и комплексно отслеживать характеристики"
      ]
    }
  },
  "en": {
    "features": [
      {
        "title": "Discipline your staff",
        "text": "Under constant control, discipline and attention to official duties will increase significantly"
      },
      {
        "title": "Keep problem areas under control",
        "text": "The data is broadcast in real time and the reaction to a sharp deviation will be instant"
      }
    ],
    "scheme": {
      "title": "The system is installed on site together with VMTS",
      "items": [
        "Installed sensors collect data on vehicle operation and fuel flow",
        "The indicators enter the onboard VMTS controller and are displayed on the screen",
        "",
        "If the values differ from the control values, the buzzer will sound a signal"
      ]
    },
    "accordions": [
      {
        "title": "The warning device is a kind of alarm",
        "text": "It will help to notice shortages when receiving fuel from contractors, theft and transfer of fuel and lubricants to third parties, excess consumption in engines and diesel generators"
      },
      {
        "title": "Quickly identify unusual situations and instantly find equipment malfunctions",
        "text": "It will help to notice shortages when receiving fuel from contractors, theft and transfer of fuel and lubricants to third parties, excess consumption in engines and diesel generators"
      }
    ],
    "tiles": {
      "title": "Sound notification will help you",
      "items": [
        "Choose only reliable contractors for cooperation",
        "Determine the optimal mode of operation of consumers",
        "Monitor fuel operations and comprehensively monitor performance"
      ]
    }
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage"/>
    <ul class="section-margin features">
      <li v-for="(item, index) in $t('features')" :key="index" class="features__item">
        <div class="features-item__col">
          <img :src="`/images/icons/alarm-features${++index}.svg`" :alt="item.title" class="features-item__icon">
          <p class="features-item__title tablet">{{ item.title }}</p>
        </div>
        <div class="features-item__content">
          <p class="features-item__title">{{ item.title }}</p>
          <p class="features-item__text">{{ item.text }}</p>
        </div>
      </li>
    </ul>
    <section class="section-margin scheme">
      <h2 class="title scheme__title">{{ $t('scheme.title') }}</h2>
      <ul class="scheme__list">
        <li v-for="(item, index) in $t('scheme.items')" :key="index" class="scheme__item">
          <img :src="`/images/icons/alarm-scheme${++index}.svg`" :alt="item" class="scheme-item__icon">
          <p class="scheme-item__text">{{ item }}</p>
        </li>
      </ul>
    </section>
    <GeneralSmallBlueRow/>
    <div class="full-wide grey">
      <section class="section-margin accordions">
        <ul class="accordions__list">
          <li v-for="(item, index) in $t('accordions')" :key="index" ref="accordion" :class="['accordions__item', { 'active': index === activeAccordionIndex }]">
            <button class="accordions-item__area" @click.prevent="openAccordion(index)"/>
            <div class="accordions-item__top">
              <h3 class="accordions-item__title">{{ item.title }}</h3>
              <div class="icon accordions-item__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L11.6464 16.3536L12 16.7071L12.3536 16.3536L12 16ZM3.64645 8.35355L11.6464 16.3536L12.3536 15.6464L4.35355 7.64645L3.64645 8.35355ZM12.3536 16.3536L20.3536 8.35355L19.6464 7.64645L11.6464 15.6464L12.3536 16.3536Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <p class="accordions-item__text" :style="{ height: index === activeAccordionIndex ? $refs.accordion[index].querySelector('.accordions-item__text').scrollHeight + 'px' : 0}">
              {{ item.text }}
            </p>
          </li>
        </ul>
      </section>
      <hr class="section-margin">
      <section class="section-margin tiles">
        <h2 class="title tiles__title">{{ $t('tiles.title') }}</h2>
        <ul class="tiles__list">
          <li v-for="(item, index) in $t('tiles.items')" :key="index" class="tiles__item">
            <p class="tiles-item__text">{{ item }}</p>
          </li>
        </ul>
      </section>
      <hr>
    </div>
    <GeneralForm/>
    <DevelopmentOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'AlarmPage',
  data () {
    return {
      page: 'alarm',
      bannerImage: '/images/development/alarm-banner.jpg',
      activeAccordionIndex: null
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
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.8rem;
  margin-top: calc(-1 * (var(--section-margin) - 0.8rem));
  padding-left: 0;
  list-style: none;
  @include w767 {
    grid-template-columns: auto;
  }
  &__item {
    display: flex;
    align-items: center;
    padding: 3.2rem 3.2rem 3.6rem;
    background-color: var(--text-200);
    @include w1199 {
      display: block;
      padding: 2.4rem;
    }
    &:first-child {
      border-radius: 0 0 0 1.6rem;
    }
    &:last-child {
      border-radius: 0 0 1.6rem 0;
    }
  }
  &-item {
    &__col {
      @include w1199 {
        display: flex;
        align-items: center;
        margin-bottom: 1.6rem;
      }
    }
    &__icon {
      width: 9.6rem;
      margin-right: 3.2rem;
      @include w1199 {
        width: 6.6rem;
        margin-right: 1.6rem;
      }
    }
    &__title {
      margin-bottom: 2rem;
      font-size: 2rem;
      line-height: 1.4;
      letter-spacing: -0.03em;
      @include w1199 {
        display: none;
        margin-bottom: 0;
        font-size: 1.6rem;
        line-height: 1.5;
      }
      &.tablet {
        display: none;
        @include w1199 {
          display: block;
        }
      }
    }
    &__text {
      max-width: 40rem;
      color: var(--text-700);
      @include w767 {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.71;
        letter-spacing: normal;
      }
    }
  }
}
.scheme {
  &__title {
    max-width: 53rem;
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: 21.6rem 1fr;
      grid-gap: 4rem;
    }
    @include w767 {
      grid-template-columns: auto;
    }
  }
  &__item {
    position: relative;
    @include w1199 {
      display: flex;
      align-items: center;
    }
    &:nth-child(1),
    &:nth-child(2) {
      @include w1199 {
        grid-column: span 2;
      }
      @include w767 {
        grid-column: auto;
      }
      &:before {
        @include w1199 {
          top: 100%;
          left: 4.5rem;
          width: 0.6rem;
          height: 4rem;
          background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
        }
        @include w359 {
          left: 2.9rem;
        }
      }
    }
    &:nth-child(4) {
      &:before {
        display: none;
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 4.1rem;
      left: 8.8rem;
      width: calc(100% - 6.4rem);
      height: 0.6rem;
      background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
      @include w1199 {
        top: 4.6rem;
        left: 9.6rem;
        width: calc(100% - 5.6rem);
      }
      @include w767 {
        top: 100%;
        left: 4.5rem;
        width: 0.6rem;
        height: 4rem;
        background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
      }
      @include w359 {
        left: 2.9rem;
      }
    }
  }
  &-item {
    &__icon {
      flex-shrink: 0;
      width: 8.8rem;
      height: auto;
      margin-bottom: 2rem;
      @include w1199 {
        width: 9.6rem;
        margin-right: 2.4rem;
        margin-bottom: 0;
      }
      @include w359 {
        width: 6.4rem;
      }
    }
    &__text {
      max-width: 27rem;
      color: var(--text-700);
      @include w1199 {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.71;
        letter-spacing: normal;
      }
      @include w359 {
        line-height: 1.5;
      }
    }
  }
}
.grey {
  padding-top: var(--section-margin);
  background-color: var(--text-200);
}
.accordions {
  &__list {
    padding-left: 0;
    list-style: none;
  }
  &__item {
    position: relative;
    padding: 3.2rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    transition: background-color 0.2s, border-color 0.2s;
    @include w767 {
      padding: 2.4rem 1.6rem;
    }
    &:not(:last-child) {
      margin-bottom: 2.3rem;
      @include w767 {
        margin-bottom: 1.5rem;
      }
    }
    &.active {
      background-color: var(--text-000);
      border-color: var(--text-000);
      .accordions-item__top {
        @include w1199 {
          margin-bottom: 2rem;
        }
        @include w767 {
          margin-bottom: 1.6rem;
        }
      }
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
          & ~ .accordions-item__top .accordions-item__title,
          & ~ .accordions-item__top .accordions-item__icon {
            color: var(--primary-blue);
            border-color: var(--primary-blue);
          }
        }
      }
      @include active {
        &:active {
          & ~ .accordions-item__top .accordions-item__title,
          & ~ .accordions-item__top .accordions-item__icon {
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
      max-width: 62%;
      margin: 0;
      font-weight: 450;
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      color: var(--text-1000);
      transition: color 0.2s;
      @include w1199 {
        max-width: 79%;
      }
      @include w767 {
        font-size: 2rem;
        line-height: 1.4;
      }
    }
    &__icon {
      border-color: var(--text-300);
      transition: 0.2s;
      svg {
        transition: 0.2s;
      }
    }
    &__text {
      max-width: 75rem;
      height: 0;
      overflow: hidden;
      transition: 0.3s;
      color: var(--text-700);
      pointer-events: none;
      @include w1199 {
        max-width: 90%;
      }
      @include w767 {
        max-width: none;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.71;
        letter-spacing: normal;
      }
    }
  }
}
.tiles {
  counter-reset: item;
  @include w1199 {
    margin-bottom: 0;
  }
  & + hr {
    @include w1199 {
      display: none;
    }
  }
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
      overflow-x: auto;
    }
  }
  &__item {
    height: 23rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3.2rem;
    background-color: var(--text-000);
    border-radius: 1.6rem;
    font-size: 2rem;
    line-height: 1.4;
    color: var(--text-1000);
    @include w1199 {
      width: 42.4rem;
      height: 24rem;
      font-size: 1.6rem;
      line-height: 1.5;
    }
    @include w767 {
      width: calc(100vw + 2rem);
      height: 17rem;
      padding: 2.4rem;
    }
    &:after {
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
}
</style>
