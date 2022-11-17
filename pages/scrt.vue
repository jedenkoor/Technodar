<i18n>
{
  "ru": {
    "problems": {
      "title": "Система контроля расхода топлива Технодар решает частые проблемы",
      "items": [
        {
          "name": "Мошенничество персонала",
          "items": [
            "Подрядчики умышленно недоливают топливо",
            "Сотрудники завышают количество полученного топлива",
            "Персонал сливает топливо и перепродает его"
          ]
        },
        {
          "name": "Эксплуатация",
          "items": [
            "Двигатель работает на предельной мощности и быстрее ломается",
            "Нет данных о точном расходе каждого потребителя отдельно",
            "Данные о количестве топлива фиксируются с погрешностью"
          ]
        },
        {
          "name": "Разрозненность статистики",
          "items": [
            "Отсутствует единая система учета",
            "При ручном учете расхода возникают ошибки и искажения",
            "Не получается настроить режимы эксплуатации без фактических данных о расходе"
          ]
        }
      ]
    },
    "help": {
      "title": "Чем поможет комплексное решение",
      "items": [
        "Экономьте на топливе от 5 до 30% в месяц",
        "Планируйте закупку топлива на месяцы вперед",
        "Избегайте моментов сверхпотребления топлива",
        "Дисциплинируйте персонал",
        "Экономьте на топливе от 5 до 30% в месяц",
        "Планируйте закупку топлива на месяцы вперед"
      ]
    },
    "devices": "Информация передается в режиме реального времени на удобное устройство",
    "icons": {
      "title": "Экономия всего 5% на топливе в масштабах флота или целого автопарка превращается в миллионы рублей экономии",
      "text": "От 3 до 6 месяцев - столько времени вам понадобится, чтобы полностью окупить систему контроля расходов топлива"
    },
    "system": {
      "title": "Кому подойдет система?",
      "items": [
        "Морские и речные суда",
        "Железнодорожный транспорт",
        "Автотранспорт",
        "Буровые установки"
      ]
    }
  },
  "en": {
    "problems": {
      "title": "Fuel consumption monitoring system Technodar solves common problems",
      "items": [
        {
          "name": "Personnel Fraud",
          "items": [
            "Contractors deliberately underfill fuel",
            "Employees overestimate the amount of fuel received",
            "The staff drains the fuel and resells it"
          ]
        },
        {
          "name": "Exploitation",
          "items": [
            "The engine runs at maximum power and breaks down faster",
            "There is no data on the exact consumption of each consumer separately",
            "Data on the amount of fuel are recorded with an error"
          ]
        },
        {
          "name": "Fragmentation of statistics",
          "items": [
            "There is no unified accounting system",
            "When manually accounting for consumption, errors and distortions occur",
            "Unable to set operating modes without actual flow data"
          ]
        }
      ]
    },
    "help": {
      "title": "How a comprehensive solution can help",
      "items": [
        "Save on fuel from 5 to 30% per month",
        "Plan your fuel purchases months in advance",
        "Avoid moments of overconsumption of fuel",
        "Discipline your staff",
        "Save on fuel from 5 to 30% per month",
        "Plan your fuel purchases months in advance"
      ]
    },
    "devices": "Information is transmitted in real time to a convenient device",
    "icons": {
      "title": "Saving just 5% on fuel on a fleet or fleet scale turns into millions of rubles in savings",
      "text": "From 3 to 6 months - this is how long it will take you to fully pay for the fuel management system"
    },
    "system": {
      "title": "Who is the system for?",
      "items": [
        "Sea and river vessels",
        "Railway transport",
        "Motor transport",
        "Drilling rigs"
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
        <li v-for="(problem, problemIndex) in $t('problems.items')" :key="problemIndex" class="problems__item">
          <div class="problems-item__top">
            <img :src="`/images/icons/scrt${++problemIndex}.svg`" :alt="problem.name">
            <h2 class="problems-item__name">{{ problem.name }}</h2>
          </div>
          <ul class="problems-item__list">
            <li v-for="(text, textIndex) in problem.items" :key="textIndex" class="problems-item__text">
              {{ text }}
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section class="section-margin full-wide help">
      <h2 class="title help__title">{{ $t('help.title') }}</h2>
      <div v-swiper:swiper="swiperOptions" class="help__slider">
        <div class="swiper-wrapper">
          <div v-for="(slide, index) in $t('help.items')" :key="index" class="swiper-slide help__slide">
            {{ slide }}
          </div>
        </div>
        <div class="help__navigations" ref="navigations">
          <button class="help__arr help__arr--prev">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="help__arr help__arr--next">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L16 12L8 4" stroke="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
    <GeneralScheme4ColInRow :page="page"/>
    <hr class="section-margin">
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
    <GeneralSmallBlueRow/>
    <section class="section-margin full-wide icons">
      <div class="icons__row">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="96" height="96" rx="48" fill="white"/>
          <path d="M49.4 34V33.25C48.9858 33.25 48.65 33.5858 48.65 34H49.4ZM62 46.6V47.35C62.4142 47.35 62.75 47.0142 62.75 46.6H62ZM49.4 46.6H48.65C48.65 47.0142 48.9858 47.35 49.4 47.35V46.6ZM58.45 49.4C58.45 55.9446 53.1446 61.25 46.6 61.25V62.75C53.973 62.75 59.95 56.773 59.95 49.4H58.45ZM46.6 61.25C40.0554 61.25 34.75 55.9446 34.75 49.4H33.25C33.25 56.773 39.227 62.75 46.6 62.75V61.25ZM34.75 49.4C34.75 42.8554 40.0554 37.55 46.6 37.55V36.05C39.227 36.05 33.25 42.027 33.25 49.4H34.75ZM49.4 34.75C55.9446 34.75 61.25 40.0554 61.25 46.6H62.75C62.75 39.227 56.773 33.25 49.4 33.25V34.75ZM48.65 34V37.1122H50.15V34H48.65ZM48.65 37.1122V46.6H50.15V37.1122H48.65ZM46.6 37.55C47.5061 37.55 48.3876 37.6516 49.234 37.8436L49.566 36.3808C48.6114 36.1642 47.6186 36.05 46.6 36.05V37.55ZM58.1564 46.766C58.3484 47.6124 58.45 48.4939 58.45 49.4H59.95C59.95 48.3814 59.8358 47.3886 59.6192 46.434L58.1564 46.766ZM49.4 47.35H58.8878V45.85H49.4V47.35ZM58.8878 47.35H62V45.85H58.8878V47.35Z" fill="#1333BB"/>
        </svg>
        <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="#C6C6C6"/>
        </svg>
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="96" height="96" rx="48" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M57.0303 39.4697C57.3232 39.7626 57.3232 40.2374 57.0303 40.5303L40.5303 57.0303C40.2374 57.3232 39.7626 57.3232 39.4697 57.0303L30.4697 48.0303C30.1768 47.7374 30.1768 47.2626 30.4697 46.9697C30.7626 46.6768 31.2374 46.6768 31.5303 46.9697L40 55.4393L42.6893 52.75L37.9697 48.0303C37.6768 47.7374 37.6768 47.2626 37.9697 46.9697C38.2626 46.6768 38.7374 46.6768 39.0303 46.9697L43.75 51.6893L55.9697 39.4697C56.2626 39.1768 56.7374 39.1768 57.0303 39.4697ZM64.5303 39.4697C64.8232 39.7626 64.8232 40.2374 64.5303 40.5303L48.0303 57.0303C47.7374 57.3232 47.2626 57.3232 46.9697 57.0303C46.6768 56.7374 46.6768 56.2626 46.9697 55.9697L63.4697 39.4697C63.7626 39.1768 64.2374 39.1768 64.5303 39.4697Z" fill="#1333BB"/>
        </svg>
      </div>
      <div class="icons__content">
        <h3 class="icons__title">{{ $t('icons.title') }}</h3>
        <p class="icons__text">{{ $t('icons.text') }}</p>
      </div>
    </section>
    <section class="section-margin system">
      <h2 class="title system__title">{{ $t('system.title') }}</h2>
      <ul class="system__list">
        <li v-for="(item, index) in $t('system.items')" :key="index" class="system__item">
          <NuxtLink :to="systemLinks[index]" class="system-item__link">
            <img v-lazy-load :data-src="`/images/production/scrt-system${++index}.png`" class="system-item__img" :alt="item">
            <span class="system-item__title">{{ item }}</span>
            <div class="icon system-item__arr">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12L16.5303 12.5303L17.0607 12L16.5303 11.4697L16 12ZM8.53033 20.5303L16.5303 12.5303L15.4697 11.4697L7.46967 19.4697L8.53033 20.5303ZM16.5303 11.4697L8.53033 3.46967L7.46967 4.53033L15.4697 12.5303L16.5303 11.4697Z" fill="#1333BB"/>
              </svg>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <hr class="section-margin hr">
    <GeneralSolutionSlider :slides="solutionsSlider"/>
    <GeneralForm/>
    <ProductionOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'ScrtPage',
  data () {
    return {
      page: 'scrt',
      bannerImage: '/images/production/scrt.jpg',
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.help__arr--prev',
          nextEl: '.help__arr--next'
        }
      },
      solutionsSlider: [
        {
          title: 'Проект H3290 Буксир-толкач',
          summary: [
            {
              title: 'Решенные задачи',
              details: [
                {
                  title: 'Общие',
                  desc: 'Оптимизация работы'
                },
                {
                  title: 'Дополнительные',
                  desc: 'Экономическая выгода'
                }
              ]
            },
            {
              title: 'Установленное оборудование',
              details: [
                {
                  title: 'Общие',
                  desc: 'Бортовой контроллер - 1 шт.'
                },
                {
                  title: 'Главный двигатель 1,2',
                  desc: 'Расходомер Sekee FM20 - 4 шт.\n Датчик оборотов - 2 шт.\nДизельный генератор 1,2,3:\nРасходомер Sekee FM10 - 3 шт.\nДатчик режимов работы котла - 3 шт.'
                },
                {
                  title: 'Котел',
                  desc: 'Расходомер Sekee FM10 - 1 шт.\nДатчик режимов работы котла - 1 шт'
                },
                {
                  title: 'Механизм',
                  desc: 'Установленное\nоборудование'
                }
              ]
            }
          ],
          profits: [
            {
              title: '47,4',
              sub: 'т/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '43,1',
              sub: 'т/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '4,3',
              sub: 'т/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/industries/solutions/slide_1.jpg'
        },
        {
          title: 'Тайтл Слайд2',
          summary: [
            {
              title: 'Решенные задачи',
              details: [
                {
                  title: 'Общие',
                  desc: 'Оптимизация работы'
                },
                {
                  title: 'Дополнительные',
                  desc: 'Экономическая выгода'
                }
              ]
            },
            {
              title: 'Установленное оборудование',
              details: [
                {
                  title: 'Общие',
                  desc: 'Бортовой контроллер - 1 шт.'
                },
                {
                  title: 'Главный двигатель 1,2',
                  desc: 'Расходомер Sekee FM20 - 4 шт.\n Датчик оборотов - 2 шт.\nДизельный генератор 1,2,3:\nРасходомер Sekee FM10 - 3 шт.\nДатчик режимов работы котла - 3 шт.'
                },
                {
                  title: 'Котел',
                  desc: 'Расходомер Sekee FM10 - 1 шт.\nДатчик режимов работы котла - 1 шт'
                },
                {
                  title: 'Механизм',
                  desc: 'Установленное\nоборудование'
                }
              ]
            }
          ],
          profits: [
            {
              title: '47,4',
              sub: 'т/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '43,1',
              sub: 'т/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '4,3',
              sub: 'т/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/industries/solutions/slide_1.jpg'
        },
        {
          title: 'Тайтл Слайд3',
          summary: [
            {
              title: 'Решенные задачи',
              details: [
                {
                  title: 'Общие',
                  desc: 'Оптимизация работы'
                },
                {
                  title: 'Дополнительные',
                  desc: 'Экономическая выгода'
                }
              ]
            },
            {
              title: 'Установленное оборудование',
              details: [
                {
                  title: 'Общие',
                  desc: 'Бортовой контроллер - 1 шт.'
                },
                {
                  title: 'Главный двигатель 1,2',
                  desc: 'Расходомер Sekee FM20 - 4 шт.\n Датчик оборотов - 2 шт.\nДизельный генератор 1,2,3:\nРасходомер Sekee FM10 - 3 шт.\nДатчик режимов работы котла - 3 шт.'
                },
                {
                  title: 'Котел',
                  desc: 'Расходомер Sekee FM10 - 1 шт.\nДатчик режимов работы котла - 1 шт'
                },
                {
                  title: 'Механизм',
                  desc: 'Установленное\nоборудование'
                }
              ]
            }
          ],
          profits: [
            {
              title: '47,4',
              sub: 'т/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '43,1',
              sub: 'т/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '4,3',
              sub: 'т/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/industries/solutions/slide_1.jpg'
        },
        {
          title: 'Тайтл Слайд4',
          summary: [
            {
              title: 'Решенные задачи',
              details: [
                {
                  title: 'Общие',
                  desc: 'Оптимизация работы'
                },
                {
                  title: 'Дополнительные',
                  desc: 'Экономическая выгода'
                }
              ]
            },
            {
              title: 'Установленное оборудование',
              details: [
                {
                  title: 'Общие',
                  desc: 'Бортовой контроллер - 1 шт.'
                },
                {
                  title: 'Главный двигатель 1,2',
                  desc: 'Расходомер Sekee FM20 - 4 шт.\n Датчик оборотов - 2 шт.\nДизельный генератор 1,2,3:\nРасходомер Sekee FM10 - 3 шт.\nДатчик режимов работы котла - 3 шт.'
                },
                {
                  title: 'Котел',
                  desc: 'Расходомер Sekee FM10 - 1 шт.\nДатчик режимов работы котла - 1 шт'
                },
                {
                  title: 'Механизм',
                  desc: 'Установленное\nоборудование'
                }
              ]
            }
          ],
          profits: [
            {
              title: '47,4',
              sub: 'т/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '43,1',
              sub: 'т/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '4,3',
              sub: 'т/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/index/promo.jpg'
        },
        {
          title: 'Тайтл Слайд5',
          summary: [
            {
              title: 'Решенные задачи',
              details: [
                {
                  title: 'Общие',
                  desc: 'Оптимизация работы'
                },
                {
                  title: 'Дополнительные',
                  desc: 'Экономическая выгода'
                }
              ]
            },
            {
              title: 'Установленное оборудование',
              details: [
                {
                  title: 'Общие',
                  desc: 'Бортовой контроллер - 1 шт.'
                },
                {
                  title: 'Главный двигатель 1,2',
                  desc: 'Расходомер Sekee FM20 - 4 шт.\n Датчик оборотов - 2 шт.\nДизельный генератор 1,2,3:\nРасходомер Sekee FM10 - 3 шт.\nДатчик режимов работы котла - 3 шт.'
                },
                {
                  title: 'Котел',
                  desc: 'Расходомер Sekee FM10 - 1 шт.\nДатчик режимов работы котла - 1 шт'
                },
                {
                  title: 'Механизм',
                  desc: 'Установленное\nоборудование'
                }
              ]
            }
          ],
          profits: [
            {
              title: '47,4',
              sub: 'т/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '43,1',
              sub: 'т/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '4,3',
              sub: 'т/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/industries/solutions/slide_1.jpg'
        }
      ],
      systemLinks: [
        '#',
        '#',
        '#',
        '#'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.problems {
  &__title {
    max-width: 72rem;
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      display: flex;
      grid-gap: 0;
      margin: 0 calc(-1 * var(--container-padding));
      padding: 0 var(--container-padding);
      overflow-x: auto;
    }
  }
  &__item {
    padding: 3.1rem;
    background-color: var(--text-100);
    border: 0.1rem solid var(--text-200);
    border-radius: 1.6rem;
    @include w1199 {
      flex: 0 0 41.4rem;
    }
    @include w767 {
      flex: 0 0 32.8rem;
      padding: 2.3rem;
    }
    &:not(:last-child) {
      @include w1199 {
        margin-right: 2.4rem;
      }
      @include w767 {
        margin-right: 1.6rem;
      }
    }
  }
  &-item {
    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 3.2rem;
      padding-bottom: 3.1rem;
      border-bottom: 0.1rem solid var(--text-300);
      @include w767 {
        margin-bottom: 2.4rem;
        padding-bottom: 2.3rem;
      }
      img {
        width: 8rem;
        height: auto;
        margin-right: 2rem;
      }
    }
    &__name {
      max-width: 24rem;
      margin: 0;
      font-weight: 450;
      font-size: 2rem;
      line-height: 1.4;
      letter-spacing: -0.03em;
      color: var(--text-1000);
    }
    &__list {
      padding-left: 0;
      list-style: none;
    }
    &__text {
      position: relative;
      max-width: 31rem;
      padding-left: 1.6rem;
      color: var(--text-700);
      &:not(:last-child) {
        margin-bottom: 2.4rem;
      }
      &:before {
        content: '';
        position: absolute;
        top: 1rem;
        left: 0.1rem;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background-color: var(--text-1000);
      }
    }
  }
}
.help {
  counter-reset: item;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: var(--text-200);
  overflow: hidden;
  @include w767 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
    @include w1023 {
      margin-bottom: 13rem;
    }
    @include w767 {
      margin-bottom: 9rem;
    }
  }
  &__slider {
    overflow: visible;
  }
  &__slide {
    width: 31.2rem;
    height: 31.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.4rem;
    background: var(--text-000);
    border-radius: 1.6rem;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -0.03em;
    color: var(--text-1000);
    @include w767 {
      width: 100%;
      height: auto;
    }
    &:before {
      counter-increment: item;
      content: "0" counter(item);
      width: 5rem;
      height: 5rem;
      padding-top: 1rem;
      border-radius: 50%;
      border: 0.1rem solid var(--text-300);
      text-align: center;
      @include w767 {
        margin-bottom: 3.2rem;
      }
    }
  }
  &__navigations {
    position: absolute;
    top: -9rem;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    @include w1023 {
      right: auto;
      left: 0;
    }
    @include w767 {
      top: -7rem;
    }
  }
  &__arr {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    border: 0.1rem solid var(--text-300);
    background: none;
    cursor: pointer;
    color: var(--text-1000);
    transition: 0.2s;
    @include hover {
      &:hover,
      &:focus {
        color: var(--primary-blue);
        border-color: var(--primary-blue);
      }
      &:active {
        color: var(--text-1000);
        border-color: var(--primary-shadow);
      }
    }
    @include active {
      &:active {
        color: var(--text-1000);
        border-color: var(--primary-shadow);
      }
    }
    &--next {
      margin-left: 1.6rem;
    }
    svg {
      width: 2.4rem;
    }
  }
}
.devices {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__title {
    max-width: 100rem;
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__icons {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 4rem;
    @include w767 {
      grid-template-columns: repeat(2, auto);
      grid-gap: 1.6rem;
    }
  }
}
.icons {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 4rem 2.4rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: var(--text-200);
  @include w1199 {
    grid-template-columns: auto;
  }
  @include w767 {
    grid-gap: 2rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  &__row {
    grid-column: 1 / 6;
    display: flex;
    align-items: center;
    height: max-content;
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
  &__content {
    grid-column: 7 / 12;
    @include w1199 {
      grid-column: auto;
      max-width: 66%;
    }
    @include w767 {
      max-width: none;
    }
  }
  &__title {
    margin-top: 0;
    margin-bottom: 2rem;
    font-weight: 450;
    font-size: 2.4rem;
    line-height: 1.33;
    color: var(--text-1000);
    letter-spacing: -0.03em;
    @include w767 {
      font-size: 2rem;
      line-height: 1.4;
    }
  }
  &__text {
    color: var(--text-700);
  }
}
.system {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40rem 40rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-rows: 30rem 30rem;
    }
    @include w1023 {
      grid-template-rows: 21rem 21rem;
    }
    @include w767 {
      grid-template-columns: auto;
      grid-template-rows: repeat(4, 21rem);
      grid-gap: 1.6rem;
    }
  }
  &-item {
    &__link {
      position: relative;
      height: 100%;
      display: flex;
      padding: 3.2rem;
      background: var(--text-100);
      border: 0.1rem solid var(--text-200);
      border-radius: 1.6rem;
      overflow: hidden;
      @include hover {
        &:hover,
        &:focus {
          .system-item__arr {
            border-color: var(--primary-blue);
          }
        }
        &:active {
          .system-item__arr {
            color: var(--text-1000);
            border-color: var(--primary-shadow);
          }
        }
      }
      @include active {
        &:active {
          .system-item__arr {
            color: var(--text-1000);
            border-color: var(--primary-shadow);
          }
        }
      }
      @include w1023 {
        padding: 1.6rem;
      }
    }
    &__img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 74.3%;
      mix-blend-mode: darken;
      @include w1023 {
        width: 24rem;
      }
    }
    &__title {
      font-size: 2.4rem;
      line-height: 1.33;
      @include w1199 {
        font-size: 2rem;
      }
      @include w1023 {
        font-size: 1.6rem;
        line-height: 1.12;
      }
    }
    &__arr {
      position: absolute;
      bottom: 3.2rem;
      left: 3.2rem;
      background-color: var(--text-000);
      transition: 0.2s;
      @include w1023 {
        bottom: 1.6rem;
        left: 1.6rem;
      }
    }
  }
}
.hr {
  @include w1199 {
    display: none;
  }
}
</style>
