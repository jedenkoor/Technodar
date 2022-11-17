<i18n>
{
  "ru": {
    "problems": {
      "title": "Какие проблемы решает система контроля бункеровки?",
      "items": [
        "Снизить время простоя и ускорить процесс заправки",
        "Выявить умышленный недолив с точностью до кг",
        "Избежать отклонений показателей при ручном измерении",
        "Исключить человеческий фактор из составления отчетов"
      ]
    },
    "data": {
      "title": "Какие данные вы будете получать?",
      "items": [
        {
          "title": "Качественные",
          "text": "Плотность, температура и прочее"
        },
        {
          "title": "Количественные",
          "text": "Масса, объем, скорость подачи"
        }
      ]
    }
  },
  "en": {
    "problems": {
      "title": "What problems does the bunker control system solve?",
      "items": [
        "Reduce downtime and speed up the refueling process",
        "Detect intentional underfilling with an accuracy of kg",
        "Avoid deviations in manual measurement",
        "Eliminate the human factor from reporting"
      ]
    },
    "data": {
      "title": "What data will you receive?",
      "items": [
        {
          "title": "Quality",
          "text": "Density, temperature, etc."
        },
        {
          "title": "Quantitative",
          "text": "Mass, volume, feed rate"
        }
      ]
    }
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage"/>
    <section class="section-margin problems">
      <h2 class="title problems__title">{{ $t('problems.title') }}</h2>
      <ul class="problems__list">
        <li v-for="(problem, index) in $t('problems.items')" :key="index" class="problems__item">
          <img :src="`/images/icons/bunkering-problems${++index}.svg`" :alt="problem" class="problems-item__icon">
          <p class="problems-item__text">{{ problem }}</p>
        </li>
      </ul>
      <img src="/images/production/bunkering-problems.jpg" :alt="$t('problems.title')" class="problems__img">
    </section>
    <GeneralSmallBlueRow :page="page"/>
    <div class="section-margin data">
      <h2 class="title data__title">{{ $t('data.title') }}</h2>
      <ul class="data__list">
        <li v-for="(item, index) in $t('data.items')" :key="index" class="data__item">
          <img :src="`/images/icons/bunkering-data${++index}.svg`" :alt="item.title" class="data-item__icon">
          <div class="data-item__content">
            <span class="data-item__title">{{ item.title }}</span>
            <p class="data-item__text">{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
    <GeneralSystemInterface :page="page" :slides="slides"/>
    <GeneralForm/>
    <ProductionOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'BunkeringPage',
  data () {
    return {
      page: 'bunkering',
      bannerImage: '/images/production/bunkering-banner.jpg',
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
.problems {
  &__title {
    max-width: 62rem;
    margin-top: 0;
    margin-bottom: 4rem;
    @include w1199 {
      max-width: 50rem;
    }
  }
  &__list {
    counter-reset: item;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 31.2rem;
    grid-gap: 2.4rem;
    margin-bottom: 4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 30rem 30rem;
    }
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-gap: 1.6rem;
      margin-bottom: 1.6rem;
    }
  }
  &__item {
    position: relative;
    padding: 2.4rem;
    background: var(--text-200);
    border-radius: 1.6rem;
    @include w767 {
      padding-top: 6.8rem;
    }
    &:before {
      counter-increment: item;
      content: "0" counter(item);
      position: absolute;
      bottom: 2.4rem;
      left: 2.4rem;
      font-size: 2rem;
      color: var(--text-400);
      @include w767 {
        top: 2.4rem;
        bottom: auto;
      }
    }
  }
  &-item {
    &__icon {
      width: 8rem;
      height: auto;
      margin-bottom: 2rem;
      @include w767 {
        display: none;
      }
    }
    &__text {
      font-size: 2rem;
      line-height: 1.4;
      letter-spacing: -0.03em;
    }
  }
  &__img {
    width: 100%;
    border-radius: 1.6rem;
    @include w1199 {
      height: 40rem;
      object-fit: cover;
    }
    @include w767 {
      height: 32.8rem;
    }
  }
}
.data {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w767 {
      grid-template-columns: auto;
      grid-gap: 1.6rem;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    padding: 3.2rem;
    background: var(--text-200);
    border-radius: 1.6rem;
    @include w1199 {
      align-items: flex-start;
      padding: 2.4rem;
    }
    @include w767 {
      display: block;
    }
  }
  &-item {
    &__icon {
      width: 7.2rem;
      height: auto;
      margin-right: 3.2rem;
      @include w1199 {
        margin-right: 2rem;
      }
      @include w767 {
        margin-bottom: 2rem;
      }
    }
    &__title {
      display: block;
      margin-bottom: 2rem;
      font-size: 2rem;
      line-height: 1.4;
      color: var(--text-1000);
      @include w1199 {
        margin-bottom: 0.8rem;
      }
    }
    &__text {
      color: var(--text-700);
    }
  }
}
.hr {
  background-color: var(--text-200);
}
</style>
