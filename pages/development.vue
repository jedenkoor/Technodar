<i18n>
{
  "ru": {
    "problems": {
      "title": "С помощью инструментов VMTS и DOTS вы быстро найдете проблемные области",
      "text": "Так вы будете держать под контролем ключевые показатели и оперативно реагировать на неожиданные изменения",
      "items": [
        "Недостача топлива",
        "Перерасход в потребителях",
        "Хищение ГСМ",
        "Недостача топлива",
        "Перерасход в потребителях",
        "Хищение ГСМ"
      ]
    }
  },
  "en": {
    "problems": {
      "title": "With VMTS and DOTS tools you can quickly find problem areas",
      "text": "So you will keep key indicators under control and quickly respond to unexpected changes.",
      "items": [
        "Lack of fuel",
        "Overspending in consumers",
        "Fuel theft",
        "Lack of fuel",
        "Overspending in consumers",
        "Fuel theft"
      ]
    }
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage" class="production"/>
    <CommonTabsButtons :page="page" :tabs="tabs"/>
    <NuxtChild/>
    <section class="section-margin problems">
      <h2 class="title problems__title">{{ $t('problems.title') }}</h2>
      <div class="problems__row">
        <template v-for="(item, index) in $t('problems.items')">
          <transition name="fade" :key="index">
            <div v-show="index < moreProblems + 3 && index >= moreProblems" class="problems__item">
              {{ item }}
            </div>
          </transition>
        </template>
        <button v-if="moreProblems < Object.keys($t('problems.items')).length - 3" class="problems__more" @click.prevent="moreProblems++">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12.4997" cy="25.0002" rx="4.16667" ry="4.16667" fill="#E1E1E1"/>
            <circle cx="24.9997" cy="25.0002" r="4.16667" fill="#E1E1E1"/>
            <ellipse cx="37.4997" cy="25.0002" rx="4.16667" ry="4.16667" fill="#E1E1E1"/>
          </svg>
        </button>
      </div>
      <p class="problems__text">{{ $t('problems.text') }}</p>
    </section>
    <hr class="section-margin">
    <GeneralScheme4ColInRow :page="page"/>
    <GeneralForm/>
    <DevelopmentOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'DevelopmentIndex',
  data () {
    return {
      page: 'development',
      bannerImage: '/images/development/development-banner.jpg',
      tabs: {
        items: [
          { link: 'vmts' },
          { link: 'dots' }
        ]
      },
      moreProblems: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.problems {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @include w767 {
    display: block;
    text-align: left;
  }
  &__title {
    max-width: 77rem;
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__row {
    display: flex;
    align-items: center;
    margin-bottom: 7.9rem;
    @include w1199 {
      margin-bottom: 4rem;
    }
    @include w767 {
      width: 100vw;
      margin-right: calc(-1 * var(--container-padding));
      margin-left: calc(-1 * var(--container-padding));
      margin-bottom: 3rem;
      padding-left: var(--container-padding);
      padding-right: 0.8rem;
      padding-bottom: 1rem;
      overflow-x: auto;
    }
  }
  &__item {
    height: 5rem;
    display: flex;
    align-items: center;
    margin-right: 0.8rem;
    padding: 0 2.4rem;
    background-color: var(--text-200);
    border-radius: 3.2rem;
    white-space: nowrap;
    color: var(--text-700);
    line-height: 1.12;
    letter-spacing: normal;
    @include w1199 {
      font-size: 1.4rem;
    }
    @include w767 {
      display: flex!important;
    }
  }
  &__more {
    display: flex;
    padding: 0 2.4rem;
    border: none;
    background-color: var(--text-200);
    border-radius: 3.2rem;
    cursor: pointer;
    @include w767 {
      display: none;
    }
    svg {
      width: 5rem;
      height: auto;
    }
  }
  &__text {
    max-width: 48rem;
    color: var(--text-700);
  }
}
</style>
