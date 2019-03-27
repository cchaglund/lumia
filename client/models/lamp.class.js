class Lamp extends Component{

  constructor(lampSettings){
    super()
    this.templateFile = 'templates/lamp.html'
    this.selector = '.lamps'
    this.name = lampSettings.name
    this.id = lampSettings.id
    this.description = lampSettings.description
    this.cost = lampSettings.cost
    this.image = lampSettings.image
    this.keywords = lampSettings.keywords
    this.basket = lampSettings.basket
    this.render()
  }
  
  add() {
    let pushAfterLoop = false
    if (this.basket.items.length != 0) {
      let found = 0
      for (let item of this.basket.items) {
        if (item.name == this.name) {
          item.addToBasket()
          pushAfterLoop = false
          break
        } else {
          pushAfterLoop = true
        }
      } 
    } else {
      pushAfterLoop = true
    }
    if (pushAfterLoop) {
      this.basket.items.push(new BasketItem(this))
      this.basket.calcTotal()
    }
    this.basket.show()
  }
}
