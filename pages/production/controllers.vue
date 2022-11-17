<template>
  <div class="controllers">
    <h1 class="visually-hidden">{{ $t('site') }}</h1>
    <ProductionInfoAndSlider :page="page" :info="info" :slider="slider" class="info--controllers"/>
    <ul class="section-margin controllers__tiles">
      <li v-for="(item, index) in $t('production.controllers.tiles')" :key="index" class="controllers__tile">
        {{ item }}
      </li>
    </ul>
    <hr class="section-margin">
    <ProductionDocumentation :page="page" :link="documentationLink" class="section-margin"/>
  </div>
</template>

<script>
export default {
  name: 'Controllers',
  data () {
    return {
      activeTab: 0,
      page: 'controllers',
      info: {
        title: 'Контроллер КР-101',
        description: [
          'Измерение и вычисление расхода с учетом разности температур измеряемой среды',
          '<p>Многофункциональный дисплей и возможность подключать разные типы расходомеров с различными типами сигнальных выходов</p><p>Контроллер расхода КР-101 (Flow Controller FC-101) - устройство для измерения расходов с возможностью подключения до двух расходомеров и вычисления расхода по дифференциальной схеме с учётом разности температур среды в подающей и обратной магистралях и коррекцией измерений. </p><p>Поддерживает различные коэффициенты веса импульса для пяти диапазонов частоты входного сигнала от расходомеров с импульсным выходом.</p><p>Автоматическая корректировка объема обратной магистрали в зависимости от разности температур Подачи и Обратки.</p>'
        ]
      },
      slider: [
        {
          image: '/images/production/controllers1.png',
          title: 'Контроллер КР-101',
          info: ''
        }
      ],
      documentationLink: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
.controllers {
  &__tiles {
    counter-reset: item;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 14.6rem;
    grid-gap: 2.4rem;
    margin-top: -4.2rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      display: flex;
      grid-gap: 0;
      margin: -4rem calc(-1 * var(--container-padding)) 7rem;
      padding: 0 var(--container-padding) 1rem;
      overflow-x: auto;
    }
    @include w767 {
      display: block;
      margin-top: 0;
      margin-bottom: 4rem;
      padding-bottom: 0;
    }
  }
  &__tile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2.3rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    @include w1199 {
      flex: 0 0 31.2rem;
      height: 14.6rem;
    }
    @include w767 {
      flex: auto;
      height: auto;
    }
    & + & {
      @include w1199 {
        margin-left: 2.4rem;
      }
      @include w767 {
        margin-top: 1.6rem;
        margin-left: 0;
      }
    }
    &:before {
      counter-increment: item;
      content: "0" counter(item);
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 50%;
      background-color: var(--text-200);
      font-size: 2rem;
      color: var(--primary-blue);
      @include w767 {
        position: static;
        margin-bottom: 2.4rem;
      }
    }
  }
}
</style>
