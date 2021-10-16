<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1>Preview</h1>
      </div>
    </div>
    <div class="row mt-4">
      <h4>Markdown</h4>
      <textarea name="" id="" cols="30" rows="10" v-model="markdown" />
    </div>
    <div class="row mt-4">
      <h4>Preview</h4>
      <div :key="markdown" class="result" v-markdown>{{ markdown }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      markdown: "kek wpek",
    };
  },
  components: {},
};
</script>

<style>
.result {
  width: 100%;
  height: 350px;
  border: 1px solid;
}
</style>
