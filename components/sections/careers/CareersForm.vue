<i18n>
{
  "ru": {
    "title": "Прямо сейчас у нас нет открытых вакансий",
    "text": "<p>Но <span>мы всегда находимся в поиске профессионалов</span>, которых вдохновляет работа в сфере разработки судовых систем</p><p>Если вы также, как и мы, горите своим делом и хотите развиваться профессионально, принимать участие в принятии решений и вносить свой вклад в реализацию каждого проекта, <span>оставьте нам свое резюме!</span></p>",
    "hh": "Мы на hh.ru",
    "form": {
      "btn": "Отправить",
      "fields": {
        "name": "Имя",
        "phone": "Телефон",
        "email": "E-mail",
        "agreeTerms": "Политика конфиденциальности",
        "resume": {
          "label": "Резюме",
          "text": "Перетяните файл или <span>выберите на компьютере</span>",
          "error": {
            "extension": "Недопустимый тип файла",
            "size": "Размер файла превышает"
          }
        }
      }
    }
  },
  "en": {
    "title": "Right now we have no open vacancies",
    "text": "<p>But <span>we are always looking for professionals</span> who are inspired by work in the field of ship systems development</p><p>If you, like us, are passionate about your business and want to develop professionally, accept participate in decision-making and contribute to the implementation of each project, <span>leave us your resume!</span></p>",
    "hh": "We are on hh.ru",
    "form": {
      "btn": "Send",
      "fields": {
        "name": "Name",
        "phone": "Phone",
        "email": "E-mail",
        "agreeTerms": "Privacy policy",
        "resume": {
          "label": "Resume",
          "text": "Drag file or <span>select on computer</span>",
          "error": {
            "extension": "Invalid file type",
            "size": "File size exceeds"
          }
        }
      }
    }
  }
}
</i18n>

<template>
  <section class="full-wide form">
    <div class="form__left">
      <h2 class="title form__title">{{ $t('title') }}</h2>
      <div class="form__text" v-html="$t('text')"/>
      <a href="#" class="form__hh">
        <img src="/images/careers/hh.png" :alt="$t('hh')">
        {{ $t('hh') }}
      </a>
    </div>
    <div class="form__right">
      <form v-if="mounted" class="form__main" @submit.prevent.stop="submit">
        <template v-for="(field, key) in fields">
          <div v-if="key !== 'agreeTerms' && key !== 'resume'" :key="key" class="form__block">
            <label :for="key" class="form__label">{{ $t(`form.fields.${key}`) }}</label>
            <input
              :id="key"
              :type="field.type"
              :placeholder="field.placeholder"
              v-model="field.value"
              :class="['form__input', { 'error': validObj.fields[key].$error }]"
            >
          </div>
          <FormFile
            v-else-if="key === 'resume'"
            :key="key"
            :name="key"
            :field="field"
            @loadFile="loadFile"
            @deleteFile="deleteFile"
          />
          <div v-else :key="key" class="form__row">
            <button class="btn btn-blue-filled form__btn" type="submit">
              {{ $t('form.btn') }}
            </button>
            <label :class="['form__terms', { 'error': validObj.fields[key].$error }]">
              <input class="visually-hidden" type="checkbox" v-model="field.value">
              <span>{{ $t('form.fields.agreeTerms') }}</span>
            </label>
          </div>
        </template>
      </form>
    </div>
  </section>
</template>

