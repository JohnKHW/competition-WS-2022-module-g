class Aircraft {
  x = 0
  angle = {
    prev: 0,
    current: 0,
  }
  times = {
    lastBomb: 0,
  }
  speed = 10
  constructor() {
    this.el = dom.aircraft

    window.addEventListener('keydown', e => {
      switch (e.key) {
        case ' ':
          console.log('space')
          this.times.lastBomb = Date.now()
          this.fires.push(new AirCraftBomb())
          break
        case 'ArrowLeft':

        case 'ArrowRight':
          const pos = e.key === 'ArrowRight' ? 1 : -1
          this.x += pos * this.speed
          break
        case 'ArrowUp':
        case 'ArrowDown':
          const d = e.key === 'ArrowUp' ? -1 : 1
          this.angle.current = this.angle.current + d * 10
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
    console.log(this.angle.prev)
    el.style.transform = `rotate(${this.angle.prev}deg)`
    el.style.left = `${this.x}px`
    // this.angle.current =
  }
}
