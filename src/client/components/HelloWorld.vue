<template>
  <h1>Hello</h1>
  <div>Server time: {{ serverTime }}</div>
  <button @click="updateServerTime">Update</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { ServerTimeResponse } from '../../shared/models'

export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const count = ref(0)
    return { count }
  },
  data: (): { serverTime: string | null } => ({ serverTime: null }),
  mounted() {
    this.updateServerTime()
  },
  methods: {
    updateServerTime() {
      fetch('/api/server-time')
        .then((res) => res.json())
        .then((res: ServerTimeResponse) => (this.serverTime = res.servertime))
    },
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
