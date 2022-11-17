<i18n>
{
  "ru": {
    "top": {
      "title": "Мы уверены, что большая часть успеха компании — это люди, которые в ней работают!",
      "text": "В настоящее время штат сотрудников ГК Технодар насчитывает более 70 человек, которые преимущественно работают в городе Петрозаводске, Республика Карелия."
    },
    "quote": {
      "title": "Технодар – надежный и дружный коллектив профессионалов, который берется за дело и доводит его до конца",
      "text": "С 2006 года карельская компания «Технодар» внедряет собственные разработки в сфере производства оборудования контроля расхода топлива и спутникового мониторинга различных видов транспорта.",
      "author": "Якушев Алексей",
      "position": "Директор",
      "company": "ГК Технодар"
    },
    "items": [
      {
        "name": "Спиридонов Александр Юрьевич",
        "position": "Технический директор"
      },
      {
        "name": "Герасимов Георгий Михайлович",
        "position": "Руководитель проектного отдела"
      },
      {
        "name": "Некрасов Дмитрий Анатольевич",
        "position": "Ведущий инженер"
      },
      {
        "name": "Якушев Андрей Викторович",
        "position": "Руководитель производства"
      },
      {
        "name": "Иванова Елена Владимировна",
        "position": "Руководитель отдела контроля качества и сертификации продукции"
      },
      {
        "name": "Шихалева Елена Викторовна",
        "position": "Исполнительный директор"
      },
      {
        "name": "Кялина Анна Геннадьевна",
        "position": "Руководитель коммерческого отдела"
      },
      {
        "name": "Жуков Артём Владимирович",
        "position": "IT-директор"
      },
      {
        "name": "Анисимова Ирина Григорьевна",
        "position": "Руководитель аналитического отдела"
      }
    ],
    "info": {
      "title": "И еще 60 профессиональных специалистов, в том числе",
      "text": "<p>Проектные инженеры, диспетчеры-аналитики, сотрудники производственного отдела, специалисты IT-отдела и мастера установщики, обладающие высоким уровнем квалификации и наличием специализированного образования</p><p>Благодаря офис-менеджерам, маркетологам и менеджерам по продажам мы успешно осуществляем коммерческую и административно-управленческую деятельность</p><p>Также ГК Технодар располагает собственными производственными и офисными помещениями, мастерской-лабораторией для диагностики оборудования, складами и автопарком</p>"
    }
  },
  "en": {
    "top": {
      "title": "We believe that a big part of a company's success is the people who work for it!",
      "text": "Currently, the staff of Technodar Group of Companies has more than 70 people who mainly work in the city of Petrozavodsk, the Republic of Karelia."
    },
    "quote": {
      "title": "Technodar is a reliable and friendly team of professionals who gets down to business and brings it to the end",
      "text": "Since 2006, the Karelian company Tekhnodar has been implementing its own developments in the production of fuel consumption control equipment and satellite monitoring of various types of transport.",
      "author": "Yakushev Alexey",
      "position": "Director",
      "company": "GK Technodar"
    },
    "items": [
      {
        "name": "Spiridonov Alexander Yurievich",
        "position": "Technical Director"
      },
      {
        "name": "Gerasimov Georgy Mikhailovich",
        "position": "Head of project department"
      },
      {
        "name": "Nekrasov Dmitry Anatolievich",
        "position": "Lead Engineer"
      },
      {
        "name": "Yakushev Andrey Viktorovich",
        "position": "Production manager"
      },
      {
        "name": "Ivanova Elena Vladimirovna",
        "position": "Head of Quality Control and Product Certification Department"
      },
      {
        "name": "Shikhaleva Elena Viktorovna",
        "position": "Executive Director"
      },
      {
        "name": "Kalina Anna Gennadievna",
        "position": "Head of commercial department"
      },
      {
        "name": "Zhukov Artyom Vladimirovich",
        "position": "IT director"
      },
      {
        "name": "Anisimova Irina Grigorievna",
        "position": "Head of Analytical Department"
      }
    ],
    "info": {
      "title": "And another 60 professional specialists, including",
      "text": "<p>Project engineers, dispatchers-analysts, employees of the production department, specialists of the IT department and installers with a high level of qualification and specialized education</p><p>Thanks to office managers, marketers and sales managers, we successfully implement commercial and administrative and managerial activities</p><p>Technodar also has its own production and office premises, a workshop-laboratory for equipment diagnostics, warehouses and a vehicle fleet</p>"
    }
  }
}
</i18n>

