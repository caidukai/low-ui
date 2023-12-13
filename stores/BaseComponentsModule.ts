import {defineStore} from "pinia"
import {fetchBaseComponents} from "@/fetch/index"
interface useBaseComponentStoreState {
  items: any[],
  error: null|string
}
export const useBaseComponentStore = defineStore('BaseComponentsModule', {
  state: () => ({
    items: [],
    error: null
  } as useBaseComponentStoreState),
  getters: {
  },
  actions: {
    async getItems(){
      try {
        const res = await fetchBaseComponents()
        this.error = null
        this.items = res.data.items
        
      } catch (error) {
        this.error = "加载失败，请重试"
      }
      
    }
  }
})
