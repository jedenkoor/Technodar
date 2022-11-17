<i18n>
{
  "ru": {
    "title": "Коробочные решения для флота",
    "btnOrder": "Заказать решение",
    "tabs": [
      {
        "title": "Буксир-толкач",
        "project": "ТИП ОТ-2400"
      },
      {
        "title": "Сухогрузное судно",
        "project": "Проект RSD59"
      },
      {
        "title": "Промысловое судно",
        "project": "Проект 1440"
      },
      {
        "title": "Танкер",
        "project": "Проект RST27/RST27M"
      }
    ],
    "complectation": {
      "title": "Комплектация",
      "items": [
        {
          "title": "Эконом",
          "text": "Базовое решение для судовладельцев"
        },
        {
          "title": "Комфорт",
          "text": "Лучшее сочетание цены и объема комплектации"
        },
        {
          "title": "Премиум",
          "text": "Закрывает весь перечень проблем судовладельцев"
        }
      ]
    },
    "equipment": {
      "title": "Оборудование",
      "items": [
        "Бортовой контроллер",
        "Главный двигатель<br>Расходомер Sekee FM20",
        "Главный двигатель<br>Датчик оборотов - 2 шт.",
        "Дизельный генератор<br>Расходомер Sekee FM10",
        "Дизельный генератор<br>Реле работы"
      ]
    },
    "tasks": {
      "title": "Решаемые задачи",
      "items": [
        "Запись, хранение и передачу данных в программное обеспечение через бортовой контроллер",
        "Контроль расхода топлива всех потребителей (главных двигателей, дизельных генераторов, котла, танков запаса топлива)",
        "Контроль режимов работы главных двигателей",
        "Контроль времени работы дизельных генераторов и котла",
        "Контроль уровня топлива в танках (запаса топлива и расходных), контроль приема-выдачи топлива"
      ]
    }
  },
  "en": {
    "title": "Package solutions for the fleet",
    "btnOrder": "Order a solution",
    "tabs": [
      {
        "title": "Pusher tug",
        "project": "TYPE OT-2400"
      },
      {
        "title": "Dry cargo ship",
        "project": "Project RSD59"
      },
      {
        "title": "Fishing vessel",
        "project": "Project 1440"
      },
      {
        "title": "Tanker",
        "project": "Project RST27/RST27M"
      }
    ],
    "complectation": {
      "title": "Комплектация",
      "items": [
        {
          "title": "Economy",
          "text": "Basic solution for shipowners"
        },
        {
          "title": "Comfort",
          "text": "The best combination of price and scope of equipment"
        },
        {
          "title": "Premium",
          "text": "Closes the entire list of shipowners' problems"
        }
      ]
    },
    "equipment": {
      "title": "Equipment",
      "items": [
        "Onboard controller",
        "Main engine<br>Flow meter Sekee FM20",
        "Main engine<br>Speed sensor - 2 pcs.",
        "Diesel Generator<br>Flow Meter Sekee FM10",
        "Diesel Generator<br>Run Relay"
      ]
    },
    "tasks": {
      "title": "Tasks to be solved",
      "items": [
        "Recording, storing and transferring data to the software through the onboard controller",
        "Control of fuel consumption of all consumers (main engines, diesel generators, boiler, fuel storage tanks)",
        "Control of the operating modes of the main engines",
        "Time control of diesel generators and boiler",
        "Fuel level control in tanks (fuel stock and consumables), control of fuel receiving and issuing"
      ]
    }
  }
}
</i18n>

