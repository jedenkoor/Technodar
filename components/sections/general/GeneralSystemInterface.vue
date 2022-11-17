<i18n>
{
  "ru": {
    "btnNext": "Далее",
    "btnClose": "Закрыть",
    "bunkering": {
      "title": "Контроль в режиме реального времени",
      "text": "Пока суда находятся в рейсе, вы уже будете знать текущий расход топлива и сможете определить дату следующей бункеровки",
      "items": [
        {
          "title": "Все под контролем",
          "text": "Сверяйте массу с заявленной в журнале приема в режиме онлайн"
        },
        {
          "title": "Заголовок 2",
          "text": "Текст 2"
        }
      ]
    },
    "reserve": {
      "title": "Интерфейс системы",
      "items": [
        {
          "title": "Вы увидите",
          "text": "Система сообщит, если показатели упадут ниже нормы"
        },
        {
          "title": "Заголовок 2",
          "text": "Текст 2"
        }
      ]
    },
    "crab": {
      "title": "Интерфейс системы",
      "items": [
        {
          "title": "Оперативно",
          "text": "Если температура превысит норму, вы это увидите"
        },
        {
          "title": "Заголовок 2",
          "text": "Текст 2"
        }
      ]
    },
    "analytics": {
      "title": "Интерфейс системы",
      "items": [
        {
          "title": "Точно по маршруту",
          "text": "Местоположение обновляется в режиме реального времени"
        },
        {
          "title": "Заголовок 2",
          "text": "Текст 2"
        }
      ]
    },
    "reports": {
      "title": "В каком формате будет представлена информация в отчетах?",
      "items": [
        {
          "title": "За период",
          "text": "Статистика за выбранные даты всегда перед глазами"
        },
        {
          "title": "Заголовок 2",
          "text": "Текст 2"
        }
      ]
    },
    "monitoring": {
      "title": "Оптимизируйте вашу транспортную сеть и снизьте издержки на ее обслуживание с помощью системы DOTS",
      "items": [
        {
          "title": "Контроль объема",
          "text": "Контролируйте объемы поставляемого топлива с заявленными в накладной"
        },
        {
          "title": "Заголовок 2",
          "text": "Текст 2"
        }
      ]
    }
  },
  "en": {
    "btnNext": "Next",
    "btnClose": "Close",
    "bunkering": {
      "title": "Real time control",
      "text": "While the vessels are on the voyage, you will already know the current fuel consumption and will be able to determine the date of the next bunkering",
      "items": [
        {
          "title": "Everything's under control",
          "text": "Check the weight with the one stated in the admission log online"
        },
        {
          "title": "Title 2",
          "text": "Text 2"
        }
      ]
    },
    "reserve": {
      "title": "System Interface",
      "items": [
        {
          "title": "You will see",
          "text": "The system will report if the indicators fall below the norm"
        },
        {
          "title": "Title 2",
          "text": "Text 2"
        }
      ]
    },
    "crab": {
      "title": "System Interface",
      "items": [
        {
          "title": "Promptly",
          "text": "If the temperature exceeds the norm, you will see it"
        },
        {
          "title": "Title 2",
          "text": "Title 2"
        }
      ]
    },
    "analytics": {
      "title": "System Interface",
      "items": [
        {
          "title": "Right on route",
          "text": "Location updated in real time"
        },
        {
          "title": "Title 2",
          "text": "Text 2"
        }
      ]
    },
    "reports": {
      "title": "In what format will the information be presented in the reports?",
      "items": [
        {
          "title": "For the period",
          "text": "Statistics for the selected dates are always in front of your eyes"
        },
        {
          "title": "Title 2",
          "text": "Text 2"
        }
      ]
    },
    "monitoring": {
      "title": "Optimize your transport network and reduce maintenance costs with DOTS",
      "items": [
        {
          "title": "Volume control",
          "text": "Control the volumes of supplied fuel with those stated in the invoice"
        },
        {
          "title": "Title 2",
          "text": "Text 2"
        }
      ]
    }
  }
}
</i18n>

