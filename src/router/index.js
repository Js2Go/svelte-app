import { wrap } from 'svelte-spa-router/wrap'
import Home from '../pages/index/index.svelte'
import My from '../pages/my/index.svelte'

const routes = {
  '/': Home,
  '/my/:id/:version?': My,
}

export default routes
