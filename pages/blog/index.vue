<i18n>
{
  "ru": {
    "title": "Пресс-центр ГК Технодар",
    "text": "Новости компании и индустрии собранные на одной площадке для тех, кто хочет оставаться в курсе событий",
    "all": "Все"
  },
  "en": {
    "title": "Press Center Technodar Group of Companies",
    "text": "Company and industry news collected on one platform for those who want to stay up to date",
    "all": "All"
  }
}
</i18n>

<template>
  <main class="section-margin content blog">
    <div class="full-wide blog__banner">
      <h1 class="title blog__title">{{ $t('title') }}</h1>
      <p class="blog__text">{{ $t('text') }}</p>
    </div>
    <ul class="blog__filters">
      <li v-for="(item, index) in filters" :key="index" class="blog-filters__item">
        <button class="blog-filters__btn" :class="{ 'active': activeFilter === item }" @click="activeFilter = item">
          {{ item }}
        </button>
      </li>
      <li class="blog-filters__item">
        <button class="blog-filters__btn" :class="{ 'active': activeFilter === null }" @click="activeFilter = null">
          {{ $t('all') }}
        </button>
      </li>
    </ul>
    <ul class="blog__list">
      <template v-for="(item, index) in blog">
        <li v-if="activeFilter === item.tag || activeFilter === null" :key="index" class="blog__item">
          <CommonBlogItem :data="item"/>
        </li>
      </template>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'BlogPage',
  data () {
    return {
      page: 'blog',
      activeFilter: null,
      blog: [
        {
          tag: 'Новости компании',
          link: '1',
          image: '/images/temp/blog1.jpg',
          date: '19.05.2022',
          time: '13:17',
          title: 'Грант на новый лайнер может получить Московское речное пароходство'
        },
        {
          tag: 'Новости сферы',
          link: '2',
          image: '/images/temp/blog2.jpg',
          date: '19.05.2022',
          time: '13:17',
          title: 'Метрологические услуги – поверка расходомеров для учета судового топлива Метрологические услуги – поверка расходомеров для учета судового топлива'
        },
        {
          tag: 'Статьи',
          link: '3',
          image: '/images/temp/blog3.jpg',
          date: '19.05.2022',
          time: '13:17',
          title: 'Сделку по продаже «Совкомфлотом» 12 судов назвали удачной'
        }
      ]
    }
  },
  computed: {
    filters () {
      return this.blog.map(item => item.tag)
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 22.3rem;
    padding-bottom: 8.5rem;
    background-color: var(--text-200);
    @include w1023 {
      padding-top: 17.8rem;
      padding-bottom: 7rem;
    }
    @include w767 {
      padding-top: 10.4rem;
    }
  }
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  &__text {
    max-width: 50rem;
    color: var(--text-700);
  }
  &__filters {
    position: relative;
    max-width: max-content;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: -3.3rem auto 3.6rem;
    padding: 0.4rem;
    background: var(--text-000);
    border: 0.4rem solid var(--text-200);
    border-radius: 0.8rem;
    list-style: none;
    @include w767 {
      max-width: none;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 3.7rem;
      border-radius: 1.6rem;
    }
  }
  &-filters {
    &__item {
      &:not(:last-child) {
        margin-right: 0.4rem;
      }
    }
    &__btn {
      display: flex;
      justify-content: center;
      padding: 1.6rem 3.2rem;
      border-radius: 0.4rem;
      border: none;
      background: none;
      font-weight: 450;
      line-height: 1.12;
      color: var(--text-1000);
      letter-spacing: normal;
      transition: 0.2s;
      cursor: pointer;
      white-space: nowrap;
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
          background-color: var(--text-100);
        }
        &:active {
          color: var(--primary-shadow);
          background-color: var(--text-100);
        }
      }
      @include active {
        &:active {
          color: var(--primary-shadow);
          background-color: var(--text-100);
        }
      }
      @include w767 {
        width: 100%;
        padding: 1.6rem 0;
        font-size: 1.4rem;
      }
      &.active {
        background-color: var(--text-200);
        color: var(--text-1000);
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w767 {
      grid-template-columns: auto;
    }
  }
}
</style>
