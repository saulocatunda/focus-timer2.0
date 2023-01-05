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

  function loopAudio(typeSound) {
    var currentAudio = typeSound.muted
    typeSound.loop = !currentAudio
  }

  function florestBgSound() {
    florestSound.play()
    loopAudio(florestSound)
  }
  function cloudBgSound() {
    cloudSound.play()
    loopAudio(cloudSound)
  }
  function fireBgSound() {
    fireSound.play()
    loopAudio(fireSound)
  }
  function storeBgSound() {
    storeSound.play()
    loopAudio(storeSound)
  }

  return {
    florestBgSound,
    cloudBgSound,
    fireBgSound,
    storeBgSound,
    pause
  }
}
