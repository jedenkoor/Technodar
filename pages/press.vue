<i18n>
{
  "ru": {
    "title": "Материалы для прессы",
    "text": "Гайдлайны для использования логотипа и другая справочная информация для прессы",
    "btn": "Сотрудничество со СМИ",
    "rules": {
      "title": "Правила использования логотипа",
      "background": {
        "title": "Использование на разном фоне",
        "items": [
          {
            "title": "На светлом",
            "text": "Основной способ использования любой из версий логотипа — на светлом однородном фоне. Идеально подходят сочетания с белым, светло-серым и светло-голубым."
          },
          {
            "title": "На светлом фото",
            "text": "Второй вариант применения — на светлой однородной текстуре. Главная характеристика такого фона это однозначная читаемость логотипа, ничто не должно мешать его считыванию и восприятию."
          },
          {
            "title": "На тёмном",
            "text": "Менее очевидный вариант использования — на тёмном однородном фоне. Такой фон предполагает вариант с белым текстом и красным хвостиком."
          },
          {
            "title": "На цветной фотографии",
            "text": "Самый сложный и опасный вариант. Фон должен быть максимально однородным и простым, надпись белой, хвостик красный. Желательно избежать на фоне оттенки болезненных цветов (зеленый, желтый) и шумные детализированные фотографии."
          }
        ]
      },
      "colours": "Цветовые версии"
    }
  },
  "en": {
    "title": "Press materials",
    "text": "Guidelines for the use of the logo and other reference information for the press",
    "btn": "Media cooperation"
  }
}
</i18n>

<template>
  <main class="white-footer content press">
    <div class="section-margin full-wide press__top">
      <h1 class="title press__title">{{ $t('title') }}</h1>
      <p class="press__text">{{ $t('text') }}</p>
      <button class="btn btn-blue-outlined press__btn">{{ $t('btn') }}</button>
    </div>
    <div class="section-margin press__rules">
      <h2 class="title press-rules__title">{{ $t('rules.title') }}</h2>
      <span class="press__tag">{{ $t('rules.background.title') }}</span>
      <ul class="press-rules__list">
        <li v-for="(item, index) in $t('rules.background.items')" :key="index" class="press-rules__item">
          <div class="press-rules-item__box">
            <img :src="`/images/press/press-rules-bg${+index + 1}.jpg`" :alt="item.title" class="press-rules-item__bg">
            <img :src="`/images/logos/press/press-rules${+index + 1}.svg`" :alt="item.title" class="press-rules-item__logo">
          </div>
          <p class="press-rules-item__title">{{ item.title }}</p>
          <p class="press-rules-item__text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <hr class="section-margin">
    <div class="section-margin press__colours">
      <span class="press__tag">{{ $t('rules.colours') }}</span>
      <ul class="press-colours__list">
        <li v-for="(item, index) in 3" :key="index" class="press-colours__item">
          <img :src="`/images/press/press-colours-bg${+index + 1}.jpg`" :alt="item.title" class="press-colours-item__bg">
          <img :src="`/images/logos/press/press-colours${+index + 1}.svg`" :alt="item.title" class="press-colours-item__logo">
        </li>
      </ul>
    </div>
    <GeneralForm/>
  </main>
</template>

<script>
export default {
  name: 'PressPage'
}
</script>

<style lang="scss" scoped>
.press {
  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 26.3rem;
    padding-bottom: 8rem;
    background-color: var(--text-200);
    @include w1199 {
      padding-top: 21.8rem;
    }
    @include w767 {
      padding-top: 10.4rem;
      padding-bottom: 4rem;
    }
  }
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  &__text {
    max-width: 41rem;
    margin-bottom: 4rem;
    color: var(--text-700);
  }
  &__btn {
    padding: 1.5rem 3.1rem;
  }
  &__tag {
    display: inline-block;
    margin-bottom: 2.3rem;
    padding: 1.5rem 3.1rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 3.2rem;
    line-height: 1.12;
  }
  &-rules {
    &__title {
      margin-top: 0;
      margin-bottom: 4rem;
    }
    &__list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2.4rem;
      padding-left: 0;
      list-style: none;
      @include w1199 {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 4rem 2.4rem;
      }
      @include w767 {
        grid-template-columns: auto;
        grid-gap: 2.4rem;
      }
    }
    &-item {
      &__box {
        position: relative;
        margin-bottom: 2.4rem;
      }
      &__bg {
        width: 100%;
        height: 48rem;
        object-fit: cover;
        border-radius: 1.6rem;
        @include w1199 {
          height: 34rem;
        }
        @include w767 {
          height: 32.8rem;
        }
      }
      &__logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &__title {
        margin-bottom: 1.6rem;
        font-size: 2rem;
        letter-spacing: -0.03em;
        line-height: 1.1;
      }
      &__text {
        font-weight: 400;
        font-size: 1.4rem;
        letter-spacing: normal;
        line-height: 1.71;
      }
    }
  }
  &-colours {
    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2.4rem;
      padding-left: 0;
      list-style: none;
      @include w1199 {
        grid-template-columns: auto;
        grid-gap: 2.4rem;
      }
    }
    &__item {
      position: relative;
    }
    &-item {
      &__bg {
        width: 100%;
        height: 24rem;
        border-radius: 2.4rem;
        object-fit: cover;
        border: 0.1rem solid var(--text-300);
      }
      &__logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
.form {
  margin-bottom: 0;
}
</style>
