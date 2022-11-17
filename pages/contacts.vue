<i18n>
{
  "ru": {
    "title": "Контакты",
    "accordions": [
      {
        "title": "Техническая поддержка",
        "content": "<div><span>Телефон</span><span>8 800 250-00-16</span></div><div><span>Почта</span><span>support@skrt.biz</span></div><div><span>Время работы</span><span>9:00 — 18:00</span></div>"
      },
      {
        "title": "Приемная",
        "content": "<div><span>Телефон</span><span>8 800 250-00-16</span></div></div>"
      },
      {
        "title": "Коммерческий отдел",
        "content": "<div><span>Телефон</span><span>8 800 250-00-16</span></div>"
      },
      {
        "title": "Адрес",
        "content": "<div><span>Петрозаводск, 6-Й ГВАРДЕЙСКИЙ ПЕР., 7А</span></div>"
      }
    ]
  },
  "en": {
    "title": "Contacts",
    "accordions": [
      {
        "title": "Technical support",
        "content": "<div><span>Phone</span><span>8 800 250-00-16</span></div><div><span>Email</span><span>support@skrt.biz</span></div><div><span>Working hours</span><span>9:00 — 18:00</span></div>"
      },
      {
        "title": "Reception",
        "content": "<div><span>Phone</span><span>8 800 250-00-16</span></div>"
      },
      {
        "title": "Sales department",
        "content": "<div><span>Phone</span><span>8 800 250-00-16</span></div>"
      },
      {
        "title": "Address",
        "content": "<div><span>Petrozavodsk, 6-Y GVARDEYSKIY PER., 7A</span></div>"
      }
    ]
  }
}
</i18n>

<template>
  <main class="full-wide white-footer content contacts">
    <div class="contacts__wrap" v-if="mounted">
      <client-only>
        <yandex-map
          class="map"
          :coords="centerMapCoords"
          :zoom="10"
          :scroll-zoom="false"
          :controls="controls"
          :detailed-controls="detailedControls"
        >
          <ymap-marker
            marker-id="1"
            :coords="markerCoords"
            :icon="markerIcon"
          />
        </yandex-map>
      </client-only>
      <div class="contacts__content">
        <h1 class="title contacts__title">{{ $t('title') }}</h1>
        <ul class="accordions__list">
          <li v-for="(item, index) in $t('accordions')" :key="index" ref="accordion" :class="['accordions__item', { 'active': index === activeAccordionIndex }]">
            <button class="accordions-item__title" @click.prevent="openAccordion(index)">
              {{ item.title }}
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 9L8.29289 9.70711L9 10.4142L9.70711 9.70711L9 9ZM0.292893 1.70711L8.29289 9.70711L9.70711 8.29289L1.70711 0.292893L0.292893 1.70711ZM9.70711 9.70711L17.7071 1.70711L16.2929 0.292894L8.29289 8.29289L9.70711 9.70711Z" fill="currentColor"/>
              </svg>
            </button>
            <div class="accordions-item__text" :style="{ height: index === activeAccordionIndex ? $refs.accordion[index].querySelector('.accordions-item__text').scrollHeight + 'px' : 0}" v-html="item.content"/>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'ContactsPage',
  data () {
    return {
      mounted: false,
      winW: null,
      activeAccordionIndex: 0,
      zoom: 9,
      markerCoords: [61.785021, 34.346878],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '',
        imageSize: [24, 37],
        imageOffset: [0, -50],
        content: '',
        contentLayout:
          `<svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1009 26.0812C14.4478 29.0815 12.0002 31.8495 12.0002 35.6665C12.0002 31.8495 9.55249 29.0815 6.89941 26.0812C3.76024 22.5312 0.333496 18.656 0.333496 12.3332C0.333496 5.88985 5.55684 0.666504 12.0002 0.666504C18.4435 0.666504 23.6668 5.88985 23.6668 12.3332C23.6668 18.656 20.2401 22.5312 17.1009 26.0812ZM12.0002 15.6665C13.8411 15.6665 15.3335 14.1741 15.3335 12.3332C15.3335 10.4922 13.8411 8.99984 12.0002 8.99984C10.1592 8.99984 8.66683 10.4922 8.66683 12.3332C8.66683 14.1741 10.1592 15.6665 12.0002 15.6665Z" fill="#1333BB"/>
          </svg>`
      },
      controls: ['zoomControl'],
      detailedControls: {
        zoomControl: {
          position: {
            top: 300,
            right: 10,
            left: 'auto'
          }
        }
      }
    }
  },
  computed: {
    centerMapCoords () {
      if (this.winW >= 1200) {
        return [61.785021, 34.346878]
      } else if (this.winW < 1200 && this.winW >= 768) {
        return [61.785021, 34.146878]
      } else {
        return [61.785021, 34.346878]
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mounted = true
      this.winW = window.innerWidth
      this.$nuxt.$on('win-resize', throttle(({ winW }) => {
        this.winW = winW
      }, 300))
    })
  },
  methods: {
    openAccordion (index) {
      this.activeAccordionIndex = this.activeAccordionIndex === index ? null : index
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  height: 100vh;
  min-height: 90rem;
  @include w1199 {
    min-height: 80rem;
  }
  @include w767 {
    height: 38rem;
    min-height: auto;
  }
}
.contacts {
  position: relative;
  padding: 0;
  @include w767 {
    padding-top: 8.4rem;
    padding-right: var(--container-padding);
    padding-bottom: 4rem;
    padding-left: var(--container-padding);
    background-color: var(--text-200);
  }
  &__wrap {
    position: relative;
    border-radius: 1.6rem;
    overflow: hidden;
  }
  &__content {
    position: absolute;
    bottom: 5.5rem;
    left: var(--container-padding);
    width: 42.4rem;
    background-color: var(--text-000);
    border-radius: 1.6rem;
    @include w1199 {
      bottom: 8rem;
      width: 35.2rem;
      padding-top: 2.4rem;
    }
    @include w767 {
      position: relative;
      left: 0;
      bottom: 0;
      width: 100%;
      margin-top: -1.3rem;
    }
  }
  &__title {
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
    padding-right: 2.4rem;
    padding-left: 2.4rem;
    @include w1199 {
      margin-top: 0;
      margin-bottom: 2.4rem;
    }
  }
}
.accordions {
  &__list {
    padding-left: 0;
    list-style: none;
  }
  &__item {
    &:last-child {
      .accordions-item__title {
        border-bottom: none;
      }
    }
    &.active {
      .accordions-item__title {
        border-bottom: 0.1rem solid #E1E1E1;
        color: var(--primary-blue);
      }
      svg {
        transform: scale(-1);
        color: var(--primary-blue);
      }
    }
  }
  &-item {
    &__title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 3.1rem 2.4rem;
      background: none;
      border: none;
      border-top: 0.1rem solid #E1E1E1;
      font-weight: 450;
      font-size: 2rem;
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: var(--text-1000);
      transition: color 0.2s;
      cursor: pointer;
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
      @include w1199 {
        padding: 2.5rem 2.4rem;
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
      height: 0;
      padding: 0 2.4rem;
      overflow: hidden;
      transition: height 0.3s;
    }
  }
}
</style>
