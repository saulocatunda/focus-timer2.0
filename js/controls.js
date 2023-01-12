export default function Controls({
  buttonPause,
  buttonPlay,
  sounds,
  bodyTheme,
  buttonLightTheme,
  buttonDarkTheme
}) {
  var lastSelectedCard
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
  function selectedCardReset() {
    var verifierSelectedCard = lastSelectedCard == undefined ? false : true
    if (verifierSelectedCard) {
      lastSelectedCard.classList.remove('selected')
    }
  }
  function selectedCard(cardSelected) {
    cardSelected.classList.add('selected')
    lastSelectedCard = cardSelected
  }

  function volume(volumeType) {
    sounds.volumeSetRange(volumeType)
  }

  function resetVolumeControl(rangeType) {
    rangeType.valueAsNumber = 0.5
  }
  return {
    play,
    pause,
    stop,
    reset,
    theme,
    volume,
    resetVolumeControl,
    selectedCard,
    selectedCardReset
  }
}
