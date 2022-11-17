<template>
  <div>
    <h1 class="visually-hidden">{{ $t('site') }}</h1>
    <section class="separators">
      <h2 class="title separators__title">{{ $t('production.separators.features.title') }}</h2>
      <div class="section-margin separators__row">
        <ul class="separators__features">
          <li v-for="(feature, index) in $t('production.separators.features.items')" :key="index" class="separators__feature">
            <div class="separators-feature__top">
              <div class="separators-feature__icon">
                <img :src="`/images/production/separators-icon${index + 1}.svg`" :alt="feature.title">
              </div>
              <h3 class="separators-feature__title">{{ feature.title }}</h3>
            </div>
            <p class="separators-feature__text">{{ feature.text }}</p>
          </li>
        </ul>
        <div class="separators__col">
          <ProductionSliderOneItemGreyBackground :page="page" :slider="slider"/>
        </div>
      </div>
      <hr class="section-margin">
      <ProductionDocumentation :page="page" :link="documentationLink" class="section-margin"/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GasSeparators',
  data () {
    return {
      page: 'separators',
      slider: [
        {
          image: '/images/production/separators1.png',
          title: 'Sekee FM10',
          info: ''
        },
        {
          image: '/images/production/sensor2.png',
          title: 'Sekee FM101010',
          info: ''
        }
      ],
      documentationLink: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
.separators {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 1.2rem));
    grid-gap: 2.4rem;
    @include w1199 {
      display: flex;
      flex-direction: column-reverse;
      grid-gap: 0;
    }
  }
  &__col {
    margin-right: 0;
  }
  &__features {
    padding-left: 0;
    list-style: none;
    @include w1199 {
      margin-top: 4rem;
    }
  }
  &__feature {
    padding: 3.1rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    @include w767 {
      padding: 2.3rem;
    }
    & + & {
      margin-top: 2rem;
      @include w767 {
        margin-top: 1.6rem;
      }
    }
  }
  &-feature {
    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 3.1rem;
    }
    &__icon {
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.6rem;
      border-radius: 50%;
      background-color: var(--text-200);
      img {
        width: 2.4rem;
      }
    }
    &__title {
      margin: 0;
      font-weight: 400;
      font-size: 2.4rem;
      @include w359 {
        font-size: 2rem;
      }
    }
    &__text {
      color: var(--text-700);
      font-weight: 450;
    }
  }
}
</style>
