import state from "./state.js";
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function mForest(event) {
  state.isMute = document.documentElement.classList.toggle('music-forest')

  if(state.isMute) {
    event.target.classList.add('active')
    sounds.mForest.play()
    return
  }

  event.target.classList.remove('active')
  sounds.mForest.pause()
}

export function mRain(event) {
  state.isMute = document.documentElement.classList.toggle('music-rain')
  
  if(state.isMute) {
    event.target.classList.add('active')
    sounds.mRain.play()
    return
  }

  event.target.classList.remove('active')
  sounds.mRain.pause()
}

export function mCoffeShop(event) {
  state.isMute = document.documentElement.classList.toggle('music-coffeShop')

  if(state.isMute) {
    event.target.classList.add('active')
    sounds.mCoffeShop.play()
    return
  }

  event.target.classList.remove('active')
  sounds.mCoffeShop.pause()
}

export function mFireplace(event) {
  state.isMute = document.documentElement.classList.toggle('music-Fireplace')

  if(state.isMute) {
    event.target.classList.add('active')
    sounds.mFireplace.play()
    return
  }

  event.target.classList.remove('active')
  sounds.mFireplace.pause()
}