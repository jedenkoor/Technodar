<i18n>
{
  "ru": {
    "h1": "VMTS",
    "about": {
      "title": "Бортовой контроллер VMTS",
      "text": "Контролируйте операции с топливом, состояние техники, ее местоположение и быстро реагируйте на изменения в показателях",
      "items": [
        {
          "title": "VMTS",
          "text": "Промежуточное звено, которое переводит необработанные данные в конкретные показатели и передает их в систему глубокой аналитики DOTS"
        },
        {
          "title": "Что можно отслеживать",
          "text": [
            "Движение топлива",
            "Состояние потребителей",
            "Количественные и качественные показатели с привязкой к местоположению"
          ]
        }
      ]
    },
    "info": {
      "title": "Бортовой контроллер VMTS транслирует данные в реальном времени. Поэтому сотрудники могут устранить проблему практически сразу после выявления нарушения",
      "text": "Для этого рекомендуем подключить систему звукового оповещения",
      "btn": "Подробнее"
    }
  },
  "en": {
    "h1": "VMTS",
    "about": {
      "title": "On-board VMTS controller",
      "text": "Monitor fuel operations, vehicle status, location and quickly respond to changes in performance",
      "items": [
        {
          "title": "VMTS",
          "text": "An intermediate link that translates raw data into specific indicators and passes them to the DOTS deep analytics system"
        },
        {
          "title": "What can be tracked",
          "text": [
            "Fuel movement",
            "Consumer Status",
            "Quantitative and qualitative indicators with reference to location"
          ]
        }
      ]
    },
    "info": {
      "title": "The onboard VMTS controller broadcasts data in real time. Therefore, employees can fix the problem almost immediately after detecting a violation.",
      "text": "To do this, we recommend connecting a sound notification system",
      "btn": "More"
    }
  }
}
</i18n>

