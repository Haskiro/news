import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articlesList: [],
        count: 1
    },
    getters: {
        getSliderList: state => {
            return state.articlesList.filter(article => article.slider);
        },
        getArticleById: state => id => {
            return state.articlesList.find(article => article.id == id)
        }

    },
    mutations: {
        setArticleList(state, newArtcileList) {
            state.articlesList = newArtcileList;
        },
    },
    actions: {
        async getArticles({ commit }) {
            await axios
                .get("/articles.json")
                .then((response) => {
                    commit('setArticleList', response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
})

export default store;