import Vue from "vue"
import { createOvermind, createOvermindSSR } from "overmind"
import { createPlugin } from "overmind-vue"
import {config} from '../overmind/overmind.js'


const OvermindPlugin = context => {
  let overmind = {}
  if (process.server) {
    overmind = createOvermindSSR(config)
    Vue.use(createPlugin(overmind))
    context.$overmind = overmind
  } else {
    overmind = createOvermind(config)
    Vue.use(createPlugin(overmind))
    context.$overmind = overmind
		overmind.actions.initializeClient()
  }
}

export default OvermindPlugin