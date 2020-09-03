<template>
  <main>
    <draggable v-bind="dragOptions">
      <transition-group class="wrapper">
        <div class="card" key="1">1</div>
        <div class="card" key="2">2</div>
        <div class="card" key="3">3</div>
      </transition-group>
    </draggable>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import draggable from 'vuedraggable'

@Component({
  components: {
    draggable
  }
})
export default class extends Vue {
  drag = false

  dragOptions = {
    animation: 300,
    ghostClass: 'ghost'
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

.card {
  border: 1px solid black;
  padding: 2em;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  margin: 0 0.4em;

  &:active {
    cursor: grabbing;
  }
}

.ghost {
  visibility: hidden;
}
</style>
