class Fire {}


class TankFire extends Fire {
  constructor() {}
}

class SoldierFire extends Fire {}

class AirCraftFire {}

class AirCraftBomb {
  y = 0
  speed = 10
  constructor() {}

  start() {
    const el = document.createElement('div')
    el.style.position = 'absolute'
    el.classList.add('bomb')

  }

  update () {
    this.y += speed
  }

  isRemove() {
    return y > innerHeight
  }

}
