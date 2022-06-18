<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})
</script>

<template>

  <div class="flex flex-col gap-3  p-4">
    <input type="text" placeholder="Default" class="input input-bordered w-full"> <input type="text"
      placeholder="Primary" class="input input-primary input-bordered w-full"> <input type="text"
      placeholder="Secondary" class="input input-secondary input-bordered w-full"> <input type="text"
      placeholder="Accent" class="input input-accent input-bordered w-full">
    <input type="text" placeholder="Primary" class="input input-primary input-bordered ">
    <button class="btn mt-3 btn-primary">Hello daisyUI</button>
  </div>
</template>
