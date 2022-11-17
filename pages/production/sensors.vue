<template>
  <div>
    <h1 class="visually-hidden">{{ $t('site') }}</h1>
    <ProductionInfoAndSlider :page="page" :info="info1" :slider="slider1"/>
    <ul class="section-margin tiles">
      <li v-for="(item, index) in tiles" :key="index" class="tiles__item">
        <h3 class="tiles-item__title">{{ $t(`production.sensors.tiles[${index}]`) }}</h3>
        <div class="tiles-item__btn">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3637 5.25H18.7501V13.6364H17.2501V7.81066L6.53039 18.5303L5.46973 17.4697L16.1894 6.75L10.3637 6.75V5.25Z" fill="currentColor"/>
          </svg>
        </div>
        <button class="tiles-item__area"/>
      </li>
    </ul>
    <GeneralSmallBlueRow/>
    <ProductionInfoAndSlider :page="page" :info="info2" :slider="slider2" class="info--right"/>
  </div>
</template>

<script>
export default {
  name: 'ProductionSensors',
  data () {
    return {
      page: 'sensors',
      info1: {
        title: 'Датчики уровня топлива',
        features: [
          'Предотвращают аварийные ситуации, связанные с запасом топлива на судне',
          'Помогают беспрепятственно выполнять рейсовое задание',
          'Проводят бункеровочные операции (прием и выдача топлива)',
          'Фиксируют несанкционированные сливы',
          'Контролируют расход топлива',
          'Автоматизируют технологические процессы и упрощают повседневную работу команды'
        ]
      },
      slider1: [
        {
          image: '/images/production/sensor1.png',
          title: 'Sekee FM5',
          info: ''
        },
        {
          image: '/images/production/sensor2.png',
          title: 'Sekee FM5555',
          info: ''
        }
      ],
      info2: {
        title: 'Датчики уровня давления',
        features: [
          'Проводят замеры путем преобразования гидростатического давления',
          'Выводят значения в виде аналогового или цифрового сигнала',
          'Измеряют давление газа, жидкости или пара',
          'Фиксируют уровень топлива в емкости без избыточного давления',
          'Являются неотъемлимой частью измерительных комплексов',
          'Автоматизируют технологические процессы и упрощают повседневную работу команды'
        ]
      },
      slider2: [
        {
          image: '/images/production/sensor2.png',
          title: 'Sekee FM10',
          info: ''
        },
        {
          image: '/images/production/sensor1.png',
          title: 'Sekee FM101010',
          info: ''
        }
      ],
      tiles: [
        {
          link: '#'
        },
        {
          link: '#'
        },
        {
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.8rem;
  padding-left: 0;
  border-radius: 1.6rem;
  overflow: hidden;
  list-style: none;
  @include w1199 {
    display: flex;
    grid-gap: 0;
    margin-right: calc(-1 * var(--container-padding));
    margin-bottom: 6.5rem;
    margin-left: calc(-1 * var(--container-padding));
    padding-right: var(--container-padding);
    padding-bottom: 1.5rem;
    padding-left: var(--container-padding);
    overflow-x: auto;
  }
  @include w767 {
    display: block;
    margin-bottom: 4rem;
    padding-bottom: 0;
  }
  &__item {
    position: relative;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.4rem;
    background-color: var(--text-100);
    transition: background-color 0.2s;
    @include hover {
      &:hover,
      &:focus {
        background-color: var(--text-200);
        .tiles-item__btn {
          background-color: var(--primary-tint);
        }
      }
      &:active {
        background-color: var(--text-200);
        .tiles-item__btn {
          background-color: var(--primary-shadow);
        }
      }
    }
    @include active {
      &:active {
        background-color: var(--text-200);
        .tiles-item__btn {
          background-color: var(--primary-shadow);
        }
      }
    }
    @include w1199 {
      flex: 0 0 31.2rem;
    }
    & + & {
      @include w1199 {
        margin-left: 0.8rem;
      }
      @include w767 {
        margin-top: 0.8rem;
        margin-left: 0;
      }
    }
  }
  &-item {
    &__title {
      margin: 0;
      font-weight: 450;
      font-size: 1.6rem;
      line-height: 1.12;
      @include w1199 {
        line-height: 1.5;
      }
    }
    &__btn {
      width: 5rem;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: var(--primary-blue);
      color: var(--text-000);
      transition: 0.2s;
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    &__area {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
}
</style>
