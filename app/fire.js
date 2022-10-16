class Fire {
  update() {
    throw new Error('update is not implemented')
  }
}

class TankFire extends Fire {
  constructor() {}
}

class AirCraftFire {
  y = {
    prev: 0,
    current: 0,
  }
  x = {
    prev: 0,
    current: 0,
  }
  speed = 3
  el = document.createElement('div')
  constructor({x, y}) {
    this.start()
    this.x.prev = 0
    this.y = y
  }

  start() {
    this.el.classList.add('bomb')
    document.getElementById('battle-field').appendChild(this.el)
  }

  update() {
    this.y += this.speed
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
    // console.log('update bomb')
  }

  isRemove() {
    return y > innerHeight
  }
}

class AirCraftBomb {
  y = 0
  speed = 3
  el = document.createElement('div')
  constructor({x, y}) {
    this.x = x
    this.y = y

    this.el.classList.add('bomb')
    document.getElementById('battle-field').appendChild(this.el)
  }

  update() {
    console.log(this.y)
    if (this.y > 600) {
      this.el.remove()
      
      return
    }
    this.y += this.speed
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
  }

  isRemove() {
    return y > innerHeight
  }
}
