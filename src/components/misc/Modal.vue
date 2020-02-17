<template>
  <ScreenOverlay>
    <div class="modal">
        <div class="modal__title">
            {{ title }}
        </div>
      <div @click="close" class="modal__close">
        X
      </div>
      <slot />
    </div>
  </ScreenOverlay>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      default: () => {}
    },
    title: {
        type: String,
        default: ''
    }
  }
};
</script>

<style>
.modal {
  background-color: white;
  padding: 15px;
}
.modal__close {
  float: right;
}
</style>
