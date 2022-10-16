class Aircraft {
  position = {x: 0, y: 0}
  constructor() {
    this.el = dom.aircraft
    
    window.addEventListener('keydown', e => {
      if (e.key === ' ') {
        console.log('space')
      }
    })
  }

  update() {}
}
