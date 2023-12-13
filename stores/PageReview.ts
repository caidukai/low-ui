import {defineStore} from "pinia"
import {fetchBaseComponents} from "@/fetch/index"

interface usePageReviewStoreState {
  items: any[],
  error: null|string
}
export const usePageReviewStore = defineStore('PageReview', {
  state: () => ({
    items: [],
    error: null
  } as usePageReviewStoreState),
  getters: {
  },
  actions: {
    pushWidgets(idx:string, item:any){
      if(this.items[idx as any]){
        // let str = this.items.splice(0,idx)
        // let end = this.items.splice(0,idx)
      }else{
        this.items[idx as any] = item
      }
      
    },
    async getItems(){
      try {
        // const res = await fetchBaseComponents()
        // this.error = null
        // this.items = res.data.items  
        
      } catch (error) {
        this.error = "加载失败，请重试"
      }
    }
  }
})
