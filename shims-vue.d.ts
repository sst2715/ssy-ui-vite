declare module '*.vue' {
  import type { ComponentOptions } from 'vue'

  const component: ComponentOptions<{}, {}, object, object> // 根据需要使用 'object' 或 'unknown'
  export default component
}
