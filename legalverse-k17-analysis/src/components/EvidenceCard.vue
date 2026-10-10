<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="evidence-card">
    <div class="evidence-card__heading">
      <span class="evidence-code">{{ item.id }}</span>
      <span class="evidence-label">Exhibit</span>
    </div>
    <dl>
      <div>
        <dt>Observation</dt>
        <dd>{{ item.observation }}</dd>
      </div>
      <div>
        <dt>Limitation</dt>
        <dd>{{ item.limitation }}</dd>
      </div>
      <div>
        <dt>Evidentiary significance</dt>
        <dd>{{ item.significance }}</dd>
      </div>
    </dl>
  </article>
</template>
