<i18n>
{
  "ru": {
    "devices": "Трансляция в режиме online на любом удобном устройстве",
    "info": {
      "title": "Что обеспечит система видеонаблюдения?",
      "items": [
        "Дисциплинирование и мотивацию персонала. Увидите, где сотрудники пренебрегают своими обязанностями и какие ошибки совершают",
        "Сможете обращаться к фактам и наглядно аргументировать позицию при возникновении проблем с подрядчиками",
        "Подключив камеры к контроллеру VMTS, вы сможете отслеживать все ключевые показатели в реальном времени и быстро проверять действия персонала по видео"
      ]
    },
    "kit": {
      "title": "Полный комплект оборудования",
      "items": [
        "Видеокамеры, мобильные видеорегистраторы, а также кабели для подключения",
        "Сервер для хранения и обработки данных",
        "",
        "Экраны в выбранных локациях"
      ]
    },
    "icons": "Отслеживайте, что происходит в кабине экипажа, определяйте причинно-следственные связи и фиксируйте нарушения",
    "conclusion": {
      "title": "Видеонаблюдение — один из элементов по управлению транспортной инфраструктурой. Оно дополняет систему и делает её более комплексной",
      "text": "Но даже без видеозаписи вы можете усовершенствовать регулирование транспортом и сократить расходы на 5-25 % в месяц, внедрив только систему контроля расхода топлива"
    }
  },
  "en": {
    "devices": "Broadcast online on any convenient device",
    "info": {
      "title": "What will the CCTV system provide?",
      "items": [
        "Discipline and motivation of staff. See where employees neglect their duties and what mistakes they make",
        "You will be able to refer to facts and clearly argue your position in case of problems with contractors",
        "By connecting cameras to the VMTS controller, you can monitor all key indicators in real time and quickly check the actions of the staff on video"
      ]
    },
    "kit": {
      "title": "Full set of equipment",
      "items": [
        "Camcorders, mobile video recorders, as well as cables for connecting",
        "Server for data storage and processing",
        "",
        "Screens in selected locations"
      ]
    },
    "icons": "Track what is happening in the cockpit, identify cause-and-effect relationships and fix violations",
    "conclusion": {
      "title": "Video surveillance is one of the elements of transport infrastructure management. It complements the system and makes it more complex.",
      "text": "But even without video recording, you can improve traffic management and reduce costs by 5-25% per month by implementing only a fuel consumption monitoring system."
    }
  }
}
</i18n>

