<i18n>
{
  "ru": {
    "more": "Читать полностью"
  },
  "en": {
    "more": "Read more"
  }
}
</i18n>

<template>
  <NuxtLink :to="`/${$i18n.locale}/blog/${data.link}/`" class="item">
    <img :src="data.image" :alt="data.title" class="item__img">
    <div class="item__content">
      <div class="item__row">
        <span class="item__datetime">{{ data.date }}</span>
        <span class="item__datetime">{{ data.time }}</span>
      </div>
      <p class="item__title">{{ data.title }}</p>
      <p class="item__more">
        {{ $t('more') }}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6L6.53033 6.53033L7.06066 6L6.53033 5.46967L6 6ZM2.53033 10.5303L6.53033 6.53033L5.46967 5.46967L1.46967 9.46967L2.53033 10.5303ZM6.53033 5.46967L2.53033 1.46967L1.46967 2.53033L5.46967 6.53033L6.53033 5.46967Z" fill="#1333BB"/>
        </svg>
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CommonBlogItem',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include hover {
    &:hover,
    &:focus {
      .item__title {
        color: var(--primary-blue);
      }
      .item__more svg {
        transform: translateX(1rem);
      }
    }
  }
  @include active {
    &:active {
      .item__title {
        color: var(--primary-blue);
      }
      .item__more svg {
        transform: translateX(1rem);
      }
    }
  }
  &__img {
    width: 100%;
    height: 26rem;
    object-fit: cover;
    border-radius: 1.6rem 1.6rem 0 0;
  }
  &__content {
    flex: 1;
    padding: 2.3rem;
    border: 0.1rem solid var(--text-200);
    border-radius: 0 0 1.6rem 1.6rem;
    background: var(--text-000);
  }
  &__row {
    display: flex;
    margin-bottom: 2rem;
  }
  &__datetime {
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.12;
    color: var(--text-600);
    &:not(:last-child) {
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: 0.1rem solid var(--text-200);
    }
  }
  &__title {
    height: 8.4rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.2s;
  }
  &__more {
    line-height: 1.12;
    color: var(--primary-blue);
    letter-spacing: normal;
    svg {
      margin-left: 0.8rem;
      transition: transform 0.2s;
    }
  }
}
</style>
