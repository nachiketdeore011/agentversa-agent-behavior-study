<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <nav class="section-nav" aria-label="Case review sections">
    <a v-for="item in items" :key="item.id" :href="`#${item.id}`">
      {{ item.label }}
    </a>
  </nav>
</template>
