export default function Controls({
  buttonPause,
  buttonPlay,
  sounds,
  bodyTheme,
  buttonLightTheme,
  buttonDarkTheme
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }
  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    sounds.pause()
  }
  function stop() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    sounds.pause()
  }
  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  function theme() {
    bodyTheme.classList.toggle('darkTheme')
    buttonLightTheme.classList.toggle('hide')
    buttonDarkTheme.classList.toggle('hide')
  }

  function volume(volumeType) {
    sounds.volumeSetRange(volumeType)
  }

  return {
    play,
    pause,
    stop,
    reset,
    theme,
    volume
  }
}