<template>
  <div class="vmts">
    <h1 class="visually-hidden">{{ $t('h1') }}</h1>
    <section class="section-margin about">
      <div class="about__col">
        <h2 class="title about__title">{{ $t('about.title') }}</h2>
        <p class="about__text">{{ $t('about.text') }}</p>
        <ul class="about__list">
          <li v-for="(item, index) in $t('about.items')" :key="index" class="about__item">
            <div class="about-item__top">
              <img :src="`/images/icons/vmts-about${++index}.svg`" :alt="item.title" class="about-item__img">
              <p class="about-item__title">{{ item.title }}</p>
            </div>
            <p v-if="typeof item.text === 'string'" class="about-item__text">
              {{ item.text }}
            </p>
            <ul v-else-if="typeof item.text === 'object'" class="about-item__features">
              <li v-for="(feature, featureIndex) in item.text" :key="featureIndex" class="about-item__feature">
                {{ feature }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="about__col">
        <ProductionSliderOneItemGreyBackground :page="page" :slider="slider"/>
      </div>
    </section>
    <div class="section-margin full-wide grey">
      <div class="section-margin info">
        <p class="info__title">{{ $t('info.title') }}</p>
        <div class="info__col">
          <p class="info__text">{{ $t('info.text') }}</p>
          <div class="info__row">
            <button class="btn btn-blue-filled info__btn">
              {{ $t('info.btn') }}
            </button>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2441 19.0026C26.2441 17.9733 25.069 17.3858 24.2456 18.0033L19.9808 21.2019C19.505 21.5588 18.9262 21.7517 18.3314 21.7517H15.9991C15.3092 21.7517 14.75 22.3109 14.75 23.0008L14.75 26.999C14.75 27.6888 15.3092 28.2481 15.9991 28.2481H18.3314C18.9262 28.2481 19.505 28.441 19.9808 28.7979L24.2456 31.9964C25.069 32.614 26.2441 32.0265 26.2441 30.9972V19.0026ZM23.3456 16.8033C25.1579 15.4441 27.7441 16.7372 27.7441 19.0026V30.9972C27.7441 33.2626 25.1579 34.5557 23.3456 33.1964L19.0808 29.9979C18.8646 29.8357 18.6016 29.7481 18.3314 29.7481H15.9991C14.4808 29.7481 13.25 28.5173 13.25 26.999L13.25 23.0008C13.25 21.4825 14.4808 20.2517 15.9991 20.2517H18.3314C18.6016 20.2517 18.8646 20.1641 19.0808 20.0019L23.3456 16.8033ZM32.8248 18.1085C33.1177 17.8156 33.5926 17.8156 33.8855 18.1085C35.6483 19.8713 36.74 22.3088 36.74 24.9999C36.74 27.691 35.6483 30.1285 33.8855 31.8913C33.5926 32.1842 33.1177 32.1842 32.8248 31.8913C32.5319 31.5984 32.5319 31.1235 32.8248 30.8306C34.3179 29.3376 35.24 27.2772 35.24 24.9999C35.24 22.7226 34.3179 20.6622 32.8248 19.1692C32.5319 18.8763 32.5319 18.4014 32.8248 18.1085ZM29.9977 20.9356C30.2906 20.6427 30.7655 20.6427 31.0584 20.9356C32.0977 21.975 32.7418 23.4129 32.7418 24.9999C32.7418 26.5869 32.0977 28.0248 31.0584 29.0642C30.7655 29.357 30.2906 29.357 29.9977 29.0642C29.7048 28.7713 29.7048 28.2964 29.9977 28.0035C30.7672 27.234 31.2418 26.1731 31.2418 24.9999C31.2418 23.8267 30.7672 22.7658 29.9977 21.9963C29.7048 21.7034 29.7048 21.2285 29.9977 20.9356Z" fill="#231F20"/>
              <rect x="0.5" y="-0.5" width="49" height="49" rx="24.5" transform="matrix(1 0 0 -1 0 49)" stroke="#231F20"/>
            </svg>
          </div>
        </div>
      </div>
      <GeneralSmallBlueRow style="margin-bottom: 0;"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vmts',
  data () {
    return {
      page: 'vmts',
      slider: [
        {
          image: '/images/development/vmts-slide.jpg',
          title: 'Отслеживание в реальном времени',
          info: ''
        },
        {
          image: '/images/development/dots-slide.jpg',
          title: 'Отслеживание в реальном времени',
          info: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.2rem));
  grid-gap: 2.4rem;
  @include w1199 {
    grid-template-columns: 100%;
  }
  @include w767 {
    grid-gap: 2rem;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  &__text {
    max-width: 55rem;
    margin-bottom: 4rem;
    color: var(--text-700);
  }
  &__list {
    display: grid;
    grid-gap: 2rem;
    padding-left: 0;
    list-style: none;
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
    }
    &__img {
      width: 5rem;
      margin-right: 1.6rem;
    }
    &__title {
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
    }
    &__text {
      color: var(--text-700);
    }
    &__features {
      max-width: 34rem;
      display: grid;
      grid-gap: 2rem;
      padding-left: 0;
      list-style: none;
      @include w767 {
        grid-gap: 1.6rem;
      }
    }
  }
}
.grey {
  padding-top: var(--section-margin);
  padding-bottom: var(--section-margin);
  background-color: var(--text-200);
  @include w1199 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
.info {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.4rem;
  @include w767 {
    display: block;
  }
  &__title {
    grid-column: span 6;
    margin-bottom: 0;
    padding-right: 9rem;
    font-size: 2.4rem;
    line-height: 1.33;
    letter-spacing: -0.03em;
    @include w1199 {
      grid-column: span 7;
      padding-right: 0;
      font-size: 2rem;
      line-height: 1.4;
    }
    @include w767 {
      margin-bottom: 4rem;
    }
  }
  &__col {
    grid-column: span 4;
    padding-right: 7rem;
    padding-left: 3.9rem;
    border-left: 0.1rem solid var(--text-200);
    @include w1199 {
      padding-right: 0;
    }
    @include w767 {
      padding-left: 0;
    }
  }
  &__text {
    margin-bottom: 4rem;
    color: var(--text-700);
    @include w767 {
      margin-bottom: 2rem;
    }
  }
  &__row {
    display: flex;
    svg {
      flex-shrink: 0;
      width: 5rem;
      height: auto;
    }
  }
  &__btn {
    margin-right: 2rem;
    padding: 1.6rem 3.2rem;
    @include w1199 {
      margin-right: 0.8rem;
    }
  }
}
</style>
