import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonCloud,
  buttonFire,
  buttonStore,
  buttonTree,
  buttonLightTheme,
  buttonDarkTheme,
  volumeRangeFlorest,
  volumeRangeFire,
  volumeRangeStore,
  volumeRangeCloud
} from './elements.js'

export default function eventListener({ controls, timer, sounds }) {
  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.pause()
  })

  buttonStop.addEventListener('click', () => {
    controls.stop()
    timer.reset()
  })

  buttonUp.addEventListener('click', () => {
    timer.timerUp()
  })
  buttonDown.addEventListener('click', () => {
    timer.timerDown()
  })

  buttonCloud.addEventListener('click', () => {
    sounds.pause()
    sounds.cloudBgSound()

  })
  buttonTree.addEventListener('click', () => {
    sounds.pause()
    sounds.florestBgSound()
  })
  buttonFire.addEventListener('click', () => {
    sounds.pause()
    sounds.fireBgSound()
  })
  buttonStore.addEventListener('click', () => {
    sounds.pause()
    sounds.storeBgSound()
  })
  buttonLightTheme.addEventListener('click', () => {
    controls.theme()
  })
  buttonDarkTheme.addEventListener('click', () => {
    controls.theme()
  })
  volumeRangeFlorest.addEventListener('click', () => {
    console.log(volumeRangeFlorest.valueAsNumber)
    controls.volume(volumeRangeFlorest.valueAsNumber)
  })
  volumeRangeFire.addEventListener('click', () => {
    console.log(volumeRangeFire.valueAsNumber)
    controls.volume(volumeRangeFire.valueAsNumber)
  })
  volumeRangeStore.addEventListener('click', () => {
    console.log(volumeRangeStore.valueAsNumber)
    controls.volume(volumeRangeStore.valueAsNumber)
  })
  volumeRangeCloud.addEventListener('click', () => {
    console.log(volumeRangeCloud.valueAsNumber)
    controls.volume(volumeRangeCloud.valueAsNumber)
  })
}
