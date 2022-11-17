<template>
  <main class="content">
    <GeneralBannerWithGreyGradient :page="page" :image="bannerImage" class="production"/>
    <CommonTabsButtons :page="page" :tabs="tabs"/>
    <NuxtChild/>
    <GeneralBigImageWithLeftTitle :promo="promo" class="full-wide"/>
    <div class="full-wide hr"><hr></div>
    <GeneralForm/>
    <ProductionOthersLinks/>
  </main>
</template>

<script>
export default {
  name: 'ProductionIndex',
  data () {
    return {
      page: 'production',
      bannerImage: '/images/production/banner.jpg',
      tabs: {
        items: [
          { link: 'sensors' },
          { link: 'gas-separators' },
          { link: 'flowmeters' },
          { link: 'controllers' }
        ]
      },
      promo: {
        image: '/images/production/promo.jpg',
        title: 'production.promo.title',
        text: 'production.promo.text'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hr {
  background-color: var(--text-200);
}
</style>
