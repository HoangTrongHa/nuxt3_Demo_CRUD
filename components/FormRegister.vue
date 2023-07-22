<template>
  <div>
    <client-only>
      <form class="mt-12" @submit.prevent="actionForm()">
        <div>
            <TextInput 
              placeholder="Text" 
              v-model:input="state.name"
              inputType="text" 
            />
        </div>
          <div class="mt-4">
            <TextInput 
              placeholder="Text" 
              v-model:input="state.author"
              inputType="text" 
            />
          </div>
          <div class="mt-4">
            <TextInput 
              placeholder="Text" 
              v-model:input="state.description"
              inputType="textarea" 
            />
          </div>
          <div class="mt-10">
              <button type="submit" class="rounded-full w-full p-3 font-bold"
                  :disabled="(!state.name || !state.author)"
                  :class="(state.name && state.author) ?
                  'bg-[#8228D9] hover:bg-[#6c21b3] text-white' :
                  'bg-[#EFF0EB] text-[#A7AAA2]'">
                   {{ props.isEdit ? `Chỉnh Sửa` : `Thêm Mới` }}
              </button>
          </div>
      </form>
    </client-only>
  </div>
                  
</template>

<script setup>
  import { useProductStore } from '~~/stores/product';
  import { storeToRefs } from 'pinia';
  const emit = defineEmits(['update:input'])
  const props = defineProps(['isEdit'])
  const state = reactive({
    name: "",
    author: "",
    id: "",
    description: "",
  });
  const route = useRoute()
  const productStore = useProductStore()
  const { products } = storeToRefs(productStore)

  const actionForm = async () => {
    try {
      await productStore.actionDataProduct(state)
      return navigateTo('/')
    } catch (error) {
        console.log(error)
    }
  }

  onMounted(async () => {
    if (props.isEdit) {
      if (!products.value.find((product) => product.id == route.params.id)) {
        return navigateTo('/')
      }
      state.name = products.value.find((product) => product.id == route.params.id).name;
      state.author = products.value.find((product) => product.id == route.params.id).author;
      state.id = products.value.find((product) => product.id == route.params.id).id;
      state.description = products.value.find((product) => product.id == route.params.id).description;
    }
  })
</script>