<i18n>
{
  "ru": {
    "title": "Оборудование ГК Технодар соответствует всем требованиям и стандартам отрасли",
    "text": "Ознакомьтесь с нашими сертификатами, лицензиями и патентами"
  },
  "en": {
    "title": "The equipment of Technodar Group of Companies meets all the requirements and standards of the industry",
    "text": "Check out our certificates, licenses and patents"
  }
}
</i18n>

<template>
  <main class="content certificates">
    <div class="section-margin full-wide certificates__top">
      <div class="certificates__wrap">
        <h1 class="title certificates__title">{{ $t('title') }}</h1>
        <p class="certificates__text">{{ $t('text') }}</p>
      </div>
    </div>
    <div class="certificates__categories">
      <div
        v-for="(category, categoryIndex) in certificates"
        :key="categoryIndex"
        class="certificates__category"
      >
        <h2 class="certificates-category__title">{{ category.name }}</h2>
        <div class="section-margin certificates__products">
          <div v-for="(product, productIndex) in category.products" :key="productIndex" class="certificates__product">
            <span v-if="product.name" class="certificates-product__name">{{ product.name }}</span>
            <ul class="certificates__list">
              <li v-for="(item, itemIndex) in product.items" :key="itemIndex" class="certificates__item">
                <button class="certificates-item__area" @click="item.index = 0"/>
                <svg class="certificates-item__plate" width="312" height="400" viewBox="0 0 312 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path class="stroke" d="M16 0.5H218.793C225.311 0.5 231.133 4.57755 233.36 10.703L249.7 55.6388C252.071 62.1594 258.268 66.5 265.207 66.5H296C304.56 66.5 311.5 73.4396 311.5 82V384C311.5 392.56 304.56 399.5 296 399.5H16C7.43959 399.5 0.5 392.56 0.5 384V16C0.5 7.43959 7.43959 0.5 16 0.5Z" fill="#FAFAFA" stroke="#F2F2F2"/>
                </svg>
                <svg class="certificates-item__plate mobile" width="328" height="280" viewBox="0 0 328 280" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path class="stroke" d="M16 0.5H234.793C241.311 0.5 247.133 4.57755 249.36 10.703L265.7 55.6388C268.071 62.1594 274.268 66.5 281.207 66.5H312C320.56 66.5 327.5 73.4396 327.5 82V264C327.5 272.56 320.56 279.5 312 279.5H16C7.43959 279.5 0.5 272.56 0.5 264V16C0.5 7.43959 7.43959 0.5 16 0.5Z" fill="#FAFAFA" stroke="#F2F2F2"/>
                </svg>
                <svg class="certificates-item__logo" width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.27471 12.3788C0.000933016 12.3788 -0.159118 11.7397 0.112087 10.7605C1.66151 6.26955 7.07894 0 13.6101 0H36.6714C38.5432 0 39.3634 0.188484 39.0233 2.35054L36.2935 19.3697C34.3262 27.6843 23.6202 32.0345 21.0082 31.9998C20.2724 31.989 19.75 31.4105 19.8723 30.6891L22.7399 12.3788H1.27248H1.27471Z" fill="#1333BB"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.4573 0H62.6039C64.0874 0 64.1674 0.575571 63.8454 1.62719C62.3285 6.42658 56.8717 12.3641 50.3444 12.3641H41.3496C40.4257 12.3641 39.8616 12.0677 40.0126 11.1178L41.4962 1.64884C41.7294 0.183925 42.409 0 43.4573 0Z" fill="#A61A1A"/>
                </svg>
                <svg class="certificates-item__loupe" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="24.5" fill="#FAFAFA" stroke="#F2F2F2"/>
                  <path d="M33.3337 33.3334L28.0477 28.0475M28.0477 28.0475C29.2541 26.841 30.0003 25.1744 30.0003 23.3334C30.0003 19.6515 27.0156 16.6667 23.3337 16.6667C19.6518 16.6667 16.667 19.6515 16.667 23.3334C16.667 27.0153 19.6518 30.0001 23.3337 30.0001C25.1746 30.0001 26.8413 29.2539 28.0477 28.0475ZM21.667 23.3334H25.0003M23.3337 25.0001V21.6667" stroke="#1333BB" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <p class="certificates-item__text">{{ item.description }}</p>
                <p class="certificates-item__title">{{ item.title }}</p>
                <client-only>
                  <CoolLightBox
                    :items="[item]"
                    :index="item.index"
                    @close="item.index = null"
                    :close-on-click-outside-mobile="true"
                  />
                </client-only>
              </li>
            </ul>
            <hr v-if="productIndex !== category.products.length - 1" class="certificates-product__hr">
          </div>
        </div>
        <hr v-if="categoryIndex !== certificates.length - 1" class="section-margin">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CertificationPage',
  data () {
    return {
      certificates: [
        {
          name: 'Российский речной и морской регистр',
          products: [
            {
              items: [
                {
                  description: '№ РОСС RU.PO.H00385',
                  title: 'Сертификат соответствия',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: 'РОСС RU.B1719.04АЮ03',
                  title: 'Сертификат о типовом одобрении',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: '№13-11.1-4.9.6-1269',
                  title: 'Свидетельство об одобрении',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: 'Свидетельство №132369 ',
                  title: 'О признании от Российского речного регистра',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: 'Свидетельство №132369 ',
                  title: 'О признании от Российского речного регистра',
                  src: '/images/temp/certificate.jpg'
                }
              ]
            }
          ]
        },
        {
          name: 'Свидетельства о регистрации нашей продукции',
          products: [
            {
              name: 'DOTS',
              items: [
                {
                  description: 'РОСС RU.B1719.04АЮ03',
                  title: 'Сертификат о типовом одобрении',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: '№ РОСС RU.PO.H00385',
                  title: 'Сертификат соответствия',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: '№13-11.1-4.9.6-1269',
                  title: 'Свидетельство об одобрении',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: 'Свидетельство №132369 ',
                  title: 'О признании от Российского речного регистра',
                  src: '/images/temp/certificate.jpg'
                }
              ]
            },
            {
              name: 'Sekee',
              items: [
                {
                  description: '№13-11.1-4.9.6-1269',
                  title: 'Свидетельство об одобрении',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: '№ РОСС RU.PO.H00385',
                  title: 'Сертификат соответствия',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: 'РОСС RU.B1719.04АЮ03',
                  title: 'Сертификат о типовом одобрении',
                  src: '/images/temp/certificate.jpg'
                },
                {
                  description: 'Свидетельство №132369 ',
                  title: 'О признании от Российского речного регистра',
                  src: '/images/temp/certificate.jpg'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created () {
    this.certificates.forEach((category) => {
      category.products.forEach((product) => {
        product.items.forEach((item, itemIndex) => {
          this.$set(product.items[itemIndex], 'index', null)
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.certificates {
  &__top {
    padding-top: 22.3rem;
    padding-bottom: 8rem;
    background-color: var(--text-200);
    @include w1199 {
      padding-top: 17.8rem;
    }
    @include w767 {
      padding-top: 8.4rem;
      padding-bottom: 4rem;
    }
  }
  &__wrap {
    @include w767 {
      padding: 3.2rem 1.6rem;
      background: var(--text-000);
      border-radius: 1.6rem;
    }
  }
  &__title {
    max-width: 81rem;
    margin-top: 0;
    margin-bottom: 2rem;
    @include w767 {
      margin-bottom: 1.6rem;
    }
  }
  &__text {
    color: var(--text-700);
  }
  &-category {
    &__title {
      margin-top: 0;
      margin-bottom: 2.4rem;
      line-height: 1.1;
      font-weight: 450;
      font-size: 2rem;
      letter-spacing: -0.03em;
    }
  }
  &-product {
    &__name {
      display: inline-flex;
      margin-bottom: 2.4rem;
      padding: 1.5rem 3.2rem;
      border: 0.1rem solid var(--text-300);
      border-radius: 3.2rem;
      line-height: 1.12;
    }
    &__hr {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 40rem;
    grid-auto-rows: 40rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: 28rem;
      grid-auto-rows: 28rem;
    }
  }
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem;
    @include w1199 {
      padding: 3.2rem;
    }
    @include w767 {
      padding: 2.4rem;
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
      cursor: pointer;
      @include hover {
        &:hover,
        &:focus {
          & ~ .certificates-item__plate .stroke {
            stroke: var(--primary-blue)
          }
        }
      }
      @include active {
        &:active {
          & ~ .certificates-item__plate .stroke {
            stroke: var(--primary-blue)
          }
        }
      }
    }
    &__plate {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      @include w767 {
        display: none;
      }
      &.mobile {
        display: none;
        @include w767 {
          display: block;
        }
      }
      .stroke {
        transition: 0.2s;
      }
    }
    &__loupe {
      position: absolute;
      top: 0;
      right: 0;
      width: 5rem;
      height: auto;
    }
    &__logo {
      width: 6.4rem;
      height: auto;
    }
    &__text {
      margin-top: auto;
      margin-bottom: 1.5rem;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.14;
      color: var(--text-600);
      letter-spacing: normal;
    }
    &__title {
      margin: 0;
      font-size: 2rem;
      line-height: 1.4;
      letter-spacing: -0.03em;
    }
    &__popup {
      position: fixed;
      z-index: 12;
      top: 5rem;
      left: 50%;
      transform: translateX(-50%);
      max-width: 95vw;
      width: 50vw;
      height: calc(100vh - 20rem);
      overflow-y: auto;
      border-radius: 0.6rem;
      @include w1199 {
        width: 100%;
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
      img {
        width: 100%;
      }
    }
  }
}
</style>
