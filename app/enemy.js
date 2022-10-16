class Tank {
  life = 20
  fires = []
  tankId = null
  constructor(game, id) {
    this.game = game
    this.tankId = id
    this.dom = document.getElementById(id)
  }
  isDead() {
    return this.life <= 0
  }
  hitted() {
    this.life--
  }

  update() {
    this.dom.style.transform = `translateX(${-this.game.x}px)`
  }
}
