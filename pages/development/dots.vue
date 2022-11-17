<i18n>
{
  "ru": {
    "h1": "VMTS",
    "about": {
      "title": "Программно-аппаратный комплекс DOTS",
      "text": "Выстраивайте отчеты о работе объекта за выбранный период, контролируйте процесс передачи топлива, систематизируйте информацию и принимайте управленческие решения",
      "items": [
        {
          "title": "DOTS",
          "text": "Конечная точка, в которой сводятся все показатели и параметры объекта мониторинга. Датчики фиксируют данные на месте, бортовой контроллер VMTS обрабатывает их и оперативно передает на экран. Затем данные попадают в интерфейс DOTS, где их можно комплексно анализировать"
        },
        {
          "title": "Чем поможет система",
          "text": [
            "Анализ данных за период",
            "Сравнение параметров",
            "Построение сводных отчетов",
            "Фильтр значений",
            "Выгрузка данных"
          ]
        }
      ]
    },
    "info": {
      "title": "Получайте информацию в формате карт с местоположением и пройденным маршрутом, линейным графиком и таблицу по всем основным показателям",
      "text": "Используйте DOTS с любого устройства — телефона, ПК, ноутбука или планшета",
      "btn": "Подробнее"
    }
  },
  "en": {
    "h1": "VMTS",
    "about": {
      "title": "DOTS software and hardware complex",
      "text": "Build reports on the operation of the facility for a selected period, control the process of fuel transfer, systematize information and make management decisions",
      "items": [
        {
          "title": "DOTS",
          "text": "The end point at which all indicators and parameters of the monitored object are summarized. Sensors capture the data in place, the onboard VMTS controller processes it and promptly transfers it to the screen. Then the data enters the DOTS interface, where they can be analyzed comprehensively"
        },
        {
          "title": "How the system can help",
          "text": [
            "Period data analysis",
            "Parameter comparison",
            "Building summary reports",
            "Value filter",
            "Data upload"
          ]
        }
      ]
    },
    "info": {
      "title": "Get information in map format with location and route traveled, line graph and table for all key indicators",
      "text": "Use DOTS from any device - phone, PC, laptop or tablet",
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
            <svg width="166" height="50" viewBox="0 0 166 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.3999 31.1501C27.8141 31.1501 28.1499 30.8143 28.1499 30.4001C28.1499 29.9859 27.8141 29.6501 27.3999 29.6501V31.1501ZM22.5999 29.6501C22.1857 29.6501 21.8499 29.9859 21.8499 30.4001C21.8499 30.8143 22.1857 31.1501 22.5999 31.1501V29.6501ZM19.5999 20.3501H30.3999V18.8501H19.5999V20.3501ZM30.8499 20.8001V26.8001H32.3499V20.8001H30.8499ZM19.1499 26.8001V20.8001H17.6499V26.8001H19.1499ZM30.3999 27.2501H24.9999V28.7501H30.3999V27.2501ZM24.9999 27.2501H19.5999V28.7501H24.9999V27.2501ZM24.2499 28.0001V30.4001H25.7499V28.0001H24.2499ZM24.9999 31.1501H27.3999V29.6501H24.9999V31.1501ZM24.9999 29.6501H22.5999V31.1501H24.9999V29.6501ZM17.6499 26.8001C17.6499 27.8771 18.5229 28.7501 19.5999 28.7501V27.2501C19.3514 27.2501 19.1499 27.0486 19.1499 26.8001H17.6499ZM30.8499 26.8001C30.8499 27.0486 30.6484 27.2501 30.3999 27.2501V28.7501C31.4769 28.7501 32.3499 27.8771 32.3499 26.8001H30.8499ZM30.3999 20.3501C30.6484 20.3501 30.8499 20.5516 30.8499 20.8001H32.3499C32.3499 19.7231 31.4769 18.8501 30.3999 18.8501V20.3501ZM19.5999 18.8501C18.5229 18.8501 17.6499 19.7231 17.6499 20.8001H19.1499C19.1499 20.5516 19.3514 20.3501 19.5999 20.3501V18.8501Z" fill="black"/>
              <rect x="0.5" y="-0.5" width="49" height="49" rx="24.5" transform="matrix(1 0 0 -1 0 49)" stroke="#231F20"/>
              <path d="M76.3999 29.8002L75.7999 29.3502C75.6295 29.5775 75.602 29.8815 75.7291 30.1356C75.8561 30.3897 76.1158 30.5502 76.3999 30.5502V29.8002ZM89.5999 29.8002V30.5502C89.884 30.5502 90.1437 30.3897 90.2707 30.1356C90.3978 29.8815 90.3703 29.5775 90.1999 29.3502L89.5999 29.8002ZM79.3999 20.9502H86.5999V19.4502H79.3999V20.9502ZM87.0499 21.4002V27.4002H88.5499V21.4002H87.0499ZM87.7999 26.6502H78.1999V28.1502H87.7999V26.6502ZM78.9499 27.4002V21.4002H77.4499V27.4002H78.9499ZM77.5999 26.9502L75.7999 29.3502L76.9999 30.2502L78.7999 27.8502L77.5999 26.9502ZM76.3999 30.5502H89.5999V29.0502H76.3999V30.5502ZM90.1999 29.3502L88.3999 26.9502L87.1999 27.8502L88.9999 30.2502L90.1999 29.3502ZM86.5999 20.9502C86.8484 20.9502 87.0499 21.1517 87.0499 21.4002H88.5499C88.5499 20.3232 87.6769 19.4502 86.5999 19.4502V20.9502ZM79.3999 19.4502C78.3229 19.4502 77.4499 20.3232 77.4499 21.4002H78.9499C78.9499 21.1517 79.1514 20.9502 79.3999 20.9502V19.4502Z" fill="black"/>
              <rect x="0.5" y="-0.5" width="49" height="49" rx="24.5" transform="matrix(1 0 0 -1 58 49)" stroke="#231F20"/>
              <path d="M140.4 28.4499C139.986 28.4499 139.65 28.7857 139.65 29.1999C139.65 29.6141 139.986 29.9499 140.4 29.9499V28.4499ZM141.6 29.9499C142.014 29.9499 142.35 29.6141 142.35 29.1999C142.35 28.7857 142.014 28.4499 141.6 28.4499V29.9499ZM138.6 19.1499H143.4V17.6499H138.6V19.1499ZM143.85 19.5999V30.3999H145.35V19.5999H143.85ZM138.15 30.3999V19.5999H136.65V30.3999H138.15ZM143.4 30.8499H138.6V32.3499H143.4V30.8499ZM140.4 29.9499H141.6V28.4499H140.4V29.9499ZM136.65 30.3999C136.65 31.4769 137.523 32.3499 138.6 32.3499V30.8499C138.351 30.8499 138.15 30.6484 138.15 30.3999H136.65ZM143.85 30.3999C143.85 30.6484 143.648 30.8499 143.4 30.8499V32.3499C144.477 32.3499 145.35 31.4769 145.35 30.3999H143.85ZM143.4 19.1499C143.648 19.1499 143.85 19.3514 143.85 19.5999H145.35C145.35 18.5229 144.477 17.6499 143.4 17.6499V19.1499ZM138.6 17.6499C137.523 17.6499 136.65 18.5229 136.65 19.5999H138.15C138.15 19.3514 138.351 19.1499 138.6 19.1499V17.6499Z" fill="black"/>
              <rect x="0.5" y="-0.5" width="49" height="49" rx="24.5" transform="matrix(1 0 0 -1 116 49)" stroke="#231F20"/>
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
  name: 'Dots',
  data () {
    return {
      page: 'dots',
      slider: [
        {
          image: '/images/development/dots-slide.jpg',
          title: 'Отслеживание в реальном времени',
          info: ''
        },
        {
          image: '/images/development/vmts-slide.jpg',
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
    @include w1199 {
      max-width: 52rem;
    }
  }
  &__text {
    max-width: 55rem;
    margin-bottom: 4rem;
    color: var(--text-700);
    @include w1199 {
      max-width: none;
    }
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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem 2.4rem;
      padding-left: 0;
      list-style: none;
      @include w1199 {
        grid-template-columns: auto;
        grid-gap: 2rem;
      }
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
    padding-right: 29%;
    font-size: 2.4rem;
    line-height: 1.33;
    letter-spacing: -0.03em;
    @include w1199 {
      grid-column: span 7;
      max-width: 52rem;
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
      grid-column: span 5;
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
      width: 16.6rem;
      height: auto;
      @include w1199 {
        display: none;
      }
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
