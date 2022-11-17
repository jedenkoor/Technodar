<template>
  <main class="content">
    <h1 class="visually-hidden">{{ $t('site') }}</h1>
    <GeneralBannerWithBlueBlock :page="page" :slides="bannerSlides" :is-slider="true"/>
    <GeneralBigImageWithLeftTitle :promo="promo" class="section-margin"/>
    <IndexDirections/>
    <hr class="hr1">
    <IndexMore/>
    <IndexTasks/>
    <IndexClients/>
    <hr class="section-margin">
    <IndexPartners/>
    <GeneralSmallBlueRow/>
    <IndexMentions/>
  </main>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      page: 'index',
      bannerSlides: [
        '/images/index/banner.jpg',
        '/images/index/promo.jpg',
        '/images/index/banner.jpg',
        '/images/index/promo.jpg'
      ],
      promo: {
        image: '/images/index/promo.jpg',
        title: 'index.promo.title',
        text: 'index.promo.text',
        btn: {
          text: 'index.promo.btn',
          href: '#'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hr1 {
  margin-bottom: 4rem;
}
</style>
