import { StoreState } from './store'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $store: StoreState
  }
}

// Make sure this is treated as a module
export {}
