<template>
  <div class="bg-green-100 sm:bg-green-100 w-full">
    <div class="flex">
      <div>
        <admin-side-bar-vue />
      </div>

      <div class="ml-52 dashboard">
        <div class="flex gap-4 items-center w-full pt-4 mx-4">
          <div class="flex">
            <span
              ><input
                type="text"
                placeholder="ፈልግ"
                class="p-3 border border-green-500"
            /></span>
            <span
              ><button class="bg-green-500 hover:bg-green-400 p-3">
                ፈልግ
              </button></span
            ><br />
          </div>
          <div class="flex gap-5 justify-end right-5 items-center">
            <div><button class="bg-green-500 px-2">i</button></div>
            <div class="animate-ping">
              <svg
                class="fill-current text-black w-5 h-5"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NotificationsIcon"
                tabindex="-1"
                title="Notifications"
              >
                <path
                  d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                ></path>
              </svg>
            </div>
            <div>img</div>
            <div>
              <svg
                class="fill-content text-black w-5 h-5"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SettingsIcon"
                tabindex="-1"
                title="Settings"
              >
                <path
                  d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-flow-cols-1 gap-4 items-center m-4"
        >
          <div
            class="bg-green-200 py-2 px-18 rounded-lg flex items-center gap-4"
          >
            <span
              ><svg
                class="ml-3 w-7 h-7 fill-current text-blue-900"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="MonetizationOnOutlinedIcon"
                tabindex="-1"
                title="MonetizationOnOutlined"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"
                ></path>
              </svg>
            </span>
            <div class="block text-blue-900">
              <span>የተገኘ ገቢ</span>
              <h2>12121 ብር</h2>
            </div>
          </div>
          <div class="bg-red-200 py-2 px-18 rounded-lg flex gap-4 items-center">
            <span
              ><svg
                class="ml-3 w-7 h-7 fill-current text-blue-900"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CardGiftcardOutlinedIcon"
                tabindex="-1"
                title="CardGiftcardOutlined"
              >
                <path
                  d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"
                ></path></svg
            ></span>
            <div class="text-blue-900">
              <span>በጀት</span>
              <h2>454454 ብር</h2>
            </div>
          </div>

          <div
            class="bg-yellow-200 py-2 px-18 rounded-lg flex gap-4 items-center"
          >
            <span
              ><svg
                class="w-7 h-7 fill-current text-blue-900 ml-3"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AttachMoneyOutlinedIcon"
                tabindex="-1"
                title="AttachMoneyOutlined"
              >
                <path
                  d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                ></path></svg
            ></span>
            <div class="text-blue-900">
              <span> የተጣራ ትርፍ</span>
              <h2>1645 ብር</h2>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 sm:grid-flow-cols-1">
          <div
            class="flex gap-1 border border-green-800 items-center my-2 mx-4 w-[45%]"
          >
            <button class="hover:bg-green-300 px">ዛሬ</button>
            <button class="hover:bg-green-300 px-3">ሳምንት</button>
            <button class="hover:bg-green-300 px-3">ወር</button>
            <button class="hover:bg-green-300 px-3">አመት</button>
          </div>
          <div class="flex justify-end right-5">
            <input type="date" />
            <div>
              <button class="bg-green-500 hover:bg-green-300 p-1">
                filter
              </button>
            </div>
          </div>
        </div>
        <div
          class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-2 mx-4 items-center"
        >
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>ቀበሌ</h2>
            <h2>30</h2>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 01</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 02</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 03</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 04</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 05</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 06</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 07</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 08</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 09</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 10</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 11</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 12</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 13</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 14</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 15</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
          <div
            class="bg-white py-2 pl-3 gap-4 text-blue-900 items-center border rounded-lg h-18 flex"
          >
            <div><h2>ቀበሌ 16</h2></div>
            <div>
              <h2>በጀት፡ 487</h2>
              <h2>የሸጠዉ፡ 847</h2>
            </div>
          </div>
        </div>
        <h1 class="m-4">Recent transactions</h1>
        <label for="recent-filter" class="mx-4">የሚታይ ረድፍ</label>
        <select id="recent-filter" class="my-2 mx-4">
          <option value="10">5</option>
          <option value="25">10</option>
          <option value="50">30</option>
        </select>

        <table class="table ml-4 min-w-full">
          <thead class="bg-black text-white">
            <th class="">ቀበሌ</th>
            <th class="">ገቢ</th>
            <th class="f">ምርመራ</th>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>2000</td>
              <td>
                <button class="bg-green-600 hover:bg-green-300">detail</button>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>5000</td>
              <td>
                <button class="bg-green-600 hover:bg-green-300">detail</button>
              </td>
            </tr>
            <tr>
              <td>05</td>
              <td>12</td>
              <td>
                <button class="bg-green-600 hover:bg-green-300">detail</button>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>454</td>
              <td>
                <button class="bg-green-600 hover:bg-green-300">detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import adminSideBarVue from "../components/adminSideBar.vue";
</script>

<style scoped>
.table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
@media screen and (max-width: 600px) {
  .dashboard {
    margin-left: 50px;
  }
}
@media screen and (min-width: 600px) {
  .dashboard {
    margin-left: 190px;
  }
}
</style>