<template>
  <main class="full-wide content solutions">
    <h1 class="title solutions__title">{{ $t('title') }}</h1>
    <ul class="solutions__tabs">
      <li v-for="(tab, index) in $t('tabs')" :key="index" class="solutions__tab">
        <button class="solutions-tab__btn" :class="{ 'active': activeTabIndex === +index }" @click="activeTabIndex = +index">
          <img :src="`/images/solutions/solutions${+index + 1}.png`" :alt="tab.title" class="solutions-tab__img">
          <span class="solutions-tab__title">{{ tab.title }}</span>
          <span class="solutions-tab__project">{{ tab.project }}</span>
        </button>
      </li>
    </ul>
    <div class="full-wide solutions__content">
      <div class="section-margin solutions__table desktop">
        <div class="solutions__row complectation">
          <div class="solutions__col">{{ $t('complectation.title') }}</div>
          <div v-if="winW < 1024" class="solutions__switchers">
            <button
              v-for="(item, index) in $t('complectation.items')"
              :key="index"
              class="btn btn-blue-outlined solutions__switcher"
              :class="{ 'active': activeComplectationIndex === +index }"
              @click="activeComplectationIndex = +index"
            >
              {{ item.title }}
            </button>
          </div>
          <template v-for="(item, index) in $t('complectation.items')">
            <div v-if="winW > 1023 || activeComplectationIndex === +index" :key="index" class="solutions__col">
              <div class="solutions-col__title">{{ item.title }}</div>
              <div class="solutions-col__text">{{ item.text }}</div>
              <button class="btn btn-blue-outlined solutions-col__btn">{{ $t('btnOrder') }}</button>
            </div>
          </template>
        </div>
        <div class="full-wide solutions__row grey equipment">
          <div class="solutions__col">
            {{ $t('equipment.title') }}
          </div>
        </div>
        <div v-for="(row, rowIndex) in $t('equipment.items')" :key="row" class="solutions__row white">
          <div class="solutions__col" v-html="row"/>
          <template v-for="(text, index) in tabs[activeTabIndex].equipment[rowIndex]">
            <div v-if="winW > 1023 || activeComplectationIndex === index" :key="index" class="solutions__col" v-html="text"/>
          </template>
        </div>
        <div class="full-wide solutions__row grey tasks">
          <div class="solutions__col">
            {{ $t('tasks.title') }}
          </div>
        </div>
        <div v-for="(row, rowIndex) in $t('tasks.items')" :key="row" class="solutions__row white">
          <div class="solutions__col" v-html="row"/>
          <template v-for="(text, index) in tabs[activeTabIndex].tasks[rowIndex]">
            <div v-if="winW > 1023 || activeComplectationIndex === index" :key="index" class="solutions__col" v-html="text"/>
          </template>
        </div>
      </div>
      <GeneralSmallBlueRow style="margin: 0;"/>
    </div>
  </main>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'SolutionsPage',
  data () {
    return {
      winW: null,
      activeTabIndex: 0,
      activeComplectationIndex: 0,
      tabs: [
        {
          equipment: [
            ['<span class="ok"/> 1 шт.', '<span class="ok"/> 1 шт.', '<span class="ok"/> 1 шт.'],
            ['<span class="no"/>', '<span class="ok"/> 4 шт.', '<span class="ok"/> 6 шт.'],
            ['<span class="no"/>', '<span class="ok"/> 2 шт.', '<span class="ok"/> 4 шт.'],
            ['<span class="no"/>', '<span class="ok"/> 2 шт.', '<span class="ok"/> 4 шт.'],
            ['<span class="no"/>', '<span class="ok"/> 2 шт.', '<span class="ok"/> 4 шт.']
          ],
          tasks: [
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>']
          ]
        },
        {
          equipment: [
            ['<span class="no"/>', '<span class="no"/>', '<span class="ok"/> 2 шт.'],
            ['<span class="no"/>', '<span class="no"/>', '<span class="ok"/> 2 шт.'],
            ['<span class="no"/>', '<span class="no"/>', '<span class="ok"/> 2 шт.'],
            ['<span class="no"/>', '<span class="no"/>', '<span class="ok"/> 2 шт.'],
            ['<span class="no"/>', '<span class="no"/>', '<span class="ok"/> 2 шт.']
          ],
          tasks: [
            ['<span class="no"/>', '<span class="no"/>', '<span class="no"/>'],
            ['<span class="no"/>', '<span class="no"/>', '<span class="no"/>'],
            ['<span class="no"/>', '<span class="no"/>', '<span class="no"/>'],
            ['<span class="no"/>', '<span class="no"/>', '<span class="no"/>'],
            ['<span class="no"/>', '<span class="no"/>', '<span class="no"/>']
          ]
        },
        {
          equipment: [
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>']
          ],
          tasks: [
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>']
          ]
        },
        {
          equipment: [
            ['<span class="ok"/> 1 шт.', '<span class="ok"/> 1 шт.', '<span class="ok"/> 1 шт.'],
            ['<span class="no"/>', '<span class="ok"/> 4 шт.', '<span class="ok"/> 6 шт.'],
            ['<span class="no"/>', '<span class="ok"/> 2 шт.', '<span class="ok"/> 4 шт.'],
            ['<span class="no"/>', '<span class="ok"/> 2 шт.', '<span class="ok"/> 4 шт.'],
            ['<span class="no"/>', '<span class="ok"/> 2 шт.', '<span class="ok"/> 4 шт.']
          ],
          tasks: [
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>'],
            ['<span class="ok"/>', '<span class="ok"/>', '<span class="ok"/>']
          ]
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.winW = window.innerWidth
      this.$nuxt.$on('win-resize', throttle(({ winW }) => {
        this.winW = winW
      }, 300))
    })
  }
}
</script>

