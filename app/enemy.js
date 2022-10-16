class Enemy {
  fires = []
  isDead() {
    return this.life <= 0
  }
  hitted() {
    this.life--
  }

  update() {
    this.fires.forEach(e => {
      e.update()
    })
  }
}

class Soldier extends Enemy {
  life = 1

  constructor() {}
}

class Tank extends Enemy {
  life = 20
  constructor() {}
}
