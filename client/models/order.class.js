class Order extends Component{

  constructor(basket){
    super()
    this.templateFile = 'templates/order.html'
    this.selector = '.jumbotron'
    this.basket = basket
    this.list
    this.render()
  }
  
  render() {
    this.clear()
    let list = ""
    for (let product of this.basket.items) {
      list = list + `<li>${product.name} - ${product.quantity}x</li>`
    }
    this.list = `<ul>${list}</ul>`
    this.basket.clearAll()
    super.render()
  }
}
