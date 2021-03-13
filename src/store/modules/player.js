import { getRecommendListDetailRequest } from "@/api";
const state= () => {
    return {
        playList: [],
        currentIndex: -1,
        showPlayList: false,
        currentSong: {},
        playing: false
    }
};
const getters= {
    playList: (state) => state.playList,
    currentIndex: (state) => state.currentIndex,
    showPlayList: (state) => state.showPlayList,
    currentSong: (state) => state.currentSong,
    playing: (state) => state.playing,
};
const mutations= {
    setPlayList(state, playList){
        state.playList = playList;
        state.currentSong = playList[0];
    },
    setPlay(state, playing){
        state.playing = playing;
    }
};
const actions= {
    async fetchPlayList({commit}, id){
        const res = await getRecommendListDetailRequest(id);
        commit("setPlayList", res?.playlist.tracks);
    }
};

export default { state, getters, mutations, actions }
