import router from '@/router'
import store from '@/store'
// import VabProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import getPageTitle from '@/utils/pageTitle'
import {
  authentication,
  loginInterception,
  progressBar,
  recordRoute,
  routesWhiteList,
} from '@/config'

VabProgress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
})
router.beforeResolve(async (to, from, next) => {
  // if (progressBar) VabProgress.start();
});
router.afterEach(() => {
  // if (progressBar) VabProgress.done()
});
