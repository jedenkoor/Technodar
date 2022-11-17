<template>
  <main class="content">
    <GeneralBannerWithBlueBlock :page="page" :slides="bannerSlides" :is-slider="false"/>
    <GeneralSolutionSlider :slides="solutionsSlider" />
    <IndustriesLoss :losses="lossSlider" :margin-none="true" :header="LossHead" />
    <IndustriesWhyChooseSystem />
    <IndustriesIndustry3ColumnsBlock />
    <GeneralGridSolutions :header="SystemComplexHead" />
    <IndustriesTurnkey />
    <IndustriesFAQ :faqs="FaqList"/>
    <GeneralSmallBlueRow />
  </main>
</template>

<script>
export default {
  name: 'AutoPage',
  data () {
    return {
      page: 'auto',
      bannerSlides: [
        '/images/industries/banner_tractor.png'
      ],
      solutionsSlider: [
        {
          title: 'Iveco Daily Малотоннажный грузовик',
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
                  title: 'Терминал-регистратор',
                  desc: 'Arnavi'
                },
                {
                  title: 'Бесконтактный считыватель CAN-шины',
                  desc: ''
                },
                {
                  title: 'Универсальный программируемый контроллер CAN-шины',
                  desc: 'CAN-LOG'
                }
              ]
            }
          ],
          profits: [
            {
              title: '1379',
              sub: 'л/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '1254',
              sub: 'л/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '125',
              sub: 'л/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/industries/solutions/slide_auto-1.jpg'
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
                  title: 'Терминал-регистратор',
                  desc: 'Arnavi'
                },
                {
                  title: 'Бесконтактный считыватель CAN-шины',
                  desc: ''
                },
                {
                  title: 'Универсальный программируемый контроллер CAN-шины',
                  desc: 'CAN-LOG'
                }
              ]
            }
          ],
          profits: [
            {
              title: '1379',
              sub: 'л/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '1254',
              sub: 'л/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '125',
              sub: 'л/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/industries/solutions/slide_auto-1.jpg'
        }
      ],
      LossHead: {
        title1: 'Автовладельцы теряют',
        title2: 'до 1 500 000 рублей в месяц'
      },
      lossSlider: [
        {
          title: 'Учет',
          text: 'Системы фактического расхода топлива отсутствуют',
          loss: '200 000 ₽/мес.'
        },
        {
          title: 'Тайтл 2',
          text: 'Описание 2',
          loss: '20 000 ₽/мес.'
        },
        {
          title: 'Тайтл 3',
          text: 'Описание 3',
          loss: '30 000 ₽/мес.'
        },
        {
          title: 'Тайтл 4',
          text: 'Описание 4',
          loss: '40 000 ₽/мес.'
        },
        {
          title: 'Тайтл 5',
          text: 'Описание 5',
          loss: '50 000 ₽/мес.'
        },
        {
          title: 'Тайтл 6',
          text: 'Описание 6',
          loss: '60 000 ₽/мес.'
        },
        {
          title: 'Тайтл 7',
          text: 'Описание 7',
          loss: '70 000 ₽/мес.'
        },
        {
          title: 'Тайтл 8',
          text: 'Описание 8',
          loss: '80 000 ₽/мес.'
        },
        {
          title: 'Тайтл 9',
          text: 'Описание 9',
          loss: '90 000 ₽/мес.'
        }
      ],
      SystemComplexHead: {
        title: 'Комплекс систем для решения задач',
        text: 'Комлпексная система закрывающая проблемы судовладельцев'
      },
      FaqList: [
        {
          q: 'Можно ли установить систему, если судно находится далеко?',
          a: 'Да, мы установим даже во Владивостоке'
        },
        {
          q: 'Техническая документация',
          a: 'Ответ'
        },
        {
          q: 'Согласование с органами',
          a: 'Ответ'
        },
        {
          q: 'Реализация решения',
          a: 'Ответ'
        }
      ]
    }
  }
}
</script>
