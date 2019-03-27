class BasketIcon extends Component{

  constructor(basket){
    super()
    this.templateFile = 'templates/basketIcon.html'
    this.selector = '#basketIcon'
    this.basket = basket
    this.render()
  }
  
  openBasket() {
    this.basket.show()
  }
}
