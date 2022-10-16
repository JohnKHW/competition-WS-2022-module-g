const dom = {
  app: $('.app'),
  aircraft: $('.aircraft'),
  floor: $('.floor'),
}

const keyPressed = {}

const aircraft = new Aircraft()

const game = new Game()
window.addEventListener('keydown', e => {
  keyPressed[e.key] = true
})

window.addEventListener('keyup', e => {
  keyPressed[e.key] = false
})
