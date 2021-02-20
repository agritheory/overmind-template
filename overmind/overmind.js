import { merge } from "overmind/config"
import { rehydrate } from 'overmind'

let state = {}

const initializeServer = async ({ state, actions, effects }) => {
  if (!process.server) { return }
  state.app = "Server"
  state.hydrated = "Overmind"
}

const initializeClient = async ({ state, actions, effects }) => {
	if (process.server) { return }
  state.app = "Client"
	rehydrate(state, window.__NUXT__.state)
}

let effects = {}
let actions = { initializeClient, initializeServer }


const onInitialize = async ({ state, actions, effects }, overmind) => {
	if (process.server) {
		actions.initializeServer()
	} else {
		actions.initializeClient()
	}
}

export const config = merge(
  {
    onInitialize,
    state,
    actions,
    effects
  }
)
