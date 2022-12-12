<template>
  <div class="bg-green-100 w-full">
    <div class="flex py-5">
      <div class="h-100vm bg-green-300 mx-4">
        <h2>Admin</h2>
        <div><button>Dashboard</button></div>
      </div>
      <div>
        <div class="flex gap-4 items-center w-full mx-4">
          <!-- flex-rap -->
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
            <!-- flex-rap -->
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
          <div class="bg-green-200 py-2 px-18 rounded-lg">
            revenu
            <h2>12121 birr</h2>
          </div>
          <div class="bg-red-200 py-2 px-18 rounded-lg">
            expense
            <h2>454454 birr</h2>
          </div>

          <div class="bg-yellow-200 py-2 px-18 rounded-lg">
            happy customers
            <h2>4845</h2>
          </div>
        </div>
        <div class="grid md:grid-cols-2 sm:grid-flow-cols-1">
          <div
            class="flex gap-1 border border-green-800 items-center my-2 mx-4"
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
          class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-flow-cols-1 gap-4 my-2 mx-4 items-center"
        >
          <div class="bg-white py-2 px-28 border rounded-lg  h-18">
            <h2>customers</h2>
            <h2>4545</h2>
          </div>
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>order</h2>
            <h2>487</h2>
          </div>
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>AVG sale $</h2>
            <h2>45</h2>
          </div>
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2 class="flex">AVG item sale</h2>
            <h2>54</h2>
          </div>

          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>total sale $</h2>
            <h2>7878</h2>
          </div>
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>visitors</h2>
            <h2>458</h2>
          </div>
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>total products</h2>
            <h2>4899</h2>
          </div>
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>top selling item</h2>
            <h2>4545</h2>
          </div>
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>visitors</h2>
            <h2>45</h2>
          </div>
          <div class="bg-white py-2 px-28 border rounded-lg h-18">
            <h2>dealership</h2>
            <h2>12</h2>
          </div>
        </div>
        <h1 class="m-4">Recent transactions</h1>
        <label for="recent-filter" class="mx-4">የሚታይ ረድፍ</label>
        <select id="recent-filter" class="my-2 mx-4">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>

        <table class="table w-full mx-4">
          <thead>
            <th>መለያ</th>
            <th>እቃ</th>
            <th>ገዥ</th>
            <th>ክፍያ አይነት</th>
            <th>ዋጋ</th>
            <th>ሁኔታ</th>
          </thead>
          <tbody>
            <tr>
              <td>#order-1</td>
              <td>ማዳበሪያ</td>
              <td>አበበ</td>
              <td>CBEbirr</td>
              <td>4500</td>
              <td>ተከፍሏል</td>
            </tr>
            <tr>
              <td>#order-2</td>
              <td>ማዳበሪያ</td>
              <td>አስቻለው</td>
              <td>አዋሽ ባንክ</td>
              <td>9000</td>
              <td>አልተከፈለም</td>
            </tr>
            <tr>
              <td>#order-2</td>
              <td>ማዳበሪያ</td>
              <td>አስቻለው</td>
              <td>አዋሽ ባንክ</td>
              <td>9000</td>
              <td>አልተከፈለም</td>
            </tr>
            <tr>
              <td>#order-2</td>
              <td>ማዳበሪያ</td>
              <td>አስቻለው</td>
              <td>አዋሽ ባንክ</td>
              <td>9000</td>
              <td>አልተከፈለም</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
th {
  background-color: black;
  color: white;
}
</style>
