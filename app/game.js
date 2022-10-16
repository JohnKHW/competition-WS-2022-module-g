class Game {
  x = 0
  enemies = []
  bombs = []
  playing = false
  gameOver = false
  score = 0
  life = 100
  mapSize = {width: 0, height: 0}
  // world origin of the game world to calculate the viewport pos
  worldOrigin = {x: 0, y: 0}

  instance = null

  scoreUI = null
  lifeUI = null

  constructor() {
    this.mapSize.width = dom.app.offsetWidth
    this.mapSize.height = dom.app.offsetHeight

    this.enemies = [
      new Tank(this, 'tank-1', 200),
      new Tank(this, 'tank-2', 400),
      new Tank(this, 'tank-3', 600),
    ]
    this.start()
    this.update()
  }

  update = () => {
    if (this.playing) {
      this.x++

      aircraft.update()
      this.enemies.forEach(e => e.update())
      requestAnimationFrame(this.update)

      dom.app.style.backgroundPositionX = -this.x + 'px'

      this.scoreUI.innerText = this.score
      this.lifeUI.innerText = this.life
    }
  }

  start() {
    this.playing = true
    this.scoreUI = document.getElementById('score')
    this.lifeUI = document.getElementById('life')
  }

  pause() {
    this.playing = false
  }

  // change the world position to viewport position
  conversePosition(position) {
    const {x, y} = position
    const {innerHeight, innerWidth} = window
    // display viewport position of the obj
    return vectorAdd(position, worldOrigin)
  }
}
