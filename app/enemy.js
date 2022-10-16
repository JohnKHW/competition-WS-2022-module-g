class Tank {
  life = 20
  fires = []
  tankId = null
  constructor(game, id, baseX) {
    this.game = game
    this.tankId = id
    this.baseX = baseX
    this.dom = document.getElementById(id)
  }
  isDead() {
    return this.life <= 0
  }
  hitted() {
    this.life--
  }

  update() {
    this.dom.style.transform = `translateX(${this.baseX + -this.game.x}px)`
  }
}
