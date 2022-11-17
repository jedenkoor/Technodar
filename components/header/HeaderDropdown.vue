<i18n>
{
  "ru": {
    "lk": "Вход",
    "dropdownMenu": [
      {
        "title": "Производство",
        "inside": [
          "Производство",
          "Проектирование",
          "Монтаж и сервис",
          "Контроль расходов",
          "Контроль бункеровки",
          "Измерение запасов",
          "Контроль рефрижераторов",
          "Контроль крабов"
        ]
      },
      {
        "title": "Разработка",
        "inside": [
          "DOTS и VMTS",
          "Визуализация и аналитика",
          "Видеонаблюдение",
          "Автоматизированные отчеты",
          "Мониторинг",
          "Звуковое оповещение"
        ]
      },
      {
        "title": "Отраслевые решения",
        "inside": [
          "Флот",
          "Ж/д транспорт",
          "Автотранспорт",
          "Буровые установки"
        ]
      },
      {
        "title": "Компания",
        "inside": [
          "О нас",
          "Пресс-центр",
          "Карьера",
          "Команда",
          "Отзывы",
          "Контакты",
          "Сертификаты",
          "Материалы для прессы"
        ]
      },
      {
        "title": "Кейсы"
      },
      {
        "title": "Коробочные решения"
      },
      {
        "title": "Калькулятор экономии"
      }
    ],
    "squares": [
      {
        "title": "Бесплатная консультация",
        "bot": "Получить консультацию"
      },
      {
        "title": "Онлайн демонстрация",
        "bot": "Смотреть демонстрацию"
      }
    ]
  },
  "en": {
    "lk": "Login",
    "dropdownMenu": [
      {
        "title": "Production",
        "inside": [
          "Production",
          "Design",
          "Installation and service",
          "Cost control",
          "Bunker control",
          "Inventory measurement",
          "Refrigerator control",
          "Crab control"
        ]
      },
      {
        "title": "Development",
        "inside": [
          "DOTS and VMTS",
          "Visualization and analytics",
          "CCTV",
          "Automated reports",
          "Monitoring",
          "Sound notification"
        ]
      },
      {
        "title": "Industry Solutions",
        "inside": [
          "Fleet",
          "Railway transport",
          "Motor transport",
          "Drilling rigs"
        ]
      },
      {
        "title": "Company",
        "inside": [
          "About us",
          "Press center",
          "Career",
          "Team",
          "Reviews",
          "Contacts",
          "Certificates",
          "Press materials"
        ]
      },
      {
        "title": "Cases"
      },
      {
        "title": "Boxed solutions"
      },
      {
        "title": "Savings calculator"
      }
    ],
    "squares": [
      {
        "title": "Free consultation",
        "bot": "To get the consultation"
      },
      {
        "title": "Online demo",
        "bot": "Watch demo"
      }
    ]
  }
}
</i18n>

