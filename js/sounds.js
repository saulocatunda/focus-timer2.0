export default function () {
  const florestSound = new Audio(
    'https://github.com/saulocatunda/focus-timer2.0/blob/main/assets/audios/Floresta.mp3?raw=true'
  )
  const cloudSound = new Audio(
    'https://github.com/saulocatunda/focus-timer2.0/blob/main/assets/audios/Chuva.mp3?raw=true'
  )
  const fireSound = new Audio(
    'https://github.com/saulocatunda/focus-timer2.0/blob/main/assets/audios/Lareira.mp3?raw=true'
  )
  const storeSound = new Audio(
    'https://github.com/saulocatunda/focus-timer2.0/blob/main/assets/audios/Cafeteria.mp3?raw=true'
  )

  function pause() {
    florestSound.pause()
    cloudSound.pause()
    fireSound.pause()
    storeSound.pause()
  }

  var currentAudio
  var halfVolume = 0.5

  function loopAudio() {
    currentAudio.loop = currentAudio.muted == false ? true : false
  }

  function florestBgSound() {
    florestSound.play()
    currentAudio = florestSound
    loopAudio()
    currentAudio.volume = halfVolume
  }

  function cloudBgSound() {
    cloudSound.play()
    currentAudio = cloudSound
    loopAudio()
    currentAudio.volume = halfVolume
  }

  function fireBgSound() {
    fireSound.play()
    currentAudio = fireSound
    loopAudio()
    currentAudio.volume = halfVolume
  }

  function storeBgSound() {
    storeSound.play()
    currentAudio = storeSound
    loopAudio()
    currentAudio.volume = halfVolume
  }

  function volumeSetRange(volumeSet) {
    currentAudio.volume = volumeSet
  }

  return {
    florestBgSound,
    cloudBgSound,
    fireBgSound,
    storeBgSound,
    pause,
    volumeSetRange
  }
}
