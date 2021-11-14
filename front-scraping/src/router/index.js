import FranceList from "../components/FranceList.vue";
import InfoList from "../components/InfoList.vue";

const routes = [
  {
    path: "/french-list",
    name: "FranceList",
    component: FranceList,
  },
  {
    path: "/info-list",
    name: "InfoList",
    component: InfoList,
  },
];

export default routes;
