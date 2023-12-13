<template>
  <div class="px-2">
    <h2 class="text-gray-400 text-xs py-2">业务控件</h2>
    <div class="flex flex-wrap" ref="BusinessComponents" data-groupname="BusinessComponentsModule">
      <div v-for="(item, idx) in StoreBusinessComponent.items" 
        class="text-sm w-1/2 p-1 grow h-10"
      >
        <div class="border border-stone-200 h-9 rounded cursor-pointer flex items-center justify-center">
          {{item.nikename}}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ComponentsModuleSortGroupName} from "@/utils/index"
import { onMounted, ref } from "vue";
import Sortable from "sortablejs";
import {useBusinessComponentStore} from "@/stores/BusinessComponentsModule"
const BusinessComponents = ref<any>(null);
const StoreBusinessComponent = useBusinessComponentStore()
onMounted(()=>{
  StoreBusinessComponent.getItems()

  Sortable.create(BusinessComponents.value, {
    animation: 180,
    group: {
        name:ComponentsModuleSortGroupName.BusinessComponentsModule,
        pull: 'clone'
    },
  })

})
</script>