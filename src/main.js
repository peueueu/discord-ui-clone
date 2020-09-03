import Vue from "vue";
import defaultLayout from "./Layouts/default";

import "./styles/main.scss";

new Vue({
  el: "#app",
  render: h => h(defaultLayout)
});
