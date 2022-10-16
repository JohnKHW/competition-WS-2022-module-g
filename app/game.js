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
  
  //sington pattern
  static getInstance() {
    if (!Game.instance) {
      Game.instance = new Game()
    }
    return Game.instance
  }


  constructor() {
    this.mapSize.width = dom.app.offsetWidth
    this.mapSize.height = dom.app.offsetHeight

    this.start()
    this.update()
  }

  update = () => {
    if (this.playing) {
      aircraft.update()
      this.enemies.forEach(e => e.update())
      requestAnimationFrame(this.update)
    }
  }

  start() {
    this.playing = true
    // this.enemies = [...enemies]
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