<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage"/>
    <section class="section-margin devices">
      <h2 class="title devices__title">{{ $t('devices') }}</h2>
      <div class="devices__icons">
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="79" height="79" rx="39.5" fill="white" stroke="#E1E1E1"/>
          <path d="M22.9004 52.7992L22.3004 52.3492C22.1299 52.5765 22.1025 52.8805 22.2296 53.1346C22.3566 53.3887 22.6163 53.5492 22.9004 53.5492V52.7992ZM58.1004 52.7992V53.5492C58.3845 53.5492 58.6442 53.3887 58.7712 53.1346C58.8983 52.8805 58.8708 52.5765 58.7004 52.3492L58.1004 52.7992ZM30.9004 27.9492H50.1004V26.4492H30.9004V27.9492ZM52.5504 30.3992V46.3992H54.0504V30.3992H52.5504ZM53.3004 45.6492H27.7004V47.1492H53.3004V45.6492ZM28.4504 46.3992V30.3992H26.9504V46.3992H28.4504ZM27.1004 45.9492L22.3004 52.3492L23.5004 53.2492L28.3004 46.8492L27.1004 45.9492ZM22.9004 53.5492H58.1004V52.0492H22.9004V53.5492ZM58.7004 52.3492L53.9004 45.9492L52.7004 46.8492L57.5004 53.2492L58.7004 52.3492ZM50.1004 27.9492C51.4535 27.9492 52.5504 29.0461 52.5504 30.3992H54.0504C54.0504 28.2177 52.2819 26.4492 50.1004 26.4492V27.9492ZM30.9004 26.4492C28.7189 26.4492 26.9504 28.2177 26.9504 30.3992H28.4504C28.4504 29.0461 29.5473 27.9492 30.9004 27.9492V26.4492Z" fill="#183FE7"/>
        </svg>
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="79" height="79" rx="39.5" fill="white" stroke="#E1E1E1"/>
          <path d="M38.9004 50.4504C38.4862 50.4504 38.1504 50.7862 38.1504 51.2004C38.1504 51.6146 38.4862 51.9504 38.9004 51.9504V50.4504ZM42.1004 51.9504C42.5146 51.9504 42.8504 51.6146 42.8504 51.2004C42.8504 50.7862 42.5146 50.4504 42.1004 50.4504V51.9504ZM34.1004 23.1504H46.9004V21.6504H34.1004V23.1504ZM49.3504 25.6004V54.4004H50.8504V25.6004H49.3504ZM31.6504 54.4004V25.6004H30.1504V54.4004H31.6504ZM46.9004 56.8504H34.1004V58.3504H46.9004V56.8504ZM38.9004 51.9504H42.1004V50.4504H38.9004V51.9504ZM30.1504 54.4004C30.1504 56.5819 31.9189 58.3504 34.1004 58.3504V56.8504C32.7473 56.8504 31.6504 55.7535 31.6504 54.4004H30.1504ZM49.3504 54.4004C49.3504 55.7535 48.2535 56.8504 46.9004 56.8504V58.3504C49.0819 58.3504 50.8504 56.5819 50.8504 54.4004H49.3504ZM46.9004 23.1504C48.2535 23.1504 49.3504 24.2473 49.3504 25.6004H50.8504C50.8504 23.4189 49.0819 21.6504 46.9004 21.6504V23.1504ZM34.1004 21.6504C31.9189 21.6504 30.1504 23.4189 30.1504 25.6004H31.6504C31.6504 24.2473 32.7473 23.1504 34.1004 23.1504V21.6504Z" fill="#183FE7"/>
        </svg>
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="79" height="79" rx="39.5" fill="white" stroke="#E1E1E1"/>
          <path d="M38.8992 50.4504C38.485 50.4504 38.1492 50.7862 38.1492 51.2004C38.1492 51.6146 38.485 51.9504 38.8992 51.9504V50.4504ZM42.0992 51.9504C42.5134 51.9504 42.8492 51.6146 42.8492 51.2004C42.8492 50.7862 42.5134 50.4504 42.0992 50.4504V51.9504ZM30.8992 23.1504H50.0992V21.6504H30.8992V23.1504ZM52.5492 25.6004V54.4004H54.0492V25.6004H52.5492ZM28.4492 54.4004V25.6004H26.9492V54.4004H28.4492ZM50.0992 56.8504H30.8992V58.3504H50.0992V56.8504ZM38.8992 51.9504H42.0992V50.4504H38.8992V51.9504ZM26.9492 54.4004C26.9492 56.5819 28.7177 58.3504 30.8992 58.3504V56.8504C29.5461 56.8504 28.4492 55.7535 28.4492 54.4004H26.9492ZM52.5492 54.4004C52.5492 55.7535 51.4523 56.8504 50.0992 56.8504V58.3504C52.2807 58.3504 54.0492 56.5819 54.0492 54.4004H52.5492ZM50.0992 23.1504C51.4523 23.1504 52.5492 24.2473 52.5492 25.6004H54.0492C54.0492 23.4189 52.2807 21.6504 50.0992 21.6504V23.1504ZM30.8992 21.6504C28.7177 21.6504 26.9492 23.4189 26.9492 25.6004H28.4492C28.4492 24.2473 29.5461 23.1504 30.8992 23.1504V21.6504Z" fill="#183FE7"/>
        </svg>
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="79" height="79" rx="39.5" fill="white" stroke="#E1E1E1"/>
          <path d="M46.9004 55.1496C47.3146 55.1496 47.6504 54.8138 47.6504 54.3996C47.6504 53.9854 47.3146 53.6496 46.9004 53.6496V55.1496ZM34.1004 53.6496C33.6862 53.6496 33.3504 53.9854 33.3504 54.3996C33.3504 54.8138 33.6862 55.1496 34.1004 55.1496V53.6496ZM26.1004 26.3496H54.9004V24.8496H26.1004V26.3496ZM57.3504 28.7996V44.7996H58.8504V28.7996H57.3504ZM23.6504 44.7996V28.7996H22.1504V44.7996H23.6504ZM54.9004 47.2496H40.5004V48.7496H54.9004V47.2496ZM40.5004 47.2496H26.1004V48.7496H40.5004V47.2496ZM39.7504 47.9996V54.3996H41.2504V47.9996H39.7504ZM40.5004 55.1496H46.9004V53.6496H40.5004V55.1496ZM40.5004 53.6496H34.1004V55.1496H40.5004V53.6496ZM22.1504 44.7996C22.1504 46.9811 23.9189 48.7496 26.1004 48.7496V47.2496C24.7473 47.2496 23.6504 46.1527 23.6504 44.7996H22.1504ZM57.3504 44.7996C57.3504 46.1527 56.2535 47.2496 54.9004 47.2496V48.7496C57.0819 48.7496 58.8504 46.9811 58.8504 44.7996H57.3504ZM54.9004 26.3496C56.2535 26.3496 57.3504 27.4465 57.3504 28.7996H58.8504C58.8504 26.6181 57.0819 24.8496 54.9004 24.8496V26.3496ZM26.1004 24.8496C23.9189 24.8496 22.1504 26.6181 22.1504 28.7996H23.6504C23.6504 27.4465 24.7473 26.3496 26.1004 26.3496V24.8496Z" fill="#183FE7"/>
        </svg>
      </div>
    </section>
    <hr class="section-margin">
    <section class="section-margin info">
      <h2 class="title info__title">{{ $t('info.title') }}</h2>
      <ul class="info__list">
        <li v-for="(item, index) in $t('info.items')" :key="index" class="info__item">
          {{ item }}
        </li>
      </ul>
      <img src="/images/development/cctv-info.jpg" :alt="$t('info.title')" class="info__img">
    </section>
    <section class="section-margin full-wide kit">
      <h2 class="title kit__title">{{ $t('kit.title') }}</h2>
      <ul class="kit__list">
        <li v-for="(item, index) in $t('kit.items')" :key="index" class="kit__item">
          <img :src="`/images/icons/cctv-kit${++index}.svg`" :alt="item" class="kit-item__icon">
          <p class="kit-item__text">{{ item }}</p>
        </li>
      </ul>
    </section>
    <div class="section-margin icons">
      <div class="icons__row">
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
      <p class="icons__text">{{ $t('icons') }}</p>
    </div>
    <hr class="section-margin">
    <div class="section-margin conclusion">
      <h2 class="title conclusion__title">{{ $t('conclusion.title') }}</h2>
      <p class="conclusion__text">{{ $t('conclusion.text') }}</p>
    </div>
    <GeneralForm/>
    <DevelopmentOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'CctvPage',
  data () {
    return {
      page: 'cctv',
      bannerImage: '/images/development/cctv-banner.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.devices {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__title {
    max-width: 70rem;
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__icons {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 3.9rem;
    @include w767 {
      grid-template-columns: repeat(2, auto);
      grid-gap: 1.6rem;
    }
  }
}
.info {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__list {
    counter-reset: item;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.4rem;
    margin-bottom: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      margin-right: calc(-1 * var(--container-padding));
      margin-bottom: 1.4rem;
      margin-left: calc(-1 * var(--container-padding));
      padding-right: var(--container-padding);
      padding-bottom: 1rem;
      padding-left: var(--container-padding);
      overflow-x: auto;
    }
    @include w767 {
      grid-template-columns: auto;
      grid-gap: 1.6rem;
      margin: 0 0 1.6rem;
      padding: 0;
      overflow: visible;
    }
  }
  &__item {
    height: 24.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3.1rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    color: var(--text-700);
    @include w1199 {
      width: 42.4rem;
    }
    @include w767 {
      width: auto;
      height: auto;
      padding: 2.3rem;
    }
    &:before {
      counter-increment: item;
      content: "0" counter(item);
      width: 5rem;
      height: 5rem;
      margin-bottom: auto;
      padding-top: 1rem;
      border-radius: 50%;
      background-color: var(--text-200);
      text-align: center;
      font-size: 2rem;
      line-height: 1.4;
      color: var(--primary-blue);
      @include w767 {
        margin-bottom: 3.2rem;
      }
    }
  }
  &__img {
    width: 100%;
    border-radius: 1.6rem;
    object-fit: cover;
    @include w767 {
      height: 38rem;
    }
  }
}
.kit {
  padding-top: var(--section-margin);
  padding-bottom: var(--section-margin);
  background-color: var(--text-200);
  &__title {
    margin-top: 0;
    margin-bottom: 3.9rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-columns: 21.6rem 1fr;
      grid-gap: 4rem;
    }
    @include w767 {
      grid-template-columns: auto;
    }
  }
  &__item {
    position: relative;
    @include w1199 {
      display: flex;
      align-items: center;
    }
    &:nth-child(1),
    &:nth-child(2) {
      @include w1199 {
        grid-column: span 2;
      }
      @include w767 {
        grid-column: auto;
      }
      &:before {
        @include w1199 {
          top: 100%;
          left: 4.5rem;
          width: 0.6rem;
          height: 4rem;
          background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
        }
        @include w359 {
          left: 2.9rem;
        }
      }
    }
    &:nth-child(4) {
      &:before {
        display: none;
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 4.1rem;
      left: 8.8rem;
      width: calc(100% - 6.4rem);
      height: 0.6rem;
      background: url('/images/icons/gray-arrow-right.svg') right center/cover no-repeat;
      @include w1199 {
        top: 4.6rem;
        left: 9.6rem;
        width: calc(100% - 5.6rem);
      }
      @include w767 {
        top: 100%;
        left: 4.5rem;
        width: 0.6rem;
        height: 4rem;
        background: url('/images/icons/gray-arrow-bot.svg') center bottom/cover no-repeat;
      }
      @include w359 {
        left: 2.9rem;
      }
    }
  }
  &-item {
    &__icon {
      flex-shrink: 0;
      width: 8.8rem;
      height: auto;
      margin-bottom: 2rem;
      @include w1199 {
        width: 9.6rem;
        margin-right: 2.4rem;
        margin-bottom: 0;
      }
      @include w359 {
        width: 6.4rem;
      }
    }
    &__text {
      max-width: 33rem;
      color: var(--text-700);
      @include w1199 {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.71;
        letter-spacing: normal;
      }
      @include w359 {
        line-height: 1.5;
      }
    }
  }
}
.icons {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 4rem 2.4rem;
  @include w1199 {
    grid-template-columns: auto;
  }
  @include w767 {
    grid-gap: 2rem;
  }
  &__row {
    grid-column: 1 / 6;
    display: flex;
    align-items: center;
    @include w1199 {
      grid-column: auto;
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
    grid-column: 7 / 13;
    font-size: 2.4rem;
    line-height: 1.33;
    color: var(--text-1000);
    letter-spacing: -0.03em;
    @include w1199 {
      grid-column: auto;
      max-width: 50rem;
    }
    @include w767 {
      font-size: 2rem;
      line-height: 1.4;
    }
  }
}
.conclusion {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__title {
    max-width: 98rem;
    margin-top: 0;
    margin-bottom: 4rem;
    @include w1199 {
      margin-bottom: 2rem;
    }
    @include w767 {
      font-size: 2rem;
      line-height: 1.4;
    }
  }
  &__text {
    max-width: 71rem;
    color: var(--text-700);
    @include w1199 {
      max-width: 57rem;
    }
  }
}
</style>
