<template>
  <div>
    <div
      class="h-screen shadow-md shadow-black ml-1 pl-4 lg:w-48 fixed top-15 smallScreenWidth"
    >
    <div class="items-center inline-block">
<img src="../assets/logo.jpg" alt="was logo image" srcset="" class="w-20 h-20 mt-5 items-center justify-center smallScreen">
      <h2 class="text-2xl mt-1 text-blue-900 smallScreen">
        Wereda Admin
      </h2>
    </div>

      <router-link to="/dashboard">
        <div class="flex gap-3 pt-6 items-center hover:text-green-600">
          <span
            ><svg
              class="w-6 h-6 fill-current"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="HomeOutlinedIcon"
              tabindex="-1"
              title="HomeOutlined"
            >
              <path
                d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
              ></path></svg
          ></span>
          <div>
            <button class="text-2xl smallScreen">ዳሽቦርድ</button>
          </div>
        </div>
      </router-link>
      <router-link to="/budgetForm">
        <div class="flex gap-3 pt-2 items-center hover:text-green-600">
          <span
            ><svg
              class="w-6 h-6 fill-current"
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
          <div>
            <button class="text-2xl smallScreen">
              በጀት
            </button>
          </div>
        </div>
      </router-link>
      <router-link to="/mazezForm">
        <div class="flex gap-3 pt-2 items-center hover:text-green-600">
          <span
            ><svg
              class="w-6 h-6 fill-current"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CampaignOutlinedIcon"
              tabindex="-1"
              title="CampaignOutlined"
            >
              <path
                d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm5.03 1.71L11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55l.48-.29zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"
              ></path></svg
          ></span>
          <div>
            <button class="text-2xl smallScreen">
              ማዘዣ አዉጣ
            </button>
          </div>
        </div>
      </router-link>
      <router-link to="/mastawokiya">
        <div class="flex gap-3 pt-2 items-center hover:text-green-600">
          <span
            ><svg
              class="w-6 h-6 fill-current"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AnnouncementOutlinedIcon"
              tabindex="-1"
              title="AnnouncementOutlined"
            >
              <path
                d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z"
              ></path></svg
          ></span>
          <div>
            <button class="text-2xl smallScreen">
              ማስታዎቂያ
            </button>
          </div>
        </div>
      </router-link>
      <router-link to="report">
        <div class="flex gap-3 pt-2 items-center hover:text-green-600">
          <span
            ><svg
              class="w-6 h-6 fill-current"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LocalPrintshopOutlinedIcon"
              tabindex="-1"
              title="LocalPrintshopOutlined"
            >
              <path
                d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"
              ></path>
              <circle cx="18" cy="11.5" r="1"></circle></svg
          ></span>
          <div>
            <button class="text-2xl smallScreen">
              ሪፖርት
            </button>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style>
a.router-link-exact-active {
  color: green;
}
@media screen and (max-width: 600px) {
  .smallScreen {
    display: none;
  }
  .smallScreenWidth {
    width: 50px;
  }
}
</style>
