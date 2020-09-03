<template>
  <div id="grid"></div>
</template>

<script>
export default {
  name: "defaultLayout",
};
</script>

<style lang="scss" scoped>
#grid {
  display: grid;
  height: 100vh;
  grid-template-columns: 70px 240px auto 240px;
}
</style>
