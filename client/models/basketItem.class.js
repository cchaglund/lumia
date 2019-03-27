class BasketItem extends Component {
	constructor(lamp) {
		super()
		this.templateFile = 'templates/basketItem.html'
		this.selector = '.basket-items'
		this.name = lamp.name
		this.cost = lamp.cost
		this.quantity = 1
		this.basket = lamp.basket
		this.render()
	}

	addToBasket() {
		this.quantity++
		this.displayQuantity()
		this.basket.calcTotal()
	}

	removeOne() {
		if (this.quantity == 1) {
			this.removeAll()
		} else {
			this.quantity--
			this.displayQuantity()
			this.basket.calcTotal()
		}
	}

	removeAll() {
		this.elem.remove()
		let index = this.basket.items.indexOf(this)
		this.basket.items.splice(index, 1)
		this.basket.calcTotal()
	}
	
	displayQuantity() {
		this.elem.find('.quantity').html(this.quantity)
	}
}