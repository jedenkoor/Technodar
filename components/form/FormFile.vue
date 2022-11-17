<i18n>
{
  "ru": {
    "resume": {
      "label": "Резюме",
      "text": "Перетяните файл или <span>выберите на компьютере</span>",
      "mobile" : "Нажмите, чтобы <span>выбрать файл на устройстве</span>",
      "error": {
        "extension": "Недопустимый тип файла",
        "size": "Размер файла превышает"
      }
    }
  },
  "en": {
    "resume": {
      "label": "Resume",
      "text": "Drag file or <span>select on computer</span>",
      "mobile" : "Click to <span>select file on device</span>",
      "error": {
        "extension": "Invalid file type",
        "size": "File size exceeds"
      }
    }
  }
}
</i18n>

<template>
  <div class="form__block">
    <label :for="name" class="form__label">{{ $t('resume.label') }}</label>
    <input
      :id="name"
      :type="field.type"
      class="visually-hidden"
      ref="file"
      multiple
      @change="loadFile($event.target.files)"
    >
    <label
      :for="name"
      :class="['form__file', { 'error': errorMessage }]"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <span class="form-file__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.75 14C1.75 13.5858 1.41421 13.25 1 13.25C0.585786 13.25 0.25 13.5858 0.25 14H1.75ZM23.75 14C23.75 13.5858 23.4142 13.25 23 13.25C22.5858 13.25 22.25 13.5858 22.25 14H23.75ZM12 4L12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12 4ZM11.25 14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14H11.25ZM8.46967 6.46967C8.17678 6.76256 8.17678 7.23744 8.46967 7.53033C8.76256 7.82322 9.23744 7.82322 9.53033 7.53033L8.46967 6.46967ZM14.4697 7.53033C14.7626 7.82322 15.2374 7.82322 15.5303 7.53033C15.8232 7.23744 15.8232 6.76256 15.5303 6.46967L14.4697 7.53033ZM0.25 14V18H1.75V14H0.25ZM3 20.75H21V19.25H3V20.75ZM23.75 18V14H22.25V18H23.75ZM11.25 4V14H12.75V4H11.25ZM11.4697 3.46967L8.46967 6.46967L9.53033 7.53033L12.5303 4.53033L11.4697 3.46967ZM11.4697 4.53033L14.4697 7.53033L15.5303 6.46967L12.5303 3.46967L11.4697 4.53033ZM21 20.75C22.5188 20.75 23.75 19.5188 23.75 18H22.25C22.25 18.6904 21.6904 19.25 21 19.25V20.75ZM0.25 18C0.25 19.5188 1.48122 20.75 3 20.75V19.25C2.30964 19.25 1.75 18.6904 1.75 18H0.25Z" fill="#1333BB"/>
        </svg>
      </span>
      <span v-if="winW > 1200" class="form-file__text" v-html="$t('resume.text')"/>
      <span v-else class="form-file__text" v-html="$t('resume.mobile')"/>
      <span class="form-file__error" v-html="errorMessage"/>
    </label>
    <ul v-if="field.value.length" class="form-file__list">
      <li v-for="(item, index) in field.value" :key="index" class="form-file__item">
        <svg @click="deleteFile(field.value[index])" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6L17 17M6 17L17 6"/>
        </svg>
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'FormFile',
  props: {
    field: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      winW: null,
      errorMessage: '',
      requiredSize: 20 * 1024 * 1024,
      requiredExtension: ['doc', 'docx', 'xls', 'xlsx', 'txt', 'rtf', 'pdf', 'png', 'jpeg', 'jpg', 'gif']
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.winW = window.innerWidth
      this.$nuxt.$on('win-resize', throttle(({ winW }) => {
        this.winW = winW
      }, 300))
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('win-resize')
  },
  methods: {
    dragover (e) {
      e.preventDefault()
      if (!e.currentTarget.classList.contains('drag')) {
        e.currentTarget.classList.add('drag')
      }
    },
    dragleave (e) {
      e.currentTarget.classList.remove('drag')
    },
    drop (e) {
      e.preventDefault()
      e.currentTarget.classList.remove('drag')
      this.loadFile(e.dataTransfer.files)
    },
    loadFile (files) {
      this.checkFile(files)
      this.$refs.file.value = ''
    },
    checkFile (files) {
      this.errorMessage = ''
      for (const file of files) {
        const ext = file.name.split('.').pop()
        if (!this.requiredExtension.includes(ext)) {
          this.errorMessage += `${this.$t('resume.error.extension')} ${file.name}. `
        }
        if (file.size > this.requiredSize) {
          this.errorMessage += `${this.$t('resume.error.size')} ${this.requiredSize / 1024 / 1024}Mb ${file.name}. `
        }
        if (!this.errorMessage) {
          this.$emit('loadFile', file)
        }
      }
    },
    deleteFile (file) {
      this.$emit('deleteFile', file)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.2rem;
    @include w767 {
      margin-bottom: 2.4rem;
    }
  }
  &__label {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--text-700);
    cursor: pointer;
  }
  &__file {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.2rem 2rem;
    border: 0.1rem dashed var(--text-300);
    border-radius: 0.8rem;
    cursor: pointer;
    transition: background-color 0.2s;
    text-align: center;
    @include hover {
      &:hover {
        .form-file {
          &__icon {
            background-color: var(--text-200);
          }
          &__text {
            color: var(--primary-blue);
          }
        }
      }
    }
    @include active {
      &:active {
        .form-file {
          &__icon {
            background-color: var(--text-200);
          }
          &__text {
            color: var(--primary-blue);
          }
        }
      }
    }
    &.error {
      border-color: var(--secondary-error);
    }
    &.drag {
      background-color: var(--text-200);
    }
  }
  &-file {
    &__icon {
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.8rem;
      background-color: var(--text-100);
      border-radius: 50%;
      transition: background-color 0.2s;
      svg {
        width: 2.4rem;
        height: auto;
      }
    }
    &__text {
      font-weight: 400;
      line-height: 1.12;
      letter-spacing: normal;
      transition: color 0.2s;
    }
    &__error {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      font-weight: 400;
      font-size: 1.2rem;
      letter-spacing: normal;
      color: var(--secondary-error);
    }
    &__list {
      margin-top: 1rem;
      padding-left: 0;
      list-style: none;
    }
    &__item {
      display: flex;
      align-items: center;
      svg {
        transform: translateY(0.1rem);
        width: 2.4rem;
        stroke: var(--text-1000);
        cursor: pointer;
      }
    }
  }
}
</style>

<style lang="scss">
.form {
  &-file {
    &__text {
      span {
        color: var(--primary-blue);
      }
    }
  }
}
</style>
