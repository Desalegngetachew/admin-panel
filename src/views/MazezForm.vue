<template>
  <div class="w-full h-full flex bg-green-100 ">
    <div>
      <adminSideBarVue/>
    </div>
    <div class="mt-4 w-full ml-52 mazezWidth">
      <h1 class="text-4xl justify-center mx-36">ማዘዣ መላኪያ ፎርም</h1>
      <div class="mx-5">
        <form action="" class="grid grid-cols-1">
          <label for="keb" class="text-2xl">ቀበሌ ምረጥ፡ </label>
          <div
            class="gap-2 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 m-4 items-center justify-center"
          >
            <div class="gap-3">
              <span><label class="text-2xl" for="1">01: </label></span>
              <spa 
                ><input
                  type="checkbox"
                  v-model="SelectMultiple"
                  name="01"
                  id="1"
                  value="01"
              /></spa>
            </div>
            <div>
              <label class="text-2xl" for="2">02: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="02"
                id="2"
                value="02"
              />
            </div>
            <div>
              <label class="text-2xl" for="3">03: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="03"
                id="3"
                value="03"
              />
            </div>
            <div>
              <label class="text-2xl" for="4">04: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="04"
                id="4"
                value="04"
              />
            </div>
            <div>
              <label class="text-2xl" for="5">05: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="05"
                id="5"
                value="05"
              />
            </div>
            <div>
              <label class="text-2xl" for="6">06: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="06"
                id="6"
                value="06"
              />
            </div>
            <div>
              <label class="text-2xl" for="7">07: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="07"
                id="7"
                value="07"
              />
            </div>
            <div>
              <label class="text-2xl" for="8">08: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="08"
                id="8"
                value="08"
              />
            </div>
            <div>
              <label class="text-2xl" for="9">09: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="09"
                id="9"
                value="09"
              />
            </div>
            <div>
              <label class="text-2xl" for="10">10: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="10"
                id="10"
                value="10"
              />
            </div>
            <div>
              <label class="text-2xl" for="11">11: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="11"
                id="11"
                value="11"
              />
            </div>
            <div>
              <label class="text-2xl" for="12">12: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="12"
                id="12"
                value="12"
              />
            </div>
            <div>
              <label class="text-2xl" for="13">13: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="13"
                id="13"
                value="13"
              />
            </div>
            <div>
              <label class="text-2xl" for="14">14: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="14"
                id="14"
                value="14"
              />
            </div>
            <div>
              <label class="text-2xl" for="15">15: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="15"
                id="15"
                value="15"
              />
            </div>
            <div>
              <label class="text-2xl" for="16">16: </label>
              <input 
                type="checkbox"
                v-model="SelectMultiple"
                name="16"
                id="16"
                value="16"
              />
            </div>
          </div>
          <div>
            <div class="pt-2 items-center">
              <label for="textare" class="text-2xl">ትዕዛዝ መጻፊያ: </label>
              <textarea
                v-model="message"
                name=""
                id="textare"
                cols="60"
                rows="4"
                placeholder="ትዕዛዝ እዚህ አስገባ"
                class="border border-green-900"
              ></textarea>
            </div>
            <div class="mt-2">
              <label for="file" class="text-2xl">ፎቶ(ፋይል) አስገባ: </label>
              <input type="file" name="" id="file" />
            </div>
            <div class="mt-2">
              <label for="dat" class="text-2xl">ቀን አስገባ: </label>
              <input type="date" name="" id="dat" v-model="date" />
            </div>
            <div>
              <button
                class="bg-green-500 p-2 mt-4 w-24 shadow-md shadow-black text-2xl hover:bg-green-900 hover:scale-90 hover:text-white hover:text-3xl rounded-lg"
              >
                ላክ
              </button>
            </div>
          </div>
        </form>
        <h1>Selected: {{ SelectMultiple }}</h1>
        <h1>Message: {{ message }}</h1>
        <h1>Date: {{ date }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import adminSideBarVue from "../components/adminSideBar.vue";
const SelectMultiple = ref([]);
const message = ref("");
const date = ref(null);
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .mazezWidth {
    margin-left: 50px;
  }
}
@media screen and (min-width: 600px) {
  .mazezWidth {
    margin-left: 190px;
  }
}
</style>
