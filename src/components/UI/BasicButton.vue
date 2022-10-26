<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
  .button {
    font-family: inherit;
    color: #ffffff;
    background: #1a7be9;
    padding: 8px 16px;
    border-radius: 8px;
    min-width: 80px;
  }
</style>
