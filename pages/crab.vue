<i18n>
{
  "ru": {
    "info": {
      "title": "О системе",
      "items": [
        {
          "title": "Контроль температуры и кислорода",
          "text": "Это автоматизированная система мониторинга температуры и содержания кислорода в чанах для транспортировки скоропортящихся грузов. В режиме реального времени получайте уведомления об отклонениях температуры в чанах и предотвращайте порчу ценного груза."
        },
        {
          "title": "Принцип работы",
          "text": "Она состоит из датчиков контроля температуры и системы насыщения воды кислородом. Показания с датчиков транслируются на бортовой компьютер, затем в комплекс DOTS, а далее передаются в офис компании."
        }
      ]
    },
    "variants": {
      "title": "Варианты установки системы",
      "items": [
        {
          "title": "Подключение к штатной системе",
          "features": [
            "Визуализация показателей на панели оператора",
            "Подключение к штатной аппаратуре",
            "Запись и передача температурных показателей на берег онлайн"
          ],
          "btn": "Подробнее"
        },
        {
          "title": "Установка системы контроля температуры в чанах",
          "features": [
            "Визуализация показателей на панели оператора",
            "Установка датчиков температуры в чанах",
            "Подключение контроллера, передающего данные в ПО DOTS"
          ],
          "btn": "Подробнее"
        },
        {
          "title": "Установка системы контроля температуры и кислородосодержания в чанах",
          "features": [
            "Визуализация показателей на панели оператора",
            "Установка датчиков температуры и кислородосодержания в чанах",
            "Подключение контроллера, передающего данные в ПО DOTS"
          ],
          "btn": "Подробнее"
        }
      ]
    }
  },
  "en": {
    "info": {
      "title": "About the system",
      "items": [
        {
          "title": "Temperature and oxygen control",
          "text": "This is an automated system for monitoring the temperature and oxygen content in vats for transporting perishable goods. Get real-time notifications of temperature deviations in vats and prevent damage to valuable cargo."
        },
        {
          "title": "Principle of operation",
          "text": "It consists of temperature control sensors and water oxygen saturation system. The readings from the sensors are transmitted to the on-board computer, then to the DOTS complex, and then transferred to the company's office."
        }
      ]
    },
    "variants": {
      "title": "System installation options",
      "items": [
        {
          "title": "Connection to the standard system",
          "features": [
            "Visualization of indicators on the operator panel",
            "Connection to standard equipment",
            "Recording and transmission of temperature readings to shore online"
          ],
          "btn": "More"
        },
        {
          "title": "Installation of a temperature control system in vats",
          "features": [
            "Visualization of indicators on the operator panel",
            "Installation of temperature sensors in vats",
            "Connecting a controller that sends data to DOTS software"
          ],
          "btn": "More"
        },
        {
          "title": "Installation of a temperature and oxygen control system in vats",
          "features": [
            "Visualization of indicators on the operator panel",
            "Installation of temperature and oxygen sensors in vats",
            "Connecting a controller that sends data to DOTS software"
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
    <section class="section-margin info">
      <h2 class="title info__title">{{ $t('info.title') }}</h2>
      <div class="info__content">
        <ul class="info__list">
          <li v-for="(item, index) in $t('info.items')" :key="index" class="info__item">
            <div class="info-item__top">
              <img :src="`/images/icons/crab-info${++index}.svg`" :alt="item.title" class="info-item__icon">
              <p class="info-item__title">{{ item.title }}</p>
            </div>
            <p class="info-item__text">{{ item.text }}</p>
          </li>
        </ul>
        <img src="/images/production/crab-info.jpg" :alt="$t('info.title')" class="info__img">
      </div>
    </section>
    <hr class="section-margin">
    <section class="section-margin variants">
      <h2 class="title variants__title">{{ $t('variants.title') }}</h2>
      <ul class="variants__list">
        <li v-for="(variant, variantIndex) in $t('variants.items')" :key="variantIndex" class="variants__item">
          <p class="variants-item__title">{{ variant.title }}</p>
          <ul class="variants-item__features">
            <li v-for="(feature, featureIndex) in variant.features" :key="featureIndex" class="variants-item__feature">
              {{ feature }}
            </li>
          </ul>
          <button :class="['btn', 'variants-item__btn', { 'btn-white-filled': variantIndex === '2' }, { 'btn-blue-outlined': variantIndex !== '2' }]">
            {{ variant.btn }}
          </button>
        </li>
      </ul>
    </section>
    <hr class="section-margin">
    <GeneralSystemInterface :page="page" :slides="slides"/>
    <GeneralForm/>
    <ProductionOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'CrabPage',
  data () {
    return {
      page: 'crab',
      bannerImage: '/images/production/crab-banner.jpg',
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
.info {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
    @include w767 {
      margin-bottom: 2.4rem;
    }
  }
  &__content {
    display: grid;
    grid-template-columns: calc(50.6% - 2rem) calc(49.4% - 2rem);
    grid-gap: 4rem;
    @include w1199 {
      grid-template-columns: auto;
    }
  }
  &__list {
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
    &:not(:last-child) {
      margin-bottom: 2rem;
      @include w767 {
        margin-bottom: 1.6rem;
      }
    }
  }
  &-item {
    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 3.2rem;
      @include w767 {
        display: block;
        margin-bottom: 2.4rem;
      }
    }
    &__icon {
      width: 5rem;
      margin-right: 1.6rem;
      @include w767 {
        margin-right: 0;
        margin-bottom: 1.6rem;
      }
    }
    &__title {
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      @include w767 {
        font-size: 2rem;
        line-height: 1.4;
      }
    }
    &__text {
      color: var(--text-700);
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.6rem;
    @include w1199 {
      height: 56.8rem;
    }
    @include w767 {
      height: 32.8rem;
    }
  }
}
.variants {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
    @include w767 {
      margin-bottom: 2.3rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 49rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: auto;
      grid-template-rows: auto;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.3rem;
    background-color: var(--text-100);
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem;
    @include w1199 {
      padding: 3.1rem;
    }
    @include w767 {
      padding: 2.3rem;
    }
    &:last-child {
      background-color: var(--primary-blue);
      border: 0.1rem solid var(--primary-blue);
      color: var(--text-000);
      .variants-item__feature:before {
        border-color: var(--text-000);
      }
    }
  }
  &-item {
    &__title {
      margin-bottom: auto;
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      @include w1199 {
        margin-bottom: 8rem;
      }
      @include w767 {
        margin-bottom: 4rem;
        font-size: 2rem;
        line-height: 1.4;
      }
    }
    &__features {
      margin-bottom: 2.4rem;
      padding-left: 0;
      list-style: none;
      @include w1199 {
        margin-bottom: 3.2rem;
      }
    }
    &__feature {
      position: relative;
      padding-left: 2.8rem;
      &:not(:last-child) {
        margin-bottom: 2.4rem;
      }
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