<template>
  <main class="content full-wide white-footer team">
    <div class="section-margin team__top">
      <h1 class="title team-top__title">{{ $t('top.title') }}</h1>
      <p class="team-top__text">{{ $t('top.text') }}</p>
    </div>
    <div class="section-margin team__quote">
      <img src="/images/team/team-main.jpg" :alt="$t('quote.author')" class="team-quote__img">
      <img src="/images/team/team-main-mobile.jpg" :alt="$t('quote.author')" class="team-quote__img mobile">
      <blockquote class="team-quote__content">
        <svg class="team-quote__icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="39.5" fill="white" stroke="#F2F2F2"/>
          <path d="M38.1262 40.8082H34.4435L38.3989 30.3994H34.0343L29.6016 40.1752V49.5994H38.1262V40.8082ZM50.1288 40.8082H46.4462L50.4016 30.3994H46.037L41.6042 40.1752V49.5994H50.1288V40.8082Z" fill="#1333BB"/>
        </svg>
        <p class="title team-quote__title">{{ $t('quote.title') }}</p>
        <p class="team-quote__text">{{ $t('quote.text') }}</p>
        <cite class="team-quote__author">{{ $t('quote.author') }}</cite>
        <p class="team-quote__position">{{ $t('quote.position') }}</p>
        <p class="team-quote__company">{{ $t('quote.company') }}</p>
      </blockquote>
    </div>
    <ul class="section-margin team__list">
      <li v-for="(item, index) in $t('items')" :key="index" class="team__item">
        <img :src="`/images/team/team${++index}.jpg`" :alt="item.name" class="team-item__img">
        <p class="team-item__name">{{ item.name }}</p>
        <p class="team-item__position">{{ item.position }}</p>
      </li>
    </ul>
    <hr class="section-margin">
    <section class="section-margin info">
      <div class="info__col">
        <h2 class="title info__title">{{ $t('info.title') }}</h2>
        <div class="info__images">
          <img src="/images/careers/careers-team1.jpg" alt="1" class="info__image">
          <img src="/images/careers/careers-team2.jpg" alt="2" class="info__image">
          <img src="/images/careers/careers-team3.jpg" alt="3" class="info__image">
          <div class="info__image">+60</div>
        </div>
      </div>
      <div class="info__text" v-html="$t('info.text')"/>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TeamPage'
}
</script>

