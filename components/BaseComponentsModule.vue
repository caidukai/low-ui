<template>
  <div class="px-2">
    <h2 class="text-gray-400 text-xs py-2">基础控件</h2>
    <div class="flex flex-wrap" ref="BaseComponent" data-groupname="BaseComponentsModule">
      <div v-for="(item, idx) in StoreBaseComponent.items" 
        class="text-sm w-1/2 p-1 grow h-10"
      >
        <div draggable="true" class="select-none border border-stone-200 h-9 rounded cursor-pointer flex items-center justify-center">
          {{item.nikename}}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import Sortable from "sortablejs";
import {useBaseComponentStore} from "@/stores/BaseComponentsModule"
import {ComponentsModuleSortGroupName} from "@/utils/index"
const BaseComponent = ref<any>(null);
const StoreBaseComponent = useBaseComponentStore()
onMounted(()=>{
  StoreBaseComponent.getItems()
  // console.log(BaseComponent.value)


  Sortable.create(BaseComponent.value, {
    animation: 180,
    group: {
        name: ComponentsModuleSortGroupName.BaseComponentsModule,
        pull: 'clone' // To clone: set pull to 'clone'
    },
  })

})
</script>