<template>
  <section class="section-margin interface">
    <h2 class="title interface__title">{{ $t(`${page}.title`) }}</h2>
    <p v-if="page === 'bunkering'" class="interface__text">{{ $t(`${page}.text`) }}</p>
    <div ref="container" class="interface__slides shadow">
      <img class="interface__bg" :src="slides[activeSlide].image" :alt="$t(`${page}.title`)">
      <img
        ref="focus"
        class="interface__focus"
        :src="slides[activeSlide].focusImage"
        :alt="$t(`${page}.title`)"
        :style="`top: ${slides[activeSlide].focusImageTop}; left: ${slides[activeSlide].focusImageLeft}; width: ${slides[activeSlide].focusImageWidth}`"
      >
      <div
        ref="hint"
        class="interface__navigations"
        :style="`${slides[activeSlide].hintPositionVertical}: 4rem; ${slides[activeSlide].hintPositionHorizontal}: 4rem;`"
      >
        <div class="interface-navigations__title">{{ $t(`${page}.items[${activeSlide}].title`) }}</div>
        <div class="interface-navigations__text">{{ $t(`${page}.items[${activeSlide}].text`) }}</div>
        <button class="btn btn-blue-filled interface-navigations__btn" @click="slideChange()">
          <span v-if="activeSlide + 1 < slides.length">{{ $t('btnNext') }}</span>
          <span v-else>{{ $t('btnClose') }}</span>
        </button>
        <div class="interface__numbers">
          <span class="interface-numbers__num interface-numbers__num--current">{{ `${activeSlide + 1}`.padStart(2, '0') }}</span>
          <span class="interface-numbers__num interface-numbers__num--all">{{ `${slides.length}`.padStart(2, '0') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GeneralSystemInterface',
  props: {
    page: {
      type: String,
      default: ''
    },
    slides: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeSlide: 0
    }
  },
  methods: {
    slideChange () {
      if (this.activeSlide + 1 < this.slides.length) {
        this.activeSlide++
      } else {
        this.$refs.focus.style.display = 'none'
        this.$refs.hint.style.display = 'none'
        this.$refs.container.classList.remove('shadow')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.interface {
  &__title {
    max-width: 90rem;
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__text {
    margin-top: -2rem;
    margin-bottom: 4rem;
    color: var(--text-700);
  }
  &__slides {
    position: relative;
    z-index: 2;
    border-radius: 1.8rem;
    overflow: hidden;
    @include w767 {
      height: 45.6rem;
    }
    &.shadow {
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  &__bg {
    position: relative;
    z-index: -2;
    width: 100%;
    @include w767 {
      height: 100%;
      object-fit: cover;
    }
  }
  &__focus {
    position: absolute;
    border-radius: 1.8rem;
    @include w1023 {
      display: none;
    }
  }
  &__navigations {
    display: block;
    position: absolute;
    z-index: 2;
    background-color: var(--text-000);
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    width: 39.6rem;
    padding: 3.1rem;
    @include w1023 {
      top: 2rem!important;
      right: 2rem!important;
      bottom: auto!important;
      left: auto!important;
    }
    @include w767 {
      top: 0!important;
      right: 0!important;
      bottom: auto!important;
      left: auto!important;
      width: 100%;
      padding: 2.3rem;
    }
  }
  &-navigations {
    &__title {
      margin-bottom: 1.6rem;
      font-size: 2rem;
      line-height: 1.1;
    }
    &__text {
      margin-bottom: 3.2rem;
      color: var(--text-700);
    }
    &__btn {
      padding: 1.2rem 2.4rem;
      font-size: 1.4rem;
      line-height: 1.14;
    }
  }
  &__numbers {
    position: absolute;
    right: 3.2rem;
    bottom: 3.2rem;
    padding: 1.1rem 0;
    border: 0.1rem solid var(--text-300);
    border-radius: 3.2rem;
    display: flex;
    @include w767 {
      right: 2.4rem;
      bottom: 2.4rem;
    }
  }
  &-numbers {
    &__num {
      font-size: 1.4rem;
      line-height: 1.14;
      &--current {
        width: 5rem;
        padding-left: 2rem;
        border-right: 0.1rem solid var(--text-300);
        color: var(--text-900);
      }
      &--all {
        padding: 0 1.9rem 0 1.6rem;
        color: var(--text-300);
      }
    }
  }
}
</style>
