import { createStore } from "vuex";
import { auth } from "./auth.module";
import { videos } from "./video.module";

const store = createStore({
  modules: {
    auth,
    videos,
  },
});

export default store;
