<script setup lang='ts'>
import type { Fn } from '@vueuse/core'
import { useWindowSize, useRafFn } from '@vueuse/core'
import {ref, reactive, onMounted, computed} from 'vue'
</script>

<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 pointer-events-none"
    style="z-index: -1"
  >
    <canvas ref="el" width="400" height="400" />
  </div>
</template>


<style>
footer {
  padding: 25px;
  text-align: center;
}
</style>
