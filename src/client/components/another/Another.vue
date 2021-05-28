<template>
  <h1>Todos</h1>
  <section class="wrapper">
    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="todo-list__item"
        :class="{ 'todo-list__item--checked': todo.done }"
      >
        <label>
          {{ todo.title }}
          <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
        </label>
      </li>
    </ul>
    <form @submit="submit" class="form">
      <input type="text" v-model="nextTodo" placeholder="Everything else" />
      <button type="submit">Add</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ADD_TODO, TOGGLE_TODO } from '../../store'

export default defineComponent({
  data() {
    return { nextTodo: '' }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
  methods: {
    toggleTodo(todo: any) {
      this.$store.commit(TOGGLE_TODO, todo)
    },
    submit(e: Event) {
      e.preventDefault()
      const title = this.nextTodo.trim()
      if (title) {
        this.$store.commit(ADD_TODO, { title })
        this.nextTodo = ''
      }
    },
  },
  mounted() {
    this.$router
    this.$store.state.todos
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 320px;
  margin: 64px auto 0 auto;
}
.todo-list {
  text-align: left;
}
.todo-list__item {
}

.todo-list__item--checked {
  text-decoration: line-through;
}

.form {
  margin-top: 32px;
}
</style>