<style lang="scss" scoped>
.team {
  padding-top: 22.3rem;
  background-color: var(--text-200);
  @include w1199 {
    padding-top: 17.8rem;
  }
  @include w767 {
    padding-top: 8.4rem;
  }
  &__top {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2.4rem;
    align-items: flex-end;
    @include w1199 {
      display: block;
      margin-bottom: 4rem;
    }
    @include w767 {
      margin-bottom: 2rem;
    }
  }
  &-top {
    &__title {
      max-width: 80%;
      margin: 0;
      grid-column: span 7;
      @include w1199 {
        margin-bottom: 4rem;
      }
      @include w767 {
        max-width: none;
        margin-bottom: 0.8rem;
        padding: 3.2rem 1.6rem;
        background-color: var(--text-000);
        border-radius: 1.6rem;
      }
    }
    &__text {
      max-width: 85%;
      grid-column: span 5;
      @include w1199 {
        max-width: 66%;
      }
      @include w767 {
        max-width: none;
        padding: 3.2rem 1.6rem;
        background-color: var(--text-000);
        border-radius: 1.6rem;
        text-align: center;
        color: var(--text-700);
      }
    }
  }
  &__quote {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 6.4rem;
    padding: 3.2rem;
    background: var(--text-000);
    border-radius: 1.6rem;
    @include w1199 {
      display: block;
      margin-bottom: 4rem;
    }
    @include w767 {
      margin-bottom: 2rem;
      padding: 1.6rem;
    }
  }
  &-quote {
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1.6rem;
      @include w1199 {
        position: absolute;
        top: 3.2rem;
        left: 3.2rem;
        width: 8rem;
        height: 8rem;
        display: none;
      }
      @include w767 {
        top: 1.6rem;
        left: 1.6rem;
      }
      &.mobile {
        display: none;
        @include w1199 {
          display: block;
        }
      }
    }
    &__content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -3.2rem;
        width: 0.1rem;
        height: 100%;
        background-color: var(--text-200);
        @include w1199 {
          display: none;
        }
      }
    }
    &__icon {
      width: 8rem;
      height: auto;
      margin-bottom: 3.2rem;
      @include w1199 {
        position: absolute;
        top: 0;
        right: 0;
      }
      @include w767 {
        display: none;
      }
    }
    &__title {
      margin-top: 0;
      margin-bottom: 3.2rem;
      @include w1199 {
        margin-bottom: 2rem;
      }
      @include w767 {
        font-size: 2rem;
        line-height: 1.4;
      }
    }
    &__text {
      margin-bottom: 5.4rem;
      @include w1199 {
        max-width: 87%;
        margin-bottom: 0;
      }
      @include w767 {
        max-width: none;
      }
    }
    &__author {
      margin-bottom: 2rem;
      font-style: normal;
      font-size: 2rem;
      line-height: 1.1;
      @include w1199 {
        margin-bottom: 1.3rem;
      }
    }
    &__position {
      margin-bottom: 0.8rem;
      color: var(--text-700);
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1.12;
    }
    &__company {
      color: var(--text-700);
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1.12;
      @include w1199 {
        margin-bottom: 4rem;
      }
    }
    &__author,
    &__position,
    &__company {
      @include w1199 {
        order: -1;
        padding-left: 10rem;
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8rem 2.4rem;
    padding-left: 0;
    list-style: none;
    overflow: hidden;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w767 {
      grid-template-columns: auto;
      grid-gap: 4rem;
    }
    & + hr {
      @include w1199 {
        display: none;
      }
    }
  }
  &__item {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -4rem;
      left: 0;
      width: 100vw;
      height: 0.1rem;
      display: none;
      background-color: var(--text-300);
      @include w767 {
        top: -2rem;
      }
    }
    &:nth-child(3n+1):before {
      display: block;
      @include w1199 {
        display: none;
      }
    }
    &:nth-child(2n+1):before {
      @include w1199 {
        display: block;
      }
      @include w767 {
        display: none;
      }
    }
    &:not(:first-child):before {
      @include w767 {
        display: block;
      }
    }
  }
  &-item {
    &__img {
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 1.6rem;
      object-fit: cover;
      @include w1199 {
        height: 40.9rem;
        border-radius: 0.8rem;
      }
      @include w767 {
        height: 39.5rem;
        border-radius: 1.6rem;
      }
    }
    &__name {
      margin-bottom: 0.8rem;
      color: var(--text-1000);
      line-height: 1.12;
    }
    &__position {
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--text-700);
      line-height: 1.71;
      letter-spacing: normal;
    }
  }
}
.info {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.4rem;
  @include w1199 {
    display: block;
    padding-bottom: 17.6rem;
  }
  @include w767 {
    padding-bottom: 12.6rem;
  }
  & + hr {
    @include w1199 {
      display: none;
    }
  }
  &__col {
    grid-column: span 7;
  }
  &__title {
    max-width: 56rem;
    margin-top: 0;
    margin-bottom: 9.6rem;
    @include w1199 {
      margin-bottom: 4rem;
    }
    @include w767 {
      margin-bottom: 2rem;
      font-size: 2rem;
      line-height: 1.1;
    }
  }
  &__images {
    display: flex;
    @include w1199 {
      position: absolute;
      bottom: 0;
    }
  }
  &__image {
    position: relative;
    z-index: 1;
    width: 9.6rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -2.4rem;
    border-radius: 50%;
    border: 0.1rem solid var(--text-300);
    font-size: 2rem;
    @include w767 {
      width: 8.6rem;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      z-index: 0;
      background-color: var(--text-000);
    }
  }
  &__text {
    grid-column: span 5;
    @include w1199 {
      max-width: 77%;
    }
    @include w767 {
      max-width: none;
      font-size: 1.4rem;
      line-height: 1.71;
      color: var(--text-700);
      letter-spacing: normal;
    }
  }
}
</style>
