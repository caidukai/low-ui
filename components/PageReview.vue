<template>
  <div class="pagereview px-64">
    <div ref="PageReviewDom" class="h-60 bg-gray-300">
      <template v-for="(item, index) in StorePageReviewComponent.items" :key="index">
        <component :is="getItem(item)"> </component>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted} from "vue";
import Sortable from "sortablejs";
import {useBaseComponentStore} from "@/stores/BaseComponentsModule"
import {useBusinessComponentStore} from "@/stores/BusinessComponentsModule"
import {usePageReviewStore} from "@/stores/PageReview"
import type {VueDataComponentIs} from "@/interface/ComponentIs"
import {h, resolveComponent} from "vue";
import {ComponentType} from "@/interface/ComponentIs";
import {ComponentsModuleSortGroupName} from "@/utils/index"
import AllLibComponent from "@/AllLibComponent"
const StoreBaseComponent = useBaseComponentStore()
const StoreBusinessComponent = useBusinessComponentStore()
const StorePageReviewComponent = usePageReviewStore()
const PageReviewDom = ref<any>(null);
const stor = {
  [ComponentsModuleSortGroupName.BaseComponentsModule]: StoreBaseComponent,
  [ComponentsModuleSortGroupName.BusinessComponentsModule]: StoreBusinessComponent
}
const handleAdd = (e: Sortable.SortableEvent) =>{

   let fromGroupName = e.from.getAttribute('data-groupname') as ComponentsModuleSortGroupName.BaseComponentsModule|ComponentsModuleSortGroupName.BusinessComponentsModule
   let proc = stor[fromGroupName]
   let fromItem = proc.items[e.oldIndex as number]
   let toItemIdx = String(e.newIndex)
   StorePageReviewComponent.pushWidgets(toItemIdx, fromItem)
   
   e.item.remove()
}
const p = {
  [ComponentType.self]: function(item: VueDataComponentIs){
    const {name} = item
    return (AllLibComponent as any)[name]
  },
  [ComponentType.custom]: function(item: VueDataComponentIs){
    item?.render&&(item.render = (new Function('h', 'return ' + item.render))(h))
    return item
  }
}
const getItem = (it:VueDataComponentIs) =>{
  let item = {...it}
  let a = p[item.componentType](item)
  return a
}

onMounted(()=>{
  Sortable.create(PageReviewDom.value, {
    animation: 180,
    group: {
        name: 'PageReview',
        pull: false, // To clone: set pull to 'clone'
        put: ['BusinessComponentsModule', 'BaseComponentsModule']
        // pull: 'clone' // To clone: set pull to 'clone'
    },
    onAdd: handleAdd
  })

})
</script>