<style lang="scss" scoped>
.solutions {
  padding-top: 22.2rem;
  background-color: var(--text-200);
  @include w1023 {
    padding-top: 17.8rem;
  }
  @include w767 {
    padding-top: 10.4rem;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__tabs {
    margin-bottom: 4rem;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.4rem;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w767 {
      grid-template-columns: repeat(4, 1fr);
      margin-right: calc(-1 * var(--container-padding));
      margin-left: calc(-1 * var(--container-padding));
      margin-bottom: 3rem;
      padding-right: var(--container-padding);
      padding-left: var(--container-padding);
      padding-bottom: 1rem;
      overflow-x: auto;
    }
  }
  &-tab {
    &__btn {
      width: 100%;
      height: 31.2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2.4rem;
      background: none;
      cursor: pointer;
      border: 0.1rem solid var(--text-300);
      border-radius: 1.6rem;
      @include w767 {
        width: 26rem;
      }
      &.active {
        border-color: var(--primary-blue);
        color: var(--primary-blue);
      }
    }
    &__img {
      margin-right: auto;
      margin-bottom: 4.5rem;
      margin-left: auto;
      mix-blend-mode: darken;
    }
    &__title {
      margin-bottom: 0.8rem;
      font-size: 2rem;
      line-height: 1.1;
      letter-spacing: -0.03em;
    }
    &__project {
      font-weight: 400;
      line-height: 1.12;
    }
  }
  &__content {
    padding-top: 8rem;
    padding-bottom: 8rem;
    background-color: var(--text-000);
    @include w1023 {
      padding-top: 4rem;
    }
  }
  &__table {
    border-bottom: 0.1rem solid var(--text-300);
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2.4rem;
    @include w1023 {
      display: flex;
      justify-content: space-between;
    }
    &.complectation {
      padding-bottom: 3.2rem;
      @include w1023 {
        display: block;
        padding-bottom: 4rem;
      }
      .solutions__col:first-child {
        padding-top: 1.1rem;
        @include w1023 {
          margin-bottom: 2.4rem;
          padding-top: 0;
          line-height: 1.33;
          font-size: 2.4rem;
        }
      }
    }
    &.grey {
      padding-top: 2.1rem;
      padding-bottom: 2.1rem;
      background-color: var(--text-200);
    }
    &.white {
      padding: 2.1rem 0;
      font-weight: 400;
      letter-spacing: normal;
      .solutions__col {
        &:first-child {
          max-width: 76%;
        }
      }
      & + & {
        border-top: 0.1rem solid var(--text-300);
      }
    }
  }
  &__switchers {
    display: flex;
    margin-bottom: 4rem;
    @include w767 {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  &__switcher {
    margin-right: 1.6rem;
    padding: 1.5rem 2.3rem;
    border-color: var(--text-300);
    font-size: 2rem;
    color: var(--text-400);
    @include hover {
      &:hover,
      &:focus {
        background-color: var(--text-000);
        border-color: var(--primary-blue);
      }
    }
    @include active {
      &:active {
        background-color: var(--text-000);
        border-color: var(--primary-blue);
      }
    }
    @include w767 {
      flex: 0 0 calc(50% - 0.8rem);
      margin-right: 0;
    }
    &:nth-child(3) {
      flex: 0 0 100%;
      margin-top: 1.6rem;
    }
    &.active {
      background-color: var(--primary-blue);
      border-color: var(--primary-blue);
      color: var(--text-000);
    }
  }
  &__col {
    position: relative;
    grid-column: span 3;

  }
  &-col {
    &__title {
      margin-bottom: 1.6rem;
      font-size: 4rem;
      line-height: 1.2;
      letter-spacing: -0.03em;
      @include w1023 {
        margin-bottom: 0.8rem;
        font-size: 2.4rem;
        line-height: 1.33;
      }
    }
    &__text {
      max-width: 19.3rem;
      margin-bottom: 3.2rem;
      color: var(--text-700);
      @include w1023 {
        max-width: none;
        margin-bottom: 0;
      }
      @include w767 {
        max-width: 20rem;
        margin-bottom: 2.4rem;
      }
    }
    &__btn {
      padding: 1.5rem 3.1rem;
      @include w1023 {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      @include w767 {
        position: static;
        width: 100%;
      }
    }
  }
}
</style>
