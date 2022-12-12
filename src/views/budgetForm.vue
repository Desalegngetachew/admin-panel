<template>
  <div class="bg-green-50 w-full flex ">
    <div>
      <adminSideBarVue/>
    </div>
    <div class="budgetWidth">
      <h2 class="text-4xl ml-8 justify-center items-center">በጀት አስገባ</h2>
      <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="inline-block">
          <h2 class="text-3xl">ለአንድ ቀበሌ</h2>
          <form action="">
            <div class="grid grid-cols-1">
              <label for="amount">መጠን: </label>
              <input
                type="number"
                id="amount"
                v-model="amountOne"
                placeholder="መጠን"
                class="border border-green-900 p-2 valid:border-green-500"
                required
              />
              <label for="kebele" class="mt-2">ቀበሌ ምረጥ</label>
              <select
                name="Kebele"
                id="kebele"
                v-model="selectOne"
                required
                class="p-3 border border-green-600 valid:border-green-500"
              >
                <option value="">ቀበሌ ምረጥ</option>
                <option value="1">ቀበሌ 01</option>
                <option value="2">ቀበሌ 02</option>
                <option value="3">ቀበሌ 03</option>
                <option value="4">ቀበሌ 04</option>
                <option value="5">ቀበሌ 05</option>
                <option value="6">ቀበሌ 06</option>
                <option value="7">ቀበሌ 07</option>
                <option value="8">ቀበሌ 08</option>
                <option value="9">ቀበሌ 09</option>
                <option value="10">ቀበሌ 10</option>
                <option value="11">ቀበሌ 11</option>
                <option value="12">ቀበሌ 12</option>
                <option value="13">ቀበሌ 13</option>
                <option value="14">ቀበሌ 14</option>
                <option value="15">ቀበሌ 15</option>
                <option value="16">ቀበሌ 16</option>
              </select>
              <label for="textarea">ምክንያት</label>
              <textarea
                v-model="reasonOne"
                name=""
                id="textarea"
                cols="30"
                rows="4"
                placeholder="የበጀት ምክንያት"
                class="border border-green-900"
              ></textarea>
              <button
                class="bg-green-500 p-3 mt-4 w-24 hover:bg-green-300 rounded-lg"
              >
                ላክ
              </button>
            </div>
          </form>
          <h1>amount: {{amountOne}}</h1>
          <h1>reason: {{reasonOne}}</h1>
          <h1>Selected: {{selectOne}}</h1>
        </div>
        <div class="inline-block">
          <h2 class="text-3xl">ለሁሉም ቀበሌ</h2>
          <form action="">
            <div class="grid grid-cols-1">
              <label for="amount">መጠን: </label>
              <input
                type="number"
                id="amount"
                v-model="amountMult"
                placeholder="መጠን"
                class="border border-green-600 p-2 valid:border-green-500"
                required
              />
              <label for="allTextarea">ምክንያት</label>
            </div>
            <textarea
              name=""
              id="allTextarea"
              cols="60"
              rows="4"
              v-model="reasonMult"
              placeholder="ምክንያት"
              class="border border-green-900 mb-5 w-full"
            ></textarea>
            <div class="gap-2 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
              <div class="gap-3">
                <span><label for="1">01: </label></span>
                <span
                  ><input type="checkbox" v-model="SelectMult" name="01" id="1" value="01"
                /></span>
              </div>
              <div>
                <label for="2">02: </label>
                <input type="checkbox" v-model="SelectMult" name="02" id="2" value="02" />
              </div>
              <div>
                <label for="3">03: </label>
                <input type="checkbox" v-model="SelectMult" name="03" id="3" value="03" />
              </div>
              <div>
                <label for="4">04: </label>
                <input type="checkbox" v-model="SelectMult" name="04" id="4" value="04" />
              </div>
              <div>
                <label for="5">05: </label>
                <input type="checkbox" v-model="SelectMult" name="05" id="5" value="05" />
              </div>
              <div>
                <label for="6">06: </label>
                <input type="checkbox" v-model="SelectMult" name="06" id="6" value="06" />
              </div>
              <div>
                <label for="7">07: </label>
                <input type="checkbox" v-model="SelectMult" name="07" id="7" value="07" />
              </div>
              <div>
                <label for="8">08: </label>
                <input type="checkbox" v-model="SelectMult" name="08" id="8" value="08" />
              </div>
              <div>
                <label for="9">09: </label>
                <input type="checkbox" v-model="SelectMult" name="09" id="9" value="09" />
              </div>
              <div>
                <label for="10">10: </label>
                <input type="checkbox" v-model="SelectMult" name="10" id="10" value="10" />
              </div>
              <div>
                <label for="11">11: </label>
                <input type="checkbox" v-model="SelectMult" name="11" id="11" value="11" />
              </div>
              <div>
                <label for="12">12: </label>
                <input type="checkbox" v-model="SelectMult" name="12" id="12" value="12" />
              </div>
              <div>
                <label for="13">13: </label>
                <input type="checkbox" v-model="SelectMult" name="13" id="13" value="13" />
              </div>
              <div>
                <label for="14">14: </label>
                <input type="checkbox" v-model="SelectMult" name="14" id="14" value="14" />
              </div>
              <div>
                <label for="15">15: </label>
                <input type="checkbox" v-model="SelectMult" name="15" id="15" value="15" />
              </div>
              <div>
                <label for="16">16: </label>
                <input type="checkbox" v-model="SelectMult" name="16" id="16" value="16" />
              </div>
            </div>
            <div>
              <button
                class="bg-green-500 p-3 w-24 hover:bg-green-400 rounded-lg"
              >
                ላክ
              </button>
            </div>
          </form>
          <h1>amount: {{amountMult}}</h1>
          <h1>Reason: {{reasonMult}}</h1>
          <h1>SelectMult: {{SelectMult}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import adminSideBarVue from "../components/adminSideBar.vue";
const amountOne = ref("");
const selectOne = ref([]);
const reasonOne = ref("");
const amountMult = ref("");
const reasonMult = ref("");
const SelectMult = ref([]);
</script>

<style scoped>

@media screen and (max-width:600px) {
  .budgetWidth{
margin-left: 60px;
  }
}
@media screen and (min-width:600px) {
  .budgetWidth{
margin-left: 190px;
  }
}
@media screen and (min-width:1020px) {
  .budgetWidth{
margin-left: 205px;
  }
}
</style>
