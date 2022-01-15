import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

//Calling the Vue.use() global method
Vue.use(Vuex);

const GET_VIDEOS = "getVideos";

const store = new Vuex.Store({
    state: {
        videos: []
    },
    //Like computed properties
    getters: {
        getFavoriteVideos(state) {
            return state.videos.filter(video => video.favorite);
        }
    },
    //change state
    mutations:{
        [GET_VIDEOS](state, payload) {
            state.videos = payload;
        }
    },
    //Actions are similar to mutations, the differences being that:
    //Instead of mutating the state, actions commit mutations.
    //Actions can contain arbitrary asynchronous operations.
    actions: {
        //use of object destructing
        async fetchVideos({commit}) {
            await axios
                .get(`${process.env.VUE_APP_BASE_API_URL}/videos`)
                .then(res => {
                    commit(GET_VIDEOS, res.data);
                })
                .catch(error => {
                    console.error('err', error);
                })
        }
    }
});

export default store;
