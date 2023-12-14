import state from "./state.js";
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countDown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function setFiveMinutes() {
  state.minutes =  state.minutes >= 60 ? 60 : state.minutes += 5
  timer.updateDisplay()
}

export function removeFiveMinutes() {
  state.minutes =  state.minutes <= 5 ? 5 : state.minutes - 5
  timer.updateDisplay()
}