<template>
  <transition name="slideDown">
    <div class="header__dropdown" v-if="value">
      <div class="header-dropdown__row">
        <a class="header__lk" href="#">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 2.75C12.3244 2.75 9.75 5.32436 9.75 8.5C9.75 9.16446 9.8624 9.80107 10.0686 10.3928L10.2235 10.8372L2.82322 18.2374C2.77634 18.2843 2.75 18.3479 2.75 18.4142V21C2.75 21.1381 2.86193 21.25 3 21.25H5.58579C5.65209 21.25 5.71568 21.2237 5.76256 21.1768L6.88388 20.0555C7.1183 19.821 7.25 19.5031 7.25 19.1716V18C7.25 17.0335 8.0335 16.25 9 16.25H11.5858C11.6521 16.25 11.7157 16.2237 11.7626 16.1768L13.8997 14.0397L14.298 14.1243C14.685 14.2066 15.087 14.25 15.5 14.25C18.6756 14.25 21.25 11.6756 21.25 8.5C21.25 5.32436 18.6756 2.75 15.5 2.75ZM8.25 8.5C8.25 4.49594 11.4959 1.25 15.5 1.25C19.5041 1.25 22.75 4.49594 22.75 8.5C22.75 12.5041 19.5041 15.75 15.5 15.75C15.1245 15.75 14.7553 15.7214 14.3945 15.6661L12.8232 17.2374C12.495 17.5656 12.0499 17.75 11.5858 17.75H9C8.86193 17.75 8.75 17.8619 8.75 18V19.1716C8.75 19.9009 8.46027 20.6004 7.94454 21.1161L6.82322 22.2374C6.49503 22.5656 6.04991 22.75 5.58579 22.75H3C2.0335 22.75 1.25 21.9665 1.25 21V18.4142C1.25 17.9501 1.43438 17.505 1.76256 17.1768L8.50978 10.4296C8.34035 9.8145 8.25 9.16729 8.25 8.5ZM17.5303 6.46967C17.8232 6.76256 17.8232 7.23744 17.5303 7.53033L16.5303 8.53033C16.2374 8.82322 15.7626 8.82322 15.4697 8.53033C15.1768 8.23744 15.1768 7.76256 15.4697 7.46967L16.4697 6.46967C16.7626 6.17678 17.2374 6.17678 17.5303 6.46967Z" fill="currentColor"/>
          </svg>
          {{ $t('lk') }}
        </a>
        <CommonLocales/>
      </div>
      <ul class="header-dropdown__directions">
        <li v-for="(item, index) in dropdown" :key="index">
          <nuxt-link v-if="!item.inside" class="header-dropdown__direction" :to="`/${$i18n.locale}/${item.link}`">
            {{ $t(`dropdownMenu[${index}].title`) }}
          </nuxt-link>
          <button v-else :class="['header-dropdown__direction', { 'active': index === activeIndex }]" @click="changeActiveIndex(index)">
            {{ $t(`dropdownMenu[${index}].title`) }}
            <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.71436 5L6.71436 9L10.7144 5" stroke="currentColor"/>
            </svg>
          </button>
          <ul v-if="item.inside && index === activeIndex && winW < 768" class="header-dropdown__submenu">
            <li v-for="(subItem, subIndex) in item.inside" :key="$t(`dropdownMenu[${activeIndex}].inside[${subIndex}]`)" class="header-dropdown__subitem">
              <nuxt-link :to="`/${$i18n.locale}/${subItem.link}`" class="header-dropdown__sublink">
                {{ $t(`dropdownMenu[${activeIndex}].inside[${subIndex}]`) }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul v-if="winW > 767" class="header-dropdown__links">
        <li v-for="(item, index) in dropdown[activeIndex].inside" :key="index">
          <nuxt-link class="header-dropdown__link" :to="`/${$i18n.locale}/${item.link}`">
            {{ $t(`dropdownMenu[${activeIndex}].inside[${index}]`) }}
          </nuxt-link>
        </li>
      </ul>
      <div class="header-dropdown__contacts">
        <CommonLocales/>
        <a class="header-dropdown__contact" href="tel:8 800 250-00-16">8 800 250-00-16</a>
        <a class="header-dropdown__contact" href="mailto:info@skrt.biz">info@skrt.biz</a>
        <CommonSocials/>
      </div>
      <ul class="header-dropdown__squares">
        <li>
          <button class="header-dropdown__square" @click.prevent="openCallback">
            <img src="/images/square.png" :alt="$t(`squares[0].title`)">
            <span class="header-dropdown-square__title">{{ $t(`squares[0].title`) }}</span>
            <span class="header-dropdown-square__bot">
              {{ $t(`squares[0].bot`) }}
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L6.35355 6.35355L6.70711 6L6.35355 5.64645L6 6ZM2.35355 10.3536L6.35355 6.35355L5.64645 5.64645L1.64645 9.64645L2.35355 10.3536ZM6.35355 5.64645L2.35355 1.64645L1.64645 2.35355L5.64645 6.35355L6.35355 5.64645Z" fill="white"/>
              </svg>
            </span>
          </button>
        </li>
        <li>
          <button class="header-dropdown__square" @click.prevent="openDemonstration">
            <img src="/images/square.png" :alt="$t(`squares[1].title`)">
            <span class="header-dropdown-square__title">{{ $t(`squares[1].title`) }}</span>
            <span class="header-dropdown-square__bot">
              {{ $t(`squares[1].bot`) }}
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L6.35355 6.35355L6.70711 6L6.35355 5.64645L6 6ZM2.35355 10.3536L6.35355 6.35355L5.64645 5.64645L1.64645 9.64645L2.35355 10.3536ZM6.35355 5.64645L2.35355 1.64645L1.64645 2.35355L5.64645 6.35355L6.35355 5.64645Z" fill="white"/>
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'HeaderDropdown',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      winW: null,
      activeIndex: 0,
      dropdown: [
        {
          inside: [
            { link: 'production/sensors' },
            { link: 'engineering' },
            { link: 'service' },
            { link: 'scrt' },
            { link: 'bunkering' },
            { link: 'reserve' },
            { link: 'refrigerator' },
            { link: 'crab' }
          ]
        },
        {
          inside: [
            { link: 'development/vmts' },
            { link: 'analytics' },
            { link: 'cctv' },
            { link: 'reports' },
            { link: 'monitoring' },
            { link: 'alarm' }
          ]
        },
        {
          inside: [
            { link: 'fleet' },
            { link: 'railroad' },
            { link: 'auto' },
            { link: 'rig' }
          ]
        },
        {
          inside: [
            { link: 'about' },
            { link: 'blog' },
            { link: 'careers' },
            { link: 'team' },
            { link: 'reviews' },
            { link: 'contacts' },
            { link: 'certification' },
            { link: 'press' }
          ]
        },
        { link: 'cases' },
        { link: 'solutions' },
        { link: '#' }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.winW = window.innerWidth
      this.$nuxt.$on('win-resize', throttle(({ winW }) => {
        if (winW > 767 && this.activeIndex === null) {
          this.activeIndex = 0
        }
        this.winW = winW
      }, 300))
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('win-resize')
  },
  methods: {
    changeActiveIndex (index) {
      if (window.innerWidth < 768 && this.activeIndex === index) {
        this.activeIndex = null
      } else {
        this.activeIndex = index
      }
    },
    openCallback () {
      this.$store.commit('popup/updateCallback', !this.$store.state.popup.typeCallback)
      this.$emit('input', false)
    },
    openDemonstration () {
      this.$store.commit('popup/updateDemonstration', !this.$store.state.popup.typeDemonstration)
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__dropdown {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: -1;
    width: 100%;
    max-height: calc(100vh - 24rem);
    border-radius: 0 0 1.6rem 1.6rem;
    background-color: var(--text-000);
    display: grid;
    grid-template-columns: 24.3% 24.3% 1fr;
    grid-template-rows: auto 1fr;
    overflow-y: auto;
    @include w1366 {
      grid-template-columns: 21% 21% 1fr;
    }
    @include w1199 {
      grid-template-columns: 1fr 1fr;
    }
    @include w767 {
      grid-template-columns: 100%;
      max-height: calc(100vh - 10.5rem);
    }
    &::-webkit-scrollbar {
      width: 0.6rem;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary-blue);
      border-radius: 0.6rem;
    }
    &::-webkit-scrollbar-track {
      background: var(--text-000);
    }
  }
  &-dropdown {
    &__row {
      display: none;
      @include w767 {
        display: flex;
      }
      .header__lk {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 50%;
        padding: 2rem 0;
        border-right: 0.1rem solid var(--text-200);
        line-height: 1.12;
        font-weight: 450;
        letter-spacing: normal;
        @include active {
          &:active {
            color: var(--primary-shadow);
          }
        }
        svg {
          width: 2.4rem;
          display: block;
          margin-right: 0.8rem;
        }
      }
      .header__locales {
        @include w767 {
          display: flex;
          margin-left: 2.4rem;
        }
        @include w359 {
          margin-left: 1.6rem;
        }
      }
    }
    &__directions,
    &__links {
      grid-row: 1 / 3;
      padding-left: 0;
      list-style: none;
      border-right: 0.1rem solid var(--text-200);
      @include w1199 {
        grid-row: auto;
        border-bottom: 0.1rem solid var(--text-200);
      }
      @include w767 {
        border-right: none;
      }
    }
    &__directions {
      > li + li {
        border-top: 0.1rem solid var(--text-200);
      }
    }
    &__links {
      padding: 3.2rem;
      @include w1199 {
        border-right: none;
      }
      li + li {
        margin-top: 3.2rem;
      }
    }
    &__direction {
      width: 100%;
      height: 6.4rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 3.2rem;
      background: none;
      border: none;
      font-weight: 450;
      letter-spacing: -0.03em;
      line-height: 1.12;
      text-align: left;
      cursor: pointer;
      @include hover {
        &:hover:not(.active) {
          color: var(--primary-blue);
          svg {
            transform: rotate(-90deg) translateY(1.5rem);
            @include w767 {
              transform: translateY(-0.2rem);
            }
          }
        }
      }
      @include active {
        &:active:not(.active) {
          color: var(--primary-blue);
          svg {
            transform: rotate(-90deg) translateY(1.5rem);
            @include w767 {
              transform: translateY(-0.2rem);
            }
          }
        }
      }
      @include w767 {
        padding: 0 2rem;
      }
      svg {
        margin-left: auto;
        width: 2.4rem;
        transform: rotate(-90deg);
        transition: transform 0.2s;
        @include w767 {
          transform: translateY(-0.2rem);
        }
      }
      &.active {
        color: var(--text-000);
        background-color: var(--primary-blue);
        svg {
          @include w767 {
            transform: translateY(0.2rem) scale(-1);
          }
        }
      }
    }
    &__submenu {
      padding: 2.4rem 2rem;
      list-style: none;
    }
    &__subitem {
      & + & {
        margin-top: 2.4rem;
      }
    }
    &__sublink {
      width: fit-content;
      display: flex;
      font-weight: 450;
      color: var(--text-700);
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
        }
        &:active {
          color: var(--primary-shadow);
        }
      }
      @include active {
        &:active {
          color: var(--primary-shadow);
        }
      }
    }
    &__link {
      width: fit-content;
      display: flex;
      font-weight: 450;
      line-height: 1.12;
      letter-spacing: -0.03em;
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
        }
        &:active {
          color: var(--primary-shadow);
        }
      }
      @include active {
        &:active {
          color: var(--primary-shadow);
        }
      }
    }
    &__contacts {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 3.2rem;
      padding: 3.2rem 0;
      border-bottom: 0.1rem solid var(--text-200);
      @include w1199 {
        grid-column: 1 / 3;
      }
      @include w767 {
        grid-column: auto;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 2rem;
        padding: 2rem 0;
      }
      .header__locales {
        display: none;
        @include w1023 {
          display: flex;
          margin-right: 3.7rem;
          margin-left: 0;
          padding-right: 3.7rem;
          border-right: 0.1rem solid var(--text-200);
        }
        @include w767 {
          display: none;
        }
      }
    }
    &__contact {
      font-weight: 450;
      font-size: 2.4rem;
      line-height: 1.33;
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
        }
        &:active {
          color: var(--primary-shadow);
        }
      }
      @include active {
        &:active {
          color: var(--primary-shadow);
        }
      }
      @include w1023 {
        font-size: 1.6rem;
        line-height: 1.12;
      }
      & + & {
        @include w767 {
          margin-top: 1.2rem;
        }
      }
    }
    &__squares {
      display: grid;
      grid-gap: 3.2rem;
      grid-template-columns: 1fr 1fr;
      padding: 3.2rem;
      list-style: none;
      @include w1199 {
        grid-column: 1 / 3;
      }
      @include w767 {
        grid-column: auto;
        grid-template-columns: 100%;
        grid-gap: 1.6rem;
        padding: 2rem;
      }
      li:last-child img {
        transform: scaleX(-1);
      }
    }
    &__square {
      position: relative;
      height: 29rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2.4rem;
      color: var(--text-000);
      border-radius: 1.6rem;
      overflow: hidden;
      background: none;
      text-align: left;
      border: none;
      cursor: pointer;
      @include hover {
        &:hover svg,
        &:focus svg {
          transform: translateX(1rem);
        }
      }
      @include active {
        &:active svg{
          transform: translateX(1rem);
        }
      }
      @include w767 {
        height: 19rem;
      }
      img {
        position: absolute;
        z-index: -2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-square {
      &__title {
        font-weight: 450;
        font-size: 2.4rem;
        line-height: 1.33;
      }
      &__bot {
        display: flex;
        align-items: center;
        font-weight: 450;
        letter-spacing: normal;
        white-space: nowrap;
        @include w359 {
          font-size: 1.4rem;
        }
        svg {
          width: 1.2rem;
          margin-left: 0.8rem;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>
