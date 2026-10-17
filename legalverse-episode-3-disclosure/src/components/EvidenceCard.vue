<script setup>
defineProps({ item: { type: Object, required: true } })
</script>

<template>
  <article class="evidence-card">
    <header class="card-head">
      <div><span class="record-id">{{ item.id }}</span><h3>{{ item.name }}</h3></div>
      <span class="status-tag">{{ item.status }}</span>
    </header>
    <p class="inventory">{{ item.inventory }}</p>
    <dl>
      <div><dt>Packet establishes</dt><dd>{{ item.establishes }}</dd></div>
      <div><dt>Unknown / limited</dt><dd>{{ item.unknown }}</dd></div>
      <div><dt>Hearing relevance</dt><dd>{{ item.relevance }}</dd></div>
      <div><dt>Disclosure concern</dt><dd>{{ item.concern }}</dd></div>
      <div><dt>Proposed handling</dt><dd>{{ item.handling }}</dd></div>
      <div><dt>Review / authority</dt><dd>{{ item.authority }}</dd></div>
    </dl>
  </article>
</template>
