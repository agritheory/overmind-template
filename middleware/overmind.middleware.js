export default function overmind({ req, $overmind, beforeNuxtRender, app }) {
  if (process.server) {
    beforeNuxtRender(({ nuxtState }) => {
			const toHydrate = $overmind.hydrate()
      nuxtState.state = toHydrate
    })
  }
}
