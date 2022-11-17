<template>
  <div class="flowmeters">
    <h1 class="visually-hidden">{{ $t('site') }}</h1>
    <ProductionInfoAndSlider :page="page" :info="info" :slider="slider" class="info--flowmeters"/>
    <hr class="section-margin">
    <div class="section-margin flowmeters__info">
      <div class="flowmeters-info__icons">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.25 36C35.25 35.5858 35.5858 35.25 36 35.25H42C42.4142 35.25 42.75 35.5858 42.75 36C42.75 36.4142 42.4142 36.75 42 36.75H37.8107L44.9303 43.8697C45.2232 44.1626 45.2232 44.6374 44.9303 44.9303C44.6374 45.2232 44.1626 45.2232 43.8697 44.9303L36.75 37.8107V42C36.75 42.4142 36.4142 42.75 36 42.75C35.5858 42.75 35.25 42.4142 35.25 42V36ZM53.25 36C53.25 35.5858 53.5858 35.25 54 35.25H60C60.4142 35.25 60.75 35.5858 60.75 36V42C60.75 42.4142 60.4142 42.75 60 42.75C59.5858 42.75 59.25 42.4142 59.25 42V37.8107L52.1303 44.9303C51.8374 45.2232 51.3626 45.2232 51.0697 44.9303C50.7768 44.6374 50.7768 44.1626 51.0697 43.8697L58.1893 36.75H54C53.5858 36.75 53.25 36.4142 53.25 36ZM44.9303 51.0697C45.2232 51.3626 45.2232 51.8374 44.9303 52.1303L37.8107 59.25H42C42.4142 59.25 42.75 59.5858 42.75 60C42.75 60.4142 42.4142 60.75 42 60.75H36C35.5858 60.75 35.25 60.4142 35.25 60V54C35.25 53.5858 35.5858 53.25 36 53.25C36.4142 53.25 36.75 53.5858 36.75 54V58.1893L43.8697 51.0697C44.1626 50.7768 44.6374 50.7768 44.9303 51.0697ZM51.0697 51.0697C51.3626 50.7768 51.8374 50.7768 52.1303 51.0697L59.25 58.1893V54C59.25 53.5858 59.5858 53.25 60 53.25C60.4142 53.25 60.75 53.5858 60.75 54V60C60.75 60.4142 60.4142 60.75 60 60.75H54C53.5858 60.75 53.25 60.4142 53.25 60C53.25 59.5858 53.5858 59.25 54 59.25H58.1893L51.0697 52.1303C50.7768 51.8374 50.7768 51.3626 51.0697 51.0697Z" fill="#1333BB"/>
          <rect x="0.5" y="0.5" width="95" height="95" rx="47.5" stroke="#E1E1E1"/>
        </svg>
        <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="#E1E1E1"/>
        </svg>
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M57.0303 39.4697C57.3232 39.7626 57.3232 40.2374 57.0303 40.5303L40.5303 57.0303C40.2374 57.3232 39.7626 57.3232 39.4697 57.0303L30.4697 48.0303C30.1768 47.7374 30.1768 47.2626 30.4697 46.9697C30.7626 46.6768 31.2374 46.6768 31.5303 46.9697L40 55.4393L42.6893 52.75L37.9697 48.0303C37.6768 47.7374 37.6768 47.2626 37.9697 46.9697C38.2626 46.6768 38.7374 46.6768 39.0303 46.9697L43.75 51.6893L55.9697 39.4697C56.2626 39.1768 56.7374 39.1768 57.0303 39.4697ZM64.5303 39.4697C64.8232 39.7626 64.8232 40.2374 64.5303 40.5303L48.0303 57.0303C47.7374 57.3232 47.2626 57.3232 46.9697 57.0303C46.6768 56.7374 46.6768 56.2626 46.9697 55.9697L63.4697 39.4697C63.7626 39.1768 64.2374 39.1768 64.5303 39.4697Z" fill="#1333BB"/>
          <rect x="0.5" y="0.5" width="95" height="95" rx="47.5" stroke="#E1E1E1"/>
        </svg>
      </div>
      <p class="flowmeters-info__text">{{ $t('production.flowmeters.info') }}</p>
    </div>
    <hr class="section-margin">
    <section class="section-margin flowmeters__tabs">
      <div class="flowmeters-tabs__btns">
        <button
          v-for="(btn, index) in $t('production.flowmeters.tabs.btn')"
          :key="index"
          class="btn flowmeters-tabs__btn"
          :class="{ 'btn-blue-filled': index === activeTab }"
          @click.prevent="activeTab = index"
        >
          {{ btn }}
        </button>
        <a class="flowmeters-tabs__link" href="#" target="_blank">
          {{ $t('production.flowmeters.tabs.link') }}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33203 4.08301C7.74624 4.08301 8.08203 3.74722 8.08203 3.33301C8.08203 2.91879 7.74624 2.58301 7.33203 2.58301V4.08301ZM13.4154 8.66634C13.4154 8.25213 13.0796 7.91634 12.6654 7.91634C12.2512 7.91634 11.9154 8.25213 11.9154 8.66634H13.4154ZM8.13503 6.80268C7.84214 7.09557 7.84214 7.57044 8.13503 7.86334C8.42793 8.15623 8.9028 8.15623 9.19569 7.86334L8.13503 6.80268ZM14.6654 1.33301H15.4154C15.4154 0.918794 15.0796 0.583008 14.6654 0.583008V1.33301ZM13.9154 5.99967C13.9154 6.41389 14.2512 6.74967 14.6654 6.74967C15.0796 6.74967 15.4154 6.41389 15.4154 5.99967H13.9154ZM9.9987 0.583008C9.58448 0.583008 9.2487 0.918794 9.2487 1.33301C9.2487 1.74722 9.58448 2.08301 9.9987 2.08301V0.583008ZM11.332 13.9163H2.66536V15.4163H11.332V13.9163ZM2.08203 13.333V4.66634H0.582031V13.333H2.08203ZM2.66536 4.08301H7.33203V2.58301H2.66536V4.08301ZM11.9154 8.66634V13.333H13.4154V8.66634H11.9154ZM9.19569 7.86334L15.1957 1.86334L14.135 0.802678L8.13503 6.80268L9.19569 7.86334ZM13.9154 1.33301V5.99967H15.4154V1.33301H13.9154ZM14.6654 0.583008H9.9987V2.08301H14.6654V0.583008ZM2.66536 13.9163C2.3432 13.9163 2.08203 13.6552 2.08203 13.333H0.582031C0.582031 14.4836 1.51477 15.4163 2.66536 15.4163V13.9163ZM11.332 15.4163C12.4826 15.4163 13.4154 14.4836 13.4154 13.333H11.9154C11.9154 13.6552 11.6542 13.9163 11.332 13.9163V15.4163ZM2.08203 4.66634C2.08203 4.34417 2.3432 4.08301 2.66536 4.08301V2.58301C1.51477 2.58301 0.582031 3.51575 0.582031 4.66634H2.08203Z" fill="#1333BB"/>
          </svg>
        </a>
      </div>
      <p class="flowmeters-tabs__text">{{ $t(`production.flowmeters.tabs.text[${activeTab}]`) }}</p>
      <ul class="flowmeters-tabs__list">
        <li v-for="(item, index) in $t(`production.flowmeters.tabs.items${activeTab}`)" :key="index" class="flowmeters-tabs__item">
          {{ item }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Flowmeters',
  data () {
    return {
      activeTab: 0,
      page: 'flowmeters',
      info: {
        title: 'Расходомеры Sekee',
        linkTitle: '#',
        description: [
          'Все счетчики разработаны в ГК Технодар с учетом экстремальных условий эксплуатации',
          'Применяются в системах контроля расхода топлива любой сложности: от наземного транспорта до предприятий энергетической промышленности'
        ],
        features: [
          'Для водного транспорта',
          'Для буровых установок',
          'Для ЖД транспорта',
          'Для автотранспорта и спец. техники',
          'Для станционарных объектов'
        ]
      },
      slider: [
        {
          image: '/images/production/flowmeters1.png',
          title: 'Sekee FM10',
          info: ''
        },
        {
          image: '/images/production/sensor2.png',
          title: 'Sekee FM101010',
          info: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.flowmeters {
  &__info {
    display: flex;
    align-items: center;
    @include w1023 {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &-info {
    &__icons {
      display: flex;
      align-items: center;
      margin-right: 10rem;
      @include w1023 {
        margin-right: 0;
        margin-bottom: 4rem;
      }
      @include w767 {
        margin-bottom: 1.8rem;
      }
      svg {
        &:nth-child(1),
        &:nth-child(3) {
          width: 9.6rem;
          height: auto;
          @include w767 {
            width: 7.2rem;
          }
        }
        &:nth-child(2) {
          width: 6.4rem;
          height: auto;
          margin: 0 2.4rem;
          @include w1023 {
            margin: 0 1.6rem;
          }
        }
      }
    }
    &__text {
      font-size: 2.4rem;
      line-height: 1.33;
      color: var(--text-1000);
      letter-spacing: -0.03em;
      @include w1023 {
        max-width: 71%;
      }
      @include w767 {
        max-width: none;
        font-size: 2rem;
        line-height: 1.4;
      }
    }
  }
  &-tabs {
    &__btns {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      @include w767 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem 0.8rem;
        margin-bottom: 1.7rem;
      }
    }
    &__btn {
      margin-right: 0.8rem;
      padding: 1.7rem 2.3rem;
      border: 0.1rem solid var(--text-300);
      font-size: 2.4rem;
      letter-spacing: -0.03em;
      @include w767 {
        width: 100%;
        padding: 1.7rem 0;
      }
      @include w359 {
        font-size: 2rem;
      }
      &:not(.btn-blue-filled) {
        color: var(--text-400);
        background: none;
        @include hover {
          &:hover,
          &:focus {
            color: var(--primary-blue);
          }
        }
        @include active {
          &:active {
            color: var(--primary-blue);
          }
        }
      }
      &.btn-blue-filled {
        border-color: var(--primary-blue);
      }
    }
    &__link {
      display: flex;
      font-size: 2.4rem;
      color: var(--text-1000);
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
        }
      }
      @include active {
        &:active {
          color: var(--primary-blue);
        }
      }
      @include w767 {
        grid-column: span 2;
        letter-spacing: -0.03em;
      }
      svg {
        transform: translateY(-0.9rem);
        width: 1.6rem;
        height: auto;
        margin-left: 0.8rem;
      }
    }
    &__text {
      margin-bottom: 4rem;
      max-width: 48rem;
    }
    &__list {
      counter-reset: item;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 31.2rem;
      grid-gap: 2.4rem;
      padding-left: 0;
      list-style: none;
      overflow-x: auto;
      @include w1199 {
        display: flex;
        grid-gap: 0;
        margin: 0 calc(-1 * var(--container-padding)) -1rem;
        padding: 0 var(--container-padding) 1rem;
      }
      @include w767 {
        display: block;
      }
    }
    &__item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 2.4rem;
      background: var(--text-200);
      border-radius: 1.6rem;
      font-size: 2rem;
      line-height: 1.4;
      letter-spacing: -0.03em;
      @include w1199 {
        flex: 0 0 31.2rem;
        height: 31.2rem;
      }
      @include w767 {
        height: auto;
      }
      & + & {
        @include w1199 {
          margin-left: 2.4rem;
        }
        @include w767 {
          margin-top: 1.6rem;
          margin-left: 0;
        }
      }
      &:before {
        counter-increment: item;
        content: "0" counter(item);
        position: absolute;
        top: 2.4rem;
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 50%;
        border: 0.1rem solid var(--text-300);
        @include w767 {
          position: static;
          margin-bottom: 3.2rem;
        }
      }
    }
  }
}
</style>
