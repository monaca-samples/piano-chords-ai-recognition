import PredictingPage from "../pages/PredictingPage.vue";
import LoadingPage from "../pages/LoadingPage.vue";

var routes = [
  {
    path: "/",
    component: LoadingPage,
  },
  {
    path: "/predicting",
    component: PredictingPage,
  }
];

export default routes;
