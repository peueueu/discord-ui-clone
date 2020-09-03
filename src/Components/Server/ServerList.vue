<template>
  <div class="container">
    <ServerButton />
  </div>
</template>

<script>
import ServerButton from "./ServerButton";
export default {
  components: {
    ServerButton,
  },
};
</script>

<style scoped lang="scss">
.container {
  grid-area: ServerList;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--tertiary);
  padding: 11px 0;
  max-height: 100vh;
}
</style>
