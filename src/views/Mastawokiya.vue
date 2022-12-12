<template>
  <div class="w-full bg-green-100">
    <div class="flex gap-4">
      <div>
        <adminSideBarVue />
      </div>
      <div class="lg:ml-52 mastawokiyaWidth">
        <div class="text-3xl justify-center items-center mt-4 mx-14">
          <h1>ማስታዎቂያ መልቀቂያ ፎርም</h1>
        </div>
        <div class="mx-4">
          <form action="">
            <div class="mt-4">
              <label for="textArea" class="text-2xl">ማስታዎቂያ ጻፍ:</label>
              <textarea
                v-model="textA"
                name="textArea"
                id="textArea"
                cols="30"
                rows="2"
                placeholder="ማስታዎቂያ ጻፍ"
                class="border border-green-900"
              ></textarea>
            </div>
            <div class="mt-2">
              <label for="date" class="text-2xl">ቀን፡ </label>
              <input type="date" name="date" id="date" v-model="dat" />
            </div>
            <div class="mt-2">
              <label for="fil" class="text-2xl">ፋይል አስገባ: </label>
              <input type="file" name="fil" id="fil" />
            </div>
          </form>
        </div>
        <h1>Date: {{ dat }}</h1>
        <h1>Mastawokiya: {{ textA }}</h1>
        <h1>counter from pinia: {{ countData.count }}</h1>
        <h1>name from pinia: {{ countData.name }}</h1>
        <h1>{{ countData.count }}</h1>
        <button
          @click="countData.increment"
          class="bg-green-400 hover:bg-green-900 p-3 m-3"
        >
          increment: {{ countData.count }}
        </button>
        <button
          @click="countData.decrement"
          class="bg-green-400 hover:bg-green-900 p-3 m-3"
        >
          decrement: {{ countData.count }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useCounterStore } from "@/stores/index";
import adminSideBarVue from "../components/adminSideBar.vue";
const dat = ref("");
const countData = useCounterStore();
// const increment = () => {
//   countData.increment();
//   console.log(countData.count);
// };

const textA = ref("");
</script>

<style>
/*@media screen and (max-width: 600px) {
  .budgetWidth {
    margin-left: 60px;
  }
}*/

@media screen and (max-width: 600px) {
  .mastawokiyaWidth {
    margin-left: 50px;
  }
}
@media screen and (min-width: 600px) {
  .mastawokiyaWidth {
    margin-left: 190px;
  }
}
</style>
