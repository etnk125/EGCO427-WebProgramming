<template >
  <div>
    <h2>SearchForm : Filter article</h2>
    <input type="text" ref="el" placeholder="Name" v-model="name" />
    <button @click="submitForm" v-bind:disabled="name.length == 0">
      submitForm
    </button>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const name = ref("");
    const el = ref();
    const submitForm = () => {
      console.log(`form submitted = ${name}`);
    };
    onMounted(() => {
      el.value.focus();
    });
    return {
      name,
      el,
      submitForm,
    };
  },
};
</script>
