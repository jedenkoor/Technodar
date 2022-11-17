<i18n>
{
  "ru": {
    "tabs": {
      "title": "Подбор оборудования",
      "text": "Для спроектированных решений мы используем продукцию собственного производства",
      "hint": "Всё оборудование и отдельные его элементы соответствуют требовованиям контролирующих инстанций и регистров",
      "items": [
        "Расходомеры Sekee",
        "Датчики Sekee",
        "Контроллеры",
        "Бортовые компьютеры"
      ]
    },
    "accordions": [
      {
        "title": "Разработка проекта",
        "text": "После согласования технических заданий и обсуждения требований инженеры-проектировщики разрабатывают индивидуальный проект на выбранный объект."
      },
      {
        "title": "Техническая документация",
        "text": "После согласования технических заданий и обсуждения требований инженеры-проектировщики разрабатывают индивидуальный проект на выбранный объект."
      },
      {
        "title": "Согласование с контролирующими органами",
        "text": "После согласования технических заданий и обсуждения требований инженеры-проектировщики разрабатывают индивидуальный проект на выбранный объект."
      },
      {
        "title": "Реализация решения",
        "text": "После согласования технических заданий и обсуждения требований инженеры-проектировщики разрабатывают индивидуальный проект на выбранный объект."
      }
    ]
  },
  "en": {
    "tabs": {
      "title": "Equipment selection",
      "text": "For the designed solutions, we use products of our own production.",
      "hint": "All equipment and its individual elements comply with the requirements of regulatory authorities and registers",
      "items": [
        "Sekee flowmeters",
        "Sekee sensors",
        "Controllers",
        "On-board computers"
      ]
    },
    "accordions": [
      {
        "title": "Project development",
        "text": "After agreeing on technical specifications and discussing requirements, design engineers develop an individual project for the selected facility."
      },
      {
        "title": "Technical documentation",
        "text": "After agreeing on technical specifications and discussing requirements, design engineers develop an individual project for the selected facility."
      },
      {
        "title": "Coordination with regulatory authorities",
        "text": "After agreeing on technical specifications and discussing requirements, design engineers develop an individual project for the selected facility."
      },
      {
        "title": "Solution Implementation",
        "text": "After agreeing on technical specifications and discussing requirements, design engineers develop an individual project for the selected facility."
      }
    ]
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage"/>
    <GeneralGridSolutions :header="solutions"/>
    <GeneralSmallBlueRow :page="page"/>
    <section class="section-margin tabs">
      <div class="tabs__col">
        <h2 class="title tabs__title">{{ $t('tabs.title') }}</h2>
        <p class="tabs__text">{{ $t('tabs.text') }}</p>
        <ul class="tabs__btns">
          <li v-for="(item, index) in tabs" :key="index" class="tabs-btns__item">
            <button :class="['tabs__btn', { 'active': activeTabsIndex === index }]" @click="activeTabsIndex = index">
              <span class="icon">{{ `0${index + 1}` }}</span>
              {{ $t(`tabs.items[${index}]`) }}
            </button>
          </li>
        </ul>
        <div class="tabs__hint">
          <div class="icon tabs-hint__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 1.5C5.05964 1.5 4.5 2.05964 4.5 2.75L4.5 20.75C4.5 21.4404 5.05964 22 5.75 22H17.75C18.4404 22 19 21.4404 19 20.75V8.5H14.75C13.2312 8.5 12 7.26878 12 5.75V1.5L5.75 1.5ZM13.5 2.56066L17.9393 7L14.75 7C14.0596 7 13.5 6.44036 13.5 5.75V2.56066ZM3 2.75C3 1.23122 4.23122 0 5.75 0L12.75 0C12.9489 0 13.1397 0.0790176 13.2803 0.21967L20.2803 7.21967C20.421 7.36032 20.5 7.55109 20.5 7.75L20.5 20.75C20.5 22.2688 19.2688 23.5 17.75 23.5H5.75C4.23122 23.5 3 22.2688 3 20.75L3 2.75ZM8 13.75C8 13.3358 8.33579 13 8.75 13H11.75C12.1642 13 12.5 13.3358 12.5 13.75C12.5 14.1642 12.1642 14.5 11.75 14.5H8.75C8.33579 14.5 8 14.1642 8 13.75ZM8 17.75C8 17.3358 8.33579 17 8.75 17H14.75C15.1642 17 15.5 17.3358 15.5 17.75C15.5 18.1642 15.1642 18.5 14.75 18.5H8.75C8.33579 18.5 8 18.1642 8 17.75Z" fill="black"/>
            </svg>
          </div>
          <p class="tabs-hint__text">{{ $t('tabs.hint') }}</p>
        </div>
      </div>
      <div class="tabs__col">
        <ProductionSliderOneItemGreyBackground :page="tabs[activeTabsIndex].page" :slider="tabs[activeTabsIndex].slides"/>
      </div>
    </section>
    <hr class="section-margin">
    <GeneralBigImageWithLeftTitle class="section-margin engineering" :promo="promo"/>
    <section class="full-wide accordions">
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
    <div class="full-wide hr"><hr></div>
    <GeneralForm/>
    <ProductionOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'EngineeringPage',
  data () {
    return {
      page: 'engineering',
      activeTabsIndex: 0,
      activeAccordionIndex: null,
      bannerImage: '/images/production/engineering-banner.jpg',
      solutions: {
        title: 'Выбор решения',
        text: 'Когда наши проектировщики собирают всю необходимую информацию об объекте, они определяют ключевые задачи и предлагают несколько вариантов их решения'
      },
      tabs: [
        {
          page: 'flowmeters',
          slides: [
            {
              image: '/images/production/sensor1.png',
              title: 'Sekee FM10',
              info: ''
            },
            {
              image: '/images/production/sensor2.png',
              title: 'Sekee FM101010',
              info: ''
            }
          ]
        },
        {
          page: 'sensors',
          slides: [
            {
              image: '/images/production/flowmeters1.png',
              title: 'Sekee FM5',
              info: ''
            }
          ]
        },
        {
          page: 'controllers',
          slides: [
            {
              image: '/images/production/controllers1.png',
              title: 'Sekee FM5',
              info: ''
            }
          ]
        },
        {
          page: 'sensors',
          slides: [
            {
              image: '/images/production/sensor1.png',
              title: 'Sekee FM5',
              info: ''
            },
            {
              image: '/images/production/sensor2.png',
              title: 'Sekee FM5555',
              info: ''
            }
          ]
        }
      ],
      promo: {
        image: '/images/production/engineering-promo.jpg',
        title: 'production.engineering.promo.title',
        text: 'production.engineering.promo.text'
      }
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
.hr {
  background-color: var(--text-200);
}
.tabs {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.2rem));
  grid-gap: 2.4rem;
  @include w1199 {
    grid-template-columns: 100%;
    grid-gap: 4rem;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  &__text {
    max-width: 44rem;
    margin-bottom: 4rem;
    @include w1023 {
      max-width: none;
    }
  }
  &__btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
    margin-bottom: 4rem;
    padding-left: 0;
    list-style: none;
    @include w1023 {
      margin-bottom: 2.4rem;
    }
    @include w767 {
      grid-template-columns: auto;
      grid-gap: 1.6rem;
      margin-bottom: 4rem;
    }
  }
  &__btn {
    position: relative;
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.3rem;
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem;
    background: none;
    font-weight: 450;
    color: var(--text-1000);
    letter-spacing: -0.03em;
    cursor: pointer;
    transition: 0.2s;
    @include hover {
      &:hover,
      &:focus {
        color: var(--primary-blue);
        span {
          border-color: var(--primary-blue);
        }
      }
    }
    @include active {
      &:active {
        color: var(--primary-blue);
        span {
          border-color: var(--primary-blue);
        }
      }
    }
    &.active {
      background-color: var(--primary-blue);
      color: var(--text-000);
      span {
        border-color: var(--text-000);
      }
    }
    span {
      color: currentColor;
      transition: border-color 0.2s;
    }
  }
  &__hint {
    display: flex;
    align-items: center;
    padding: 2.3rem;
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem;
    @include w767 {
      flex-direction: column;
    }
  }
  &-hint {
    &__icon {
      margin-right: 1.6rem;
      @include w767 {
        margin-right: 0;
        margin-bottom: 1.6rem;
      }
    }
    &__text {
      @include w767 {
        text-align: center;
        font-size: 1.4rem;
        line-height: 1.71;
        letter-spacing: normal;
      }
    }
  }
}
.accordions {
  padding-top: 4rem;
  padding-bottom: 8rem;
  background-color: var(--text-200);
  @include w1199 {
    padding-bottom: 4rem;
  }
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
      margin: 0;
      font-weight: 450;
      font-size: 2.4rem;
      letter-spacing: -0.03em;
      color: var(--text-1000);
      transition: color 0.2s;
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
      transition: height 0.3s;
      color: var(--text-700);
      pointer-events: none;
      @include w1023 {
        max-width: 90%;
      }
      @include w767 {
        max-width: none;
        font-size: 1.4rem;
        line-height: 1.71;
        letter-spacing: normal;
      }
    }
  }
}
</style>
