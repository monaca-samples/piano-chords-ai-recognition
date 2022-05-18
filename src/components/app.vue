<template>
  <f7-app v-bind="f7params">
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
import { onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";

import routes from "../js/routes.js";
import helperFunctions from "../js/helperFunctions";

export default {
  setup() {
    // Framework7 Parameters
    const f7params = {
      name: "Piano Chords AI Recognition", // App name
      theme: "auto", // Automatic theme detection
      routes: routes, // App routes
      navbar: {
        mdCenterTitle: true,
      },
    };
    onMounted(() => {
      f7ready(async () => {
        if(helperFunctions.isIos()){
          alert("Access to microphone does not yet work for iOS devices.")
        }
        await helperFunctions.loadModel();

        f7.views.current.router.navigate("/predicting", {
          transition: "f7-dive",
          clearPreviousHistory: true,
        });
      });
    });
    return {
      f7params,
    };
  },
};
</script>
