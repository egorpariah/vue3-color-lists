<template>
  <div>
    <input
      class="checkbox visually-hidden"
      type="checkbox"
      :id="id"
      :value="value"
      @change="updateChecked"
      :checked="modelValue"
      :disabled="disabled"
      :indeterminate="indeterminate"
    />
    <label
      class="custom-checkbox"
      :for="id"
      >{{ label }}</label
    >
  </div>
</template>

<script setup>
  const props = defineProps({
    value: { type: String, default: '' },
    label: { type: String, default: '' },
    modelValue: { type: Boolean, default: false },
    id: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
  });

  const emit = defineEmits(['update:modelValue']);

  function updateChecked(e) {
    emit('update:modelValue', e.target.checked);
  }
</script>

<style lang="scss" scoped>
  .checkbox {
    display: none;
  }

  .checkbox:checked + .custom-checkbox::before {
    background: #ffffff url('../../assets/svg/check-mark.svg') center
      center/12px 12px no-repeat;
  }

  .checkbox:indeterminate + .custom-checkbox::before {
    background: #ffffff
      url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect fill='%231c1e22' x='0' width='24' height='24' rx='8'/></svg>")
      center center/8px 8px no-repeat;
  }

  .custom-checkbox {
    cursor: pointer;
    position: relative;
    padding-left: 32px;

    &::before {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      background: #ffffff;
      border-radius: 8px;
      left: 0;
    }
  }
</style>
