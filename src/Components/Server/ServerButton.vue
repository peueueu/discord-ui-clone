<template>
  <div class="serverButton"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.serverButton {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  margin-bottom: 8px;
  background: var(--primary);
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:active,
  &:hover {
    border-radius: 16px;
    background: var(--discord);
  }
}
</style>
