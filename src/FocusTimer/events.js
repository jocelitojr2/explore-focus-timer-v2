import { controlsTimer , controlsMusic } from "./elements.js"
import * as actions from "./actions.js"
import * as musicActions from "./music-actions.js"

export function registerControls() {
  controlsTimer.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != "function") {
      return
    }
    
    actions[action]()
  })

  controlsMusic.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    
    if(typeof musicActions[action] != "function") {
      return
    }
    
    musicActions[action](event)
  })
}