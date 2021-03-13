// 全局注册的组件
import Vue from 'vue'
import Card1 from "./PlayCard/card1"
import Card2 from "./PlayCard/card2"
import TitleHeader from "./TitleHeader/"
import Player from "./Player/"

Vue.component("card1",Card1);
Vue.component("card2",Card2);
Vue.component("player",Player);
Vue.component("title-header",TitleHeader);
