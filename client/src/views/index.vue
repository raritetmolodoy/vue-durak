<template>
  <main class="container">
    <div class="flex justify-between gap-2">
      <div class="bg-blue-100 text-center flex-1">1</div>
      <div class="bg-blue-100 text-center flex-1">2</div>
      <div class="bg-blue-100 text-center flex-1">3</div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class IndexView extends Vue {}
</script>
