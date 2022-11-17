<i18n>
{
  "ru": {
    "btn": "Записаться на консультацию",
    "production": {
      "title": "Собственный производственный отдел позволит реализовать проект любой сложности",
      "text": "Отечественное производство по технологиям мировых компаний"
    },
    "engineering": {
      "title": "Проектный отдел",
      "text": "Опытные инженеры-проектировщики получают все требования к системе и проектируют техническое решение"
    },
    "service": {
      "title": "Монтаж на объектах любой сложности и комплексное обслуживание проектов",
      "text": "Устанавливаем оборудование в соответствии с правилами Речного регистра и Российского морского регистра судоходства"
    },
    "scrt": {
      "title": "Контролируйте операции с топливом с помощью системы контроля расхода и запаса",
      "text": "Сократите расходы до 30%, используя эффективное решение с гарантией качества"
    },
    "bunkering": {
      "title": "Получайте реальные данные о поставке топлива на судно",
      "text": "Предотвратите хищение горюче-смазочных материалов с помощью системы контроля бункеровки"
    },
    "reserve": {
      "title": "Система измерения запасов топлива на судне от ГК Технодар",
      "text": "Бюджетное многофункциональное решение для экипажа и судовладельца"
    },
    "refrigerator": {
      "title": "Мониторинг и контроль рефрижераторных установок",
      "text": "Многофункциональное решение для мониторинга и контроля температуры в охлаждаемых трюмах и рефрежираторных установках"
    },
    "crab": {
      "title": "Контроль живого краба",
      "text": "Многофункциональное решение для мониторинга и контроля температуры и кислородосодержания при транспортировке живого краба"
    },
    "development": {
      "title": "Лёгкая визуализация и аналитика данных",
      "text": "Следите за ключевыми показателями в реальном времени из любой точки мира"
    },
    "analytics": {
      "title": "Легкая визуализация и аналитика данных",
      "text": "Следите за ключевыми показателями и операциями с топливом в реальном времени из любой точки мира"
    },
    "cctv": {
      "title": "Система видеонаблюдения для контроля персонала",
      "text": "Фиксируйте возникающие проблемы на камеру и контролируйте поведение персонала во время исполнения служебных обязанностей"
    },
    "reports": {
      "title": "Настраиваемые отчеты с автоматизацией и выгрузкой в один клик",
      "text": "Следите за ключевыми показателями и операциями с топливом в реальном времени из любой точки мира"
    },
    "monitoring": {
      "title": "Мониторинг судов в реальном времени",
      "text": "Отслеживание и контроль маршрута кораблей с помощью ГЛОНАСС/GPS-системы от ГК Технодар"
    },
    "alarm": {
      "title": "Оперативно реагируйте на отклонения от нормы с помощью системы звукового оповещения",
      "text": "Дополнительный инструмент, который значительно упростит контроль за топливом"
    }
  },
  "en": {
    "btn": "Sign up for a consultation",
    "production": {
      "title": "Own production department will allow you to implement a project of any complexity",
      "text": "Domestic production based on the technologies of world companies"
    },
    "engineering": {
      "title": "Project department",
      "text": "Experienced design engineers receive all system requirements and design a technical solution"
    },
    "service": {
      "title": "Installation at facilities of any complexity and comprehensive project maintenance",
      "text": "We install equipment in accordance with the rules of the River Register and the Russian Maritime Register of Shipping"
    },
    "scrt": {
      "title": "Control your fuel management with the fuel consumption and inventory control system",
      "text": "Reduce costs by up to 30% with an efficient solution with quality assurance"
    },
    "bunkering": {
      "title": "Get real data on the supply of fuel to the vessel",
      "text": "Prevent theft of fuels and lubricants with a bunker control system"
    },
    "reserve": {
      "title": "The system for measuring fuel reserves on a ship from Technodar Group of Companies",
      "text": "Budget multifunctional solution for crew and shipowner"
    },
    "refrigerator": {
      "title": "Monitoring and control of refrigeration plants",
      "text": "Multifunctional solution for temperature monitoring and control in refrigerated holds and refrigeration units"
    },
    "crab": {
      "title": "Live crab control",
      "text": "Multifunctional solution for monitoring and control of temperature and oxygen content during the transportation of live crab"
    },
    "development": {
      "title": "Easy visualization and data analytics",
      "text": "Monitor key metrics in real time from anywhere in the world"
    },
    "analytics": {
      "title": "Easy visualization and data analytics",
      "text": "Monitor key metrics and fuel transactions in real time from anywhere in the world"
    },
    "cctv": {
      "title": "Video surveillance system for personnel control",
      "text": "Capture emerging problems on camera and control the behavior of staff during the performance of their duties"
    },
    "reports": {
      "title": "Customizable reports with automation and one-click download",
      "text": "Monitor key metrics and fuel transactions in real time from anywhere in the world"
    },
    "monitoring": {
      "title": "Real-time ship monitoring",
      "text": "Tracking and control of the route of ships using GLONASS / GPS-system from Technodar Group of Companies"
    },
    "alarm": {
      "title": "Respond quickly to deviations from the norm with the help of an audible warning system",
      "text": "An additional tool that will greatly simplify fuel control"
    }
  }
}
</i18n>

