class Basket extends Component{

  constructor(){
    super()
    this.templateFile = 'templates/basket.html'
    this.selector = '.page'
    this.items = []
    this.total = 0
    this.render()
  }

  async render() {
    super.render()
  }

  show() {
    this.elem.show()
  }

  hide() {
    this.elem.hide()
  }  

  calcTotal() {
    let newTotal = 0
    for (let item of this.items) {
      newTotal += (item.quantity * item.cost)
    }
    this.total = newTotal
    this.updateTotal()
  }

  clearAll() {
    this.items = []
    $('.basket-items').html('')
    this.calcTotal()
  }

  updateTotal() {
    $('#total').html(this.total)
  }
  
  order() {
    if (this.items.length != 0) {
      let that = this
      $(this.selector).find('.jumbotron').html('')
      new Order(this)
      setTimeout(function() {
        that.elem.fadeOut()
        that.render()
      },2000, that)
    }
  }
}
