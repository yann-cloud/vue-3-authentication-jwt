<template>
  <component :is="headline"> {{ title }} </component>
</template>

<script>
export default {
props: ["headlineLevel", "title"],
computed: {
  headline() {
    return "h" + this.headlineLevel
  }
}
};
</script>

<style>

</style>