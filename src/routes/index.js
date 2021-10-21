import Home from "../views/Home";
import Yay from "../views/Yay";
import Old from "../views/Old";
import Nay from "../views/Nay";
import Derailed from "../views/Derailed";

export default [
  { path: "/yay/:hex", component: Yay },
  { path: "/old/:hex", component: Old },
  { path: "/nay/:hex?", component: Nay },
  { path: "/derailed/:hex", component: Derailed },
  { path: "*", component: Home },
];
