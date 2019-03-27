class Start extends Component{

  constructor(){
    super();
    this.route = '/';
    this.templateFile = 'templates/start.html';
    this.selector = 'main';
    this.basket
    this.products = []
  }

  async render() {
  	super.render()
  	this.loadLamps()
  	if (!this.basket) {
  		this.basket = await new Basket()
  		new BasketIcon(this.basket)
  	}
  }

  async loadLamps() {  	
  	let lamps = await http.get('data/lamps.json')
  	if (lamps.data) {
  		for (let lamp of lamps.data) {
  			let lampSettings = lamp
  			lampSettings.basket = this.basket
  			await this.products.push(new Lamp(lampSettings))
  		}
  	}
  }
  
  search() {
  	this.products[0].clear()
    let userInput = $('#search').val()
  	let searchTerms = userInput.split(' ')
  	
  	for (let term of searchTerms) {
  		let patt = new RegExp(term, 'i')
  		for (let lamp of this.products) {
	  		if (patt.exec(lamp.name) != null || patt.exec(lamp.keywords) != null) {
	  			lamp.render()
	  		}
	  	}
  	}
  }
}
