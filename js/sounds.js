export default function () {
  const florestSound = new Audio('/audios/Floresta.wav')
  const cloudSound = new Audio('/audios/Chuva.wav')
  const fireSound = new Audio('/audios/Lareira.wav')
  const storeSound = new Audio('/audios/Cafeteria.wav')

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
