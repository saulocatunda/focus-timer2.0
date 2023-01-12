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
    controls.selectedCardReset()
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
    controls.resetVolumeControl(volumeRangeCloud)
    controls.selectedCardReset()
    controls.selectedCard(buttonCloud)
  })
  buttonTree.addEventListener('click', () => {
    sounds.pause()
    sounds.florestBgSound()
    controls.resetVolumeControl(volumeRangeFlorest)
    controls.selectedCardReset()
    controls.selectedCard(buttonTree)
  })
  buttonFire.addEventListener('click', () => {
    sounds.pause()
    sounds.fireBgSound()
    controls.resetVolumeControl(volumeRangeFire)
    controls.selectedCardReset()
    controls.selectedCard(buttonFire)
  })
  buttonStore.addEventListener('click', () => {
    sounds.pause()
    sounds.storeBgSound()
    controls.resetVolumeControl(volumeRangeStore)
    controls.selectedCardReset()
    controls.selectedCard(buttonStore)
  })
  buttonLightTheme.addEventListener('click', () => {
    controls.theme()
  })
  buttonDarkTheme.addEventListener('click', () => {
    controls.theme()
  })
  volumeRangeFlorest.addEventListener('click', event => {
    event.stopPropagation()
    controls.volume(volumeRangeFlorest.valueAsNumber)
  })
  volumeRangeFire.addEventListener('click', event => {
    event.stopPropagation()
    controls.volume(volumeRangeFire.valueAsNumber)
  })
  volumeRangeStore.addEventListener('click', event => {
    event.stopPropagation()
    controls.volume(volumeRangeStore.valueAsNumber)
  })
  volumeRangeCloud.addEventListener('click', event => {
    event.stopPropagation()
    controls.volume(volumeRangeCloud.valueAsNumber)
  })
}
