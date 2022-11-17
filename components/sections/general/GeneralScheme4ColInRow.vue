<i18n>
{
  "ru": {
    "scrt": {
      "title": "Как работает система контроля топлива?",
      "items": [
        {
          "title": "Расходомеры",
          "text": "Измеряют расход топлива в тоннах"
        },
        {
          "title": "Контроллер",
          "text": "Получает данные с датчиков и расходомеров и передает их системе управления"
        },
        {
          "title": "VMTS",
          "tag": "На судне",
          "text": "Система сбора информации"
        },
        {
          "title": "DOTS",
          "tag": "На любом устройстве",
          "text": "Собирает данные и транслирует их на любое удобное устройство"
        },
        {
          "tag": "На судне",
          "title": "Панель оператора",
          "text": "Отображает данные в режиме реального времени на судне"
        }
      ]
    },
    "development": {
      "title": "Как работает инструмент визуализации?",
      "items": [
        {
          "title": "Датчики",
          "text": "Измеряют заданные параметры системы"
        },
        {
          "title": "Контроллер",
          "text": "Получает данные с датчиков и расходомеров и передает их системе управления"
        },
        {
          "title": "VMTS",
          "tag": "На судне",
          "text": "Система сбора информации"
        },
        {
          "title": "DOTS",
          "tag": "На любом устройстве",
          "text": "Собирает данные и транслирует их на любое удобное устройство"
        },
        {
          "tag": "На судне",
          "title": "Панель оператора",
          "text": "Отображает данные в режиме реального времени на судне"
        }
      ]
    }
  },
  "en": {
    "scrt": {
      "title": "How does the fuel control system work?",
      "items": [
        {
          "title": "Flowmeters",
          "text": "Measure fuel consumption in tons"
        },
        {
          "title": "Controller",
          "text": "Receives data from sensors and flow meters and transmits them to the control system"
        },
        {
          "title": "VMTS",
          "tag": "On the ship",
          "text": "Information collection system"
        },
        {
          "title": "DOTS",
          "tag": "On any device",
          "text": "Collects data and broadcasts it to any convenient device"
        },
        {
          "tag": "On the ship",
          "title": "Operator panel",
          "text": "Displays real-time data on the vessel"
        }
      ]
    },
    "development": {
      "title": "How does the visualization tool work?",
      "items": [
        {
          "title": "Sensors",
          "text": "Measure the specified parameters of the system"
        },
        {
          "title": "Controller",
          "text": "Receives data from sensors and flow meters and transmits them to the control system"
        },
        {
          "title": "VMTS",
          "tag": "On the ship",
          "text": "Information collection system"
        },
        {
          "title": "DOTS",
          "tag": "On any device",
          "text": "Collects data and broadcasts it to any convenient device"
        },
        {
          "tag": "On the ship",
          "title": "Operator panel",
          "text": "Displays real-time data on the vessel"
        }
      ]
    }
  }
}
</i18n>
<template>
  <section class="section-margin scheme">
    <h2 class="title scheme__title">{{ $t(`${page}.title`) }}</h2>
    <ul class="scheme__list">
      <li v-for="(item, index) in $t(`${page}.items`)" :key="index" class="scheme__item">
        <img :src="`/images/icons/scrt-scheme${++index}.svg`" :alt="item.title">
        <span v-if="item.tag" class="scheme-item__tag">{{ item.tag }}</span>
        <span v-if="item.title" class="scheme-item__title">{{ item.title }}</span>
        <p v-if="item.text" class="scheme-item__text">{{ item.text }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'GeneralScheme4ColInRow',
  props: {
    page: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.scheme {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 20rem 20rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 20rem);
    }
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: 20rem 24rem repeat(3, 20rem);
    }
  }
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem;
    background-color: var(--text-200);
    border-radius: 1.6rem;
    &:nth-child(1) {
      grid-row: 1 / 3;
      margin-right: 6.4rem;
      @include w1300 {
        margin-right: 0;
      }
      @include w1199 {
        grid-column: 1 / 3;
        grid-row: auto;
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
        width: 8.8rem;
        height: 0.6rem;
        background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
        @include w1300 {
          width: 2.4rem;
        }
        @include w1199 {
          display: none;
        }
      }
    }
    &:nth-child(2) {
      grid-row: 1 / 3;
      @include w1199 {
        grid-row: 2 / 4;
      }
      @include w767 {
        grid-row: auto;
      }
      &:before {
        @include w1199 {
          content: '';
          position: absolute;
          bottom: 100%;
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
        order: 1;
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
        width: 8.8rem;
        height: 0.6rem;
        background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
        @include w1300 {
          width: 2.4rem;
        }
        @include w1199 {
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 0.6rem;
          height: 2.4rem;
          background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
        }
        @include w767 {
          top: auto;
          bottom: 100%;
        }
      }
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        width: 2.4rem;
        height: 0.6rem;
        background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
        @include w767 {
          top: 100%;
          right: 1.3rem;
          transform: none;
          width: 0.6rem;
          height: 24.8rem;
          background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
        }
      }
      img {
        margin-top: 0.6rem;
      }
      .scheme-item__title {
        display: none;
      }
    }
    &:nth-child(4) {
      @include w767 {
        margin-right: 3.2rem;
      }
      &:before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0.6rem;
        height: 2.4rem;
        background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
        @include w1199 {
          top: 100%;
          bottom: auto;
          background: url('/images/icons/gray-arrow-top.svg') center top/cover no-repeat;
        }
        @include w767 {
          top: auto;
          bottom: 100%;
          transform: none;
          background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
        }
      }
      img {
        margin-top: 0.6rem;
      }
      .scheme-item__title {
        display: none;
      }
    }
    &:nth-child(5) {
      grid-column: 4 / 5;
      grid-row: 1 / 3;
      margin-left: 6.4rem;
      @include w1300 {
        margin-left: 0;
      }
      @include w1199 {
        grid-column: 1 / 3;
        grid-row: auto;
        order: 2;
      }
      @include w767 {
        grid-column: auto;
        order: initial;
      }
    }
    &:before {

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
      margin-top: 0;
      margin-bottom: 1.6rem;
      font-weight: 450;
      font-size: 2rem;
      line-height: 1.4;
      letter-spacing: -0.03em;
    }
    &__text {
      color: var(--text-700);
    }
  }
}
</style>
