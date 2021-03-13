import axios from 'axios';
import { baseURL } from "@/config"
// axios的实例及拦截器配置
const axiosInstance = axios.create({
    baseURL
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
);

// 轮播图
export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

// 推荐歌单
export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized?limit=8');
}

export const getAlbumNewest = () => {
  return axiosInstance.get('/album/newest');
}

export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= (category, alpha, count) => {
  return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
}

export const getRecommendListDetailRequest = (id) => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
}

export const getSingerInfoRequest = (id) => {
  return axiosInstance.get(`/artists?id=${id}`);
}

export const getRankListDetailRequest = (id) => {
  return axiosInstance.get(`/top/list/?idx=${id}`);
}

export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
}

export const getSuggestListRequest = (query) => {
  return axiosInstance.get(`/search/suggest?keywords=${query}`);
}

export const getResultSongsListRequest = (query) => {
  return axiosInstance.get(`/search?keywords=${query}`);
}

export const getSongDetailRequest = (id) => {
  return axiosInstance.get(`/song/detail?ids=${id}`);
}

export const getLyricRequest = (id) => {
  return axiosInstance.get(`/lyric?id=${id}`);
}
