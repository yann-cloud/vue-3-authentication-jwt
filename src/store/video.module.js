import VideoService from '../services/videos.service';

const video = JSON.parse(localStorage.getItem('videos'));
const initialState = video
  ? { status: { fetched: true }, video }
  : { status: { fetched: false }, video: null };

export const videos = {
  namespaced: true,
  state: initialState,
  actions: {
    all({ commit }, vid) {
      return VideoService.getAll(vid).then(
        video => {
          commit('Fetched', video);
          return Promise.resolve(video);
        },
        error => {
          commit('unFetched');
          return Promise.reject(error);
        }
      );
    },
    // logout({ commit }) {
    //   AuthService.logout();
    //   commit('logout');
    // },
    // register({ commit }, user) {
    //   return AuthService.register(user).then(
    //     response => {
    //       commit('registerSuccess');
    //       return Promise.resolve(response.data);
    //     },
    //     error => {
    //       commit('registerFailure');
    //       return Promise.reject(error);
    //     }
    //   );
    // }
  },
  mutations: {
    Fetched(state, video) {
      state.status.fetched = true;
      state.video = video;
    },
    unFetched(state) {
      state.status.fetched = false;
      state.user = null;
    },
    
  }
};
