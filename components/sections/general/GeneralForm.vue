<template>
  <section class="section-margin full-wide form">
    <FormDemonstration/>
  </section>
</template>

<script>
export default {
  name: 'GeneralForm'
}
</script>

<style lang="scss" scoped>
.form {
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: var(--text-200);
  @include w767 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>
