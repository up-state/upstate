import { createStore as createVuexStore } from 'vuex'
import { ADD_TODO, TOGGLE_TODO } from './mutations'

export type StoreState = typeof store

type Todo = { id: string; title: string; done: boolean }

export const createStore = () =>
  createVuexStore<{ todos: Todo[] }>({
    state() {
      return { todos: [] }
    },
    mutations: {
      [ADD_TODO](state, todo: Pick<Todo, 'title'>) {
        state.todos.push({ ...todo, id: randomId(), done: false })
      },
      [TOGGLE_TODO](state, todo: Todo) {
        state.todos = state.todos.map((t) => (t.id !== todo.id ? t : { ...t, done: !t.done }))
      },
    },
  })

function randomId(): string {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0]
  return uint32.toString(16)
}

export const store = createStore()
