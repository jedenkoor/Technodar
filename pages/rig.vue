<template>
  <main class="content">
    <GeneralBannerWithBlueBlock :page="page" :slides="bannerSlides" :is-slider="false"/>
    <GeneralSolutionSlider :slides="solutionsSlider" />
    <IndustriesLoss :losses="lossSlider" :header="LossHead" />
    <GeneralGridSolutions :header="SystemComplexHead" />
    <IndustriesTurnkey />
    <IndustriesFAQ :faqs="FaqList"/>
    <IndustriesForWho :wholist="ForWhoList" />
    <IndustriesHowItWork />
    <GeneralSystemInterface page="crab" :slides="slides"/>
    <GeneralSmallBlueRow />
  </main>
</template>

<script>
export default {
  name: 'RigPage',
  data () {
    return {
      page: 'rig',
      bannerSlides: [
        '/images/industries/banner_drill.jpg'
      ],
      solutionsSlider: [
        {
          title: 'Проект ZJ-20 №12182 Бр№2',
          summary: [
            {
              title: 'Решенные задачи',
              details: [
                {
                  title: '',
                  desc: 'Запись, хранение и передачу данных в программное обеспечение через регистраторы и сервер сбора данных VMTS'
                },
                {
                  title: '',
                  desc: 'Контроль расхода топлива всех потребителей с привязкой ко времени и месту'
                },
                {
                  title: '',
                  desc: 'Контроль режимов работы потребителей'
                },
                {
                  title: '',
                  desc: 'Контроль времени работы потребителей'
                },
                {
                  title: '',
                  desc: 'Контроль параметров работы двигателей (при наличии CAN-шины)'
                },
                {
                  title: '',
                  desc: 'Возможность удаленной фиксации остатков топлива в емкостях'
                }
              ]
            },
            {
              title: 'Установленное оборудование',
              details: [
                {
                  title: 'Терминал-регистратор',
                  desc: ''
                },
                {
                  title: 'Датчики уровня топлива',
                  desc: '2 шт.'
                },
                {
                  title: 'Расходомер Sekee FM10',
                  desc: '1 шт'
                },
                {
                  title: 'Индуктивный датчик оборотов вала двигателя',
                  desc: '1 шт'
                },
                {
                  title: 'Счетчик моточасов',
                  desc: '1 шт'
                }
              ]
            }
          ],
          profits: [
            {
              title: '12,4',
              sub: 'т/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '11,3',
              sub: 'т/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '1,1',
              sub: 'т/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/industries/solutions/slide_drill-1.jpg'
        },
        {
          title: 'Слайд 2',
          summary: [
            {
              title: 'Решенные задачи',
              details: [
                {
                  title: '',
                  desc: 'Запись, хранение и передачу данных в программное обеспечение через регистраторы и сервер сбора данных VMTS'
                },
                {
                  title: '',
                  desc: 'Контроль расхода топлива всех потребителей с привязкой ко времени и месту'
                },
                {
                  title: '',
                  desc: 'Контроль режимов работы потребителей'
                },
                {
                  title: '',
                  desc: 'Контроль времени работы потребителей'
                },
                {
                  title: '',
                  desc: 'Контроль параметров работы двигателей (при наличии CAN-шины)'
                },
                {
                  title: '',
                  desc: 'Возможность удаленной фиксации остатков топлива в емкостях'
                }
              ]
            },
            {
              title: 'Установленное оборудование',
              details: [
                {
                  title: 'Терминал-регистратор',
                  desc: ''
                },
                {
                  title: 'Датчики уровня топлива',
                  desc: '2 шт.'
                },
                {
                  title: 'Расходомер Sekee FM10',
                  desc: '1 шт'
                },
                {
                  title: 'Индуктивный датчик оборотов вала двигателя',
                  desc: '1 шт'
                },
                {
                  title: 'Счетчик моточасов',
                  desc: '1 шт'
                }
              ]
            }
          ],
          profits: [
            {
              title: '12,4',
              sub: 'т/мес',
              text: 'Расход топлива до установки'
            },
            {
              title: '11,3',
              sub: 'т/мес',
              text: 'Расход топлива после установки'
            },
            {
              title: '1,1',
              sub: 'т/мес',
              text: 'Экономия уже в первый месяц'
            }
          ],
          image: '/images/industries/solutions/slide_drill-1.jpg'
        }
      ],
      LossHead: {
        title1: 'Владельцы установок теряют',
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
        text: 'Комлпексная система закрывающая проблемы владельцев поездов'
      },
      ForWhoList: [
        {
          who: 'Владельцам флота',
          image: '/images/industries/ForWho/1.png'
        },
        {
          who: 'Управляющему компании',
          image: '/images/industries/ForWho/2.png'
        },
        {
          who: 'Экипажу судна',
          image: '/images/industries/ForWho/3.png'
        }
      ],
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
      ],
      slides: [
        {
          image: '/images/general/slides.jpg',
          focusImage: '/images/general/slides-focus.jpg',
          focusImageWidth: '26.4%',
          focusImageTop: '9.3%',
          focusImageLeft: '29.2%',
          hintPositionVertical: 'top',
          hintPositionHorizontal: 'right'
        },
        {
          image: '/images/general/slides.jpg',
          focusImage: '/images/general/slides-focus.jpg',
          focusImageTop: '20%',
          focusImageLeft: '40%',
          hintPositionVertical: 'top',
          hintPositionHorizontal: 'left'
        }
      ]
    }
  }
}
</script>
