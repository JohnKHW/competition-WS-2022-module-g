class Aircraft {
  angle = {
    prev: 0,
    current: 0,
  }
  y = {
    prev: 0,
    current: 0,
  }
  offset = {
    x: 100,
    y: 100,
  }
  times = {
    lastBomb: 0,
  }
  dom = {
    inner: null,
  }
  fires = []
  speed = 10
  constructor() {
    this.el = dom.aircraft
    this.dom.inner = $('.aircraft-inner')

    window.addEventListener('keydown', e => {
      switch (e.key) {
        case ' ':
          if (Date.now() - this.times.lastBomb > 1000) {
            this.times.lastBomb = Date.now()
            this.fires.push(
              new AirCraftBomb({
                x: this.offset.x + 50,
                y: this.y.prev + this.offset.y + 30,
              }),
            )
          }
          break
        case 'Enter':
          this.times.lastFire = Date.now()
          // this.fires.push(new AirCraftFire())
          break
        case 'ArrowUp':
        case 'ArrowDown':
          const pos = e.key === 'ArrowUp' ? -1 : 1
          this.y.current += pos * this.speed

          if (this.y.current <= 0) {
            this.y.current = 0
          } else if (this.y.current > 300) {
            this.y.current = 300
          }
          break

        case 'ArrowLeft':
        case 'ArrowRight':
          const d = e.key === 'ArrowRight' ? 1 : -1
          this.angle.current += d * 10

          if (this.angle.current < 0) {
            this.angle.current = 0
          } else if (this.angle.current > 30) {
            this.angle.current = 30
          }
          break
        default:
          break
      }
    })
  }

  update() {
    const el = this.el
    this.angle.prev = lerp(this.angle.prev, this.angle.current, 0.02)
    this.y.prev = lerp(this.y.prev, this.y.current, 0.05)

    el.style.transform = `translate3d(0px,${this.y.prev}px,0px)`
    this.dom.inner.style.transform = `rotate(${this.angle.prev}deg)`

    this.fires.forEach(e => e.update())
  }
}