<script>
import { maxLength, minLength, required, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'CareersForm',
  components: {},
  data () {
    return {
      mounted: false,
      fields: {
        name: {
          value: '',
          type: 'text',
          placeholder: 'Иванов Иван',
          vuelidate: {
            required,
            onlyChars: val => !/[^+\D]/g.test(val)
          }
        },
        phone: {
          value: '',
          type: 'tel',
          placeholder: '+7 (999) 786-25-05',
          vuelidate: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(25),
            phone: val => /^[0-9 +()-]*$/i.test(val)
          }
        },
        email: {
          value: '',
          type: 'tel',
          placeholder: 'ivan@mail.ru',
          vuelidate: {
            required,
            email: val => /^[0-9a-z\-._]+@[0-9a-z\-_]{2,}.[a-z]{2,}$/i.test(val)
          }
        },
        resume: {
          value: [],
          type: 'file',
          template: 'File',
          vuelidate: {
            required
          }
        },
        agreeTerms: {
          value: true,
          type: 'checkbox',
          vuelidate: {
            required,
            sameAs: sameAs(() => true)
          }
        }
      }
    }
  },
  validations () {
    const obj = {
      fields: {}
    }
    for (const key in this.fields) {
      if (this.fields[key].vuelidate) {
        obj.fields[key] = {
          value: this.fields[key].vuelidate
        }
      }
    }
    return obj
  },
  computed: {
    validObj () {
      return this.$v ? this.$v : false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mounted = true
    })
  },
  methods: {
    loadFile (file) {
      this.fields.resume.value.push(file)
    },
    deleteFile (file) {
      this.fields.resume.value.forEach((item, index) => {
        if (item === file) {
          this.fields.resume.value.splice(index, 1)
        }
      })
    },
    submit () {
      this.$v.fields.$touch()
      setTimeout(() => {
        if (!this.$v.$invalid) {
          console.log('Форма отправлена')
        }
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.4rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: var(--text-200);
  @include w1199 {
    display: block;
  }
  @include w767 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  &__left {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-column: span 6;
  }
  &__title {
    max-width: 45rem;
    margin-top: 0;
    margin-bottom: 2rem;
    @include w1199 {
      max-width: none;
    }
  }
  &__text {
    max-width: 53.6rem;
    color: var(--text-700);
  }
  &__hh {
    display: flex;
    align-items: center;
    margin-top: 4rem;
    padding: 0.9rem 2.4rem 0.9rem 0.9rem;
    background-color: var(--text-000);
    border-radius: 3.2rem;
    letter-spacing: normal;
    img {
      margin-right: 0.8rem;
    }
  }
  &__right {
    grid-column: span 5;
    padding: 3.2rem;
    background-color: var(--text-000);
    border-radius: 1.6rem;
    @include w1366 {
      grid-column: span 6;
    }
    @include w1199 {
      margin-top: 8rem;
    }
    @include w767 {
      margin-top: 4rem;
      padding: 3.2rem 1.6rem;
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.2rem;
  }
  &__label {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--text-700);
    cursor: pointer;
  }
  &__input {
    width: 100%;
    height: 5rem;
    padding: 0 2.4rem;
    background: var(--text-000);
    border: 0.1rem solid var(--text-300);
    border-radius: 0.8rem;
    &::placeholder {
      color: var(--text-400);
    }
    &.error {
      border-color: var(--secondary-error);
      &::placeholder {
        color: var(--secondary-error);
      }
    }
  }
  &__row {
    display: flex;
    align-items: center;
    @include w767 {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  &__btn {
    margin-right: 3.2rem;
    padding: 1.6rem 3.2rem;
    @include w767 {
      width: 100%;
      margin-right: 0;
      margin-bottom: 2.4rem;
      font-size: 1.6rem;
    }
  }
  &__terms {
    display: flex;
    cursor: pointer;
    @include hover {
      &:hover span,
      &:focus span {
        color: var(--primary-blue);
      }
      &:active span {
        color: var(--primary-shadow);
      }
    }
    @include active {
      &:active span {
        color: var(--primary-shadow);
      }
    }
    &.error span {
      color: var(--secondary-error);
      &:before {
        border-color: var(--secondary-error);
      }
    }
    input {
      &:checked + span {
        &:before {
          background: var(--primary-blue);
        }
      }
    }
    span {
      position: relative;
      display: flex;
      align-items: center;
      color: var(--text-600);
      font-weight: 450;
      line-height: 1.12;
      letter-spacing: normal;
      transition: color 0.2s;
      white-space: nowrap;
      @include w359 {
        font-size: 1.4rem;
      }
      &:before {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.8rem;
        border: 0.1rem solid var(--primary-blue);
        border-radius: 0.4rem;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0.5rem;
        left: 0.4rem;
        width: 0.8rem;
        height: 0.5rem;
        border-left: 0.2rem solid var(--text-000);
        border-bottom: 0.2rem solid var(--text-000);
        transform: rotate(-45deg);
      }
    }
  }
}
</style>

<style lang="scss">
.form {
  &__text {
    p:not(:last-child) {
      margin-bottom: 2rem;
    }
    span {
      color: var(--primary-blue);
    }
  }
}
</style>
