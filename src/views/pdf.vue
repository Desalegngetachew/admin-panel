<template>
  <div class="bg-green-100">
    <div class="flex">
    <div>
      <adminSideBarVue/>
    </div>
    <div class="ml-52 pdf">
    <h1>print</h1>
    <div ref="content">
        <button @click="download" class="p-2 rounded-lg bg-green-600 hover:bg-green-300
        ">
Print
    </button>
</div>
</div>
</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import jspdf from "jspdf";
import adminSideBarVue from "../components/adminSideBar.vue";
function download() {
    const doc = new jspdf()
    const html = this.$refs.content.innerHtml
    doc.fromHTML(html,15,15, {width:150});
doc.save("print.pdf");
}
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .pdf {
    margin-left: 60px;
  }
}
@media screen and (min-width: 600px) {
  .pdf {
    margin-left: 190px;
  }
}
</style>