<template>
  <section class="section-margin full-wide banner">
    <div class="banner__content">
      <img class="banner__img" :src="image" :alt="$t(`${page}.title`)">
      <div class="banner__top">
        <h1 v-if="page !== 'production'" class="title banner__title">{{ $t(`${page}.title`) }}</h1>
        <h2 v-else class="title banner__title">{{ $t(`${page}.title`) }}</h2>
        <p class="banner__text">{{ $t(`${page}.text`) }}</p>
      </div>
      <button class="btn btn-blue-filled banner__btn">
        {{ $t('btn') }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GeneralBannerWithGreyGradient',
  props: {
    page: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 64rem;
  padding-top: 22.2rem;
  padding-bottom: 8rem;
  background-color: var(--text-200);
  @include w1023 {
    height: 51.2rem;
    padding-top: 12rem;
    padding-bottom: 7rem;
  }
  @include w767 {
    height: 56rem;
    padding-top: 8.4rem;
    padding-bottom: 2rem;
  }
  &.production {
    @include w1023 {
      height: 54.2rem;
    }
    @include w767 {
      height: 62.8rem;
      padding-top: 8.4rem;
      padding-bottom: 8.8rem;
    }
    .banner__text {
      max-width: 34rem;
    }
  }
  &.service {
    margin-bottom: 2.4rem;
    @include w767 {
      margin-bottom: 1.6rem;
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--text-200) 0%, var(--text-200) 43%, rgba(196, 196, 196, 0) 100%);
    pointer-events: none;
    @include w767 {
      display: none;
    }
  }
  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    @include w767 {
      position: relative;
      border-radius: 1.6rem;
      overflow: hidden;
    }
    &:before {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: none;
      pointer-events: none;
      background: var(--text-000);
      opacity: 0.35;
      @include w767 {
        display: block;
      }
    }
  }
  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 66.66%;
    height: 100%;
    object-fit: cover;
    @include w767 {
      width: 100%;
      height: 59%;
    }
  }
  &__top {
    @include w767 {
      padding: 3.2rem 1.6rem;
      background: #FFFFFF;
      border-radius: 1.6rem;
    }
  }
  &__top,
  &__btn {
    position: relative;
    z-index: 2;
  }
  &__title {
    max-width: 66rem;
    margin-top: 0;
    margin-bottom: 2rem;
    @include w1023 {
      max-width: 53rem;
    }
    @include w767 {
      margin-bottom: 1.6rem;
    }
  }
  &__text {
    max-width: 48.3rem;
    font-weight: 450;
    color: var(--text-700);
    @include w1199 {
      max-width: 39rem;
    }
  }
  &__btn {
    margin-top: auto;
    padding: 1.6rem 3.2rem;
    @include w767 {
      width: calc(100% - 3.2rem);
      margin-right: 1.6rem;
      margin-bottom: 1.6rem;
      margin-left: 1.6rem;
      border-radius: 1.6rem;
      padding: 1.6rem 0;
    }
  }
}
</style>
