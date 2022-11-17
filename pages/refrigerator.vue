<i18n>
{
  "ru": {
    "tiles": {
      "title": "Для каких судов подходит решение",
      "text": "Рефрижераторные установки на судах обеспечивают в течение длительного времени сохранность продуктов, особенно легко портящихся. В море это, в первую очередь, замороженная рыбы и морепродукты.",
      "items": [
        {
          "tag": "Подойдет",
          "title": "Рыболовным",
          "text": "Перевозка улова с места добычи на берег для реализации и дальнейшей переработки."
        },
        {
          "tag": "Подойдет",
          "title": "Рыбоперерабатывающим",
          "text": "Прием рыбы от рыболовных судов или рыбаков, с целью дальнейшей переработки."
        },
        {
          "tag": "Подойдет",
          "title": "Рефрижераторным",
          "text": "Перевозки охлажденных или замороженных грузов."
        }
      ]
    },
    "info": [
      {
        "title": "Совместимость с учётными системами",
        "text": "Решение ГК Технодар совместимо с подавляющим большинством учётных систем сторонних производителей. Обмен массивом данных может происходить со службой службой логистики, эксплуатации транспорта, ремонта, безопасности и другими."
      },
      {
        "title": "Доступность сервисного обслуживания",
        "text": "При сбое работы системы мониторинга, специалист по обслуживанию сможет устранить проблему, вне зависимости от текущего местоположения судна, благодаря применению международных стандартов производства и установки."
      }
    ],
    "parameters": {
      "title": "Контролируемые параметры",
      "items": [
        {
          "title": "Температурные",
          "text": "Отображают соотношение текущей и нормативной температуры перевозимого груза."
        },
        {
          "title": "Дополнительные",
          "text": "Не влияют на груз в данный момент, но регулярное отхождение от нормы указывает на скорый сбой"
        }
      ],
      "scheme": [
        "Датчики в рефрижераторах",
        "Отображает данные в режиме реального времени, а также является инструментом управления системами судна."
      ]
    },
    "variants": {
      "title": "Варианты установки системы",
      "items": [
        {
          "title": "Установка системы",
          "features": [
            "Визуализация показателей на панели оператора",
            "Установка 1 - 4 датчика температуры на трюм в зависимости от трюма",
            "Подключение контроллера, передающего данные в ПО DOTS"
          ],
          "btn": "Подробнее"
        },
        {
          "title": "Подключение к штатной системе",
          "features": [
            "Визуализация показателей на панели оператора",
            "Подключение к штатной аппаратуре",
            "Запись и передача температурных показателей на берег онлайн"
          ],
          "btn": "Подробнее"
        }
      ]
    }
  },
  "en": {
    "tiles": {
      "title": "For which courts is the solution suitable?",
      "text": "Refrigerating installations on ships provide for a long time the safety of products, especially easily perishable. In the sea it is, first of all, frozen fish and seafood.",
      "items": [
        {
          "tag": "Suitable",
          "title": "Fishing",
          "text": "Transportation of the catch from the place of production to the shore for sale and further processing."
        },
        {
          "tag": "Suitable",
          "title": "Fish processing",
          "text": "Reception of fish from fishing vessels or fishermen, for the purpose of further processing."
        },
        {
          "tag": "Suitable",
          "title": "Refrigerated",
          "text": "Transportation of refrigerated or frozen cargo."
        }
      ]
    },
    "info": [
      {
        "title": "Compatibility with accounting systems",
        "text": "The solution of Technodar Group of Companies is compatible with the vast majority of third-party accounting systems. The exchange of an array of data can occur with the service of the logistics service, transport operation, repair, security, and others."
      },
      {
        "title": "Service availability",
        "text": "If the monitoring system fails, the service technician will be able to fix the problem, regardless of the current location of the vessel, thanks to the application of international manufacturing and installation standards."
      }
    ],
    "parameters": {
      "title": "Controlled parameters",
      "items": [
        {
          "title": "Temperature",
          "text": "Display the ratio of the current and standard temperature of the transported cargo"
        },
        {
          "title": "Additional",
          "text": "Do not affect the load at the moment, but regular deviation from the norm indicates an imminent failure"
        }
      ],
      "scheme": [
        "Sensors in refrigerators",
        "Displays real-time data and is also a ship systems management tool."
      ]
    },
    "variants": {
      "title": "System installation options",
      "items": [
        {
          "title": "System installation",
          "features": [
            "Visualization of indicators on the operator panel",
            "Installation of 1 - 4 temperature sensors per hold depending on the hold",
            "Connecting a controller that sends data to DOTS software"
          ],
          "btn": "More"
        },
        {
          "title": "Connection to the standard system",
          "features": [
            "Visualization of indicators on the operator panel",
            "Connection to standard equipment",
            "Recording and transmission of temperature readings to shore online"
          ],
          "btn": "More"
        }
      ]
    }
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage"/>
    <section class="tiles">
      <h2 class="title tiles__title">{{ $t('tiles.title') }}</h2>
      <p class="tiles__text">{{ $t('tiles.text') }}</p>
      <ul class="tiles__list">
        <li v-for="(item, index) in $t('tiles.items')" :key="index" class="tiles__item">
          <span class="tiles-item__tag">{{ item.tag }}</span>
          <span class="tiles-item__title">{{ item.title }}</span>
          <p class="tiles-item__text">{{ item.text }}</p>
          <img :src="`/images/production/refrigerator-tile${++index}.jpg`" :alt="item.title" class="tiles-item__img">
        </li>
      </ul>
    </section>
    <div class="section-margin full-wide grey">
      <GeneralSmallBlueRow/>
      <ul class="section-margin info">
        <li v-for="(item, index) in $t('info')" :key="index" class="info__item">
          <img :src="`/images/icons/refrigerator-info${++index}.svg`" :alt="item.title" class="info-item__img">
          <p class="info-item__title">{{ item.title }}</p>
          <p class="info-item__text">{{ item.text }}</p>
        </li>
      </ul>
      <hr class="section-margin">
      <section class="parameters">
        <img src="/images/production/refrigerator-parameters.jpg" :alt="$t('parameters.title')" class="parameters__img">
        <div class="parameters__col">
          <h2 class="title parameters__title">{{ $t('parameters.title') }}</h2>
          <ul class="parameters__list">
            <li v-for="(item, index) in $t('parameters.items')" :key="index" class="parameters-list__item">
              <img :src="`/images/icons/refrigerator-parameters${++index}.svg`" :alt="item.title" class="parameters-list-item__img">
              <p class="parameters-list-item__title">{{ item.title }}</p>
              <p class="parameters-list-item__text">{{ item.text }}</p>
            </li>
          </ul>
          <ul class="parameters__scheme">
            <li v-for="(schemeItem, index) in $t('parameters.scheme')" :key="index" class="parameters-scheme__item">
              <img :src="`/images/icons/refrigerator-scheme${++index}.svg`" :alt="schemeItem" class="parameters-scheme-item__img">
              <p class="parameters-scheme-item__text">{{ schemeItem }}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="section-margin variants">
      <h2 class="title variants__title">{{ $t('variants.title') }}</h2>
      <ul class="variants__list">
        <li v-for="(variant, variantIndex) in $t('variants.items')" :key="variantIndex" class="variants__item">
          <p class="variants-item__title">{{ variant.title }}</p>
          <ul class="variants-item__features">
            <li v-for="(feature, featureIndex) in variant.features" :key="featureIndex" class="variants-item__feature">
              {{ feature }}
            </li>
          </ul>
          <button :class="['btn', 'variants-item__btn', { 'btn-white-filled': variantIndex === '0' }, { 'btn-blue-outlined': variantIndex === '1' }]">
            {{ variant.btn }}
          </button>
        </li>
      </ul>
    </div>
    <GeneralForm/>
    <ProductionOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'RefrigeratorPage',
  data () {
    return {
      page: 'refrigerator',
      bannerImage: '/images/production/refrigerator-banner.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.tiles {
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
    @include w1199 {
      max-width: 35rem;
    }
    @include w767 {
      max-width: 28rem;
    }
  }
  &__text {
    max-width: 84rem;
    margin-bottom: 4rem;
    color: var(--text-700);
    @include w1199 {
      max-width: 44rem;
    }
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
      padding-right: var(--container-padding);
      padding-left: var(--container-padding);
      overflow-x: auto;
    }
    @include w767 {
      grid-gap: 1.6rem;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3.1rem 3.1rem 0;
    background: var(--text-100);
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem 1.6rem 0 0;
    @include w1199 {
      width: 42.4rem;
    }
    @include w767 {
      padding: 2.3rem 2.3rem 0;
    }
  }
  &-item {
    &__tag {
      margin-bottom: 0.8rem;
      font-weight: 400;
      color: var(--primary-blue);
      line-height: 1.12;
    }
    &__title {
      margin-bottom: 2rem;
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      @include w1300 {
        font-size: 2.2rem;
      }
      @include w1199 {
        font-size: 2.4rem;
      }
    }
    &__text {
      margin-bottom: 3.2rem;
      color: var(--text-700);
    }
    &__img {
      width: 100%;
      margin-top: auto;
      border-radius: 1.6rem 1.6rem 0 0;
      object-fit: cover;
      @include w767 {
        height: 36rem;
      }
    }
  }
}
.grey {
  padding-top: var(--section-margin);
  padding-bottom: var(--section-margin);
  background-color: var(--text-200);
}
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.4rem;
  padding-left: 0;
  list-style: none;
  @include w1199 {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, 29.4rem);
  }
  @include w767 {
    grid-template-rows: auto;
    grid-gap: 1.6rem;
  }
  &__item {
    padding: 3.2rem;
    background-color: var(--text-000);
    border-radius: 1.6rem;
    @include w767 {
      padding: 2.4rem;
    }
  }
  &-item {
    &__img {
      margin-bottom: 3.2rem;
    }
    &__title {
      margin-bottom: 1.9rem;
      line-height: 1.33;
      font-size: 2.4rem;
      letter-spacing: -0.03em;
      @include w1199 {
        margin-bottom: 2rem;
      }
      @include w767 {
        font-size: 2rem;
        line-height: 1.4;
      }
    }
    &__text {
      max-width: 54rem;
      color: var(--text-700);
      @include w1199 {
        max-width: none;
      }
    }
  }
}
.parameters {
  display: grid;
  grid-template-columns: calc(49.4% - 2rem) calc(50.6% - 2rem);
  grid-gap: 4rem;
  @include w1199 {
    grid-template-columns: auto;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.6rem;
    @include w1199 {
      height: 55.8rem;
    }
    @include w767 {
      height: auto;
    }
  }
  &__title {
    max-width: 34rem;
    margin-top: 0;
    margin-bottom: 3.9rem;
    @include w767 {
      max-width: 30rem;
      margin-bottom: 3.2rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.4rem;
    margin-bottom: 4rem;
    padding-bottom: 4rem;
    padding-left: 0;
    list-style: none;
    border-bottom: 0.1rem solid var(--text-300);
    @include w767 {
      grid-template-columns: auto;
      grid-gap: 3.2rem;
      margin-bottom: 3.2rem;
      padding-bottom: 3.2rem;
    }
  }
  &-list {
    &-item {
      &__img {
        margin-bottom: 3.2rem;
        @include w1199 {
          margin-bottom: 3.4rem;
        }
        @include w767 {
          margin-bottom: 2rem;
        }
      }
      &__title {
        margin-bottom: 2rem;
        font-size: 2.4rem;
        line-height: 1.33;
        letter-spacing: -0.03em;
        @include w767 {
          margin-bottom: 1.2rem;
          font-size: 2rem;
          line-height: 1.4;
        }
      }
      &__text {
        max-width: 28rem;
        color: var(--text-700);
      }
    }
  }
  &__scheme {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: repeat(2, 20rem);
    }
  }
  &-scheme {
    &__item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2.4rem;
      background: var(--text-000);
      border-radius: 1.6rem;
      &:first-child {
        &:before,
        &:after {
          content: '';
          position: absolute;
          left: 100%;
          width: 2.4rem;
          height: 0.6rem;
          @include w767 {
            width: 0.6rem;
            height: 2.4rem;
          }
        }
        &:before {
          top: 43%;
          background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
          @include w767 {
            top: 100%;
            left: 52%;
            background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
          }
        }
        &:after {
          top: 53%;
          background: url('/images/icons/gray-arrow-left.svg') left center/cover no-repeat;
          @include w767 {
            top: 100%;
            left: 46%;
            background: url('/images/icons/gray-arrow-top.svg') center top/cover no-repeat;
          }
        }
        .parameters-scheme-item__text {
          max-width: 18rem;
          font-size: 2rem;
          line-height: 1.4;
          color: var(--text-900);
        }
      }
    }
    &-item {
      &__img {
        margin-bottom: auto;
      }
      &__text {
        color: var(--text-700);
      }
    }
  }
}
.variants {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
    @include w767 {
      max-width: 23rem;
      margin-bottom: 2.4rem;
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
  }
  &__item {
    padding: 3.1rem;
    border-radius: 1.6rem;
    @include w767 {
      padding: 2.3rem;
    }
    &:first-child {
      background-color: var(--primary-blue);
      border: 0.1rem solid var(--primary-blue);
      color: var(--text-000);
      .variants-item__feature:before {
        border-color: var(--text-000);
      }
    }
    &:last-child {
      background-color: var(--text-100);
      border: 0.1rem solid var(--text-200);
    }
  }
  &-item {
    &__title {
      margin-bottom: 8rem;
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      @include w767 {
        max-width: 20rem;
        margin-bottom: 4rem;
        font-size: 2rem;
        line-height: 1.4;
      }
    }
    &__features {
      margin-bottom: 3.2rem;
      padding-left: 0;
      list-style: none;
    }
    &__feature {
      position: relative;
      padding-left: 2.8rem;
      &:before {
        content: '';
        position: absolute;
        top: 44%;
        left: 0.4rem;
        width: 1.3rem;
        height: 0.8rem;
        border-bottom: 0.1rem solid var(--primary-blue);
        border-left: 0.1rem solid var(--primary-blue);
        transform: translateY(-50%) rotate(-45deg);
      }
      &:not(:last-child) {
        margin-bottom: 2.4rem;
      }
    }
    &__btn {
      padding: 1.5rem 3.1rem;
      @include w767 {
        width: 100%;
        font-size: 1.6rem;
      }
    }
  }
}
</style>
