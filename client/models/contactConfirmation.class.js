class ContactConfirmation extends Component{

  constructor(){
    super()
    this.templateFile = 'templates/contactConfirmation.html'
    this.selector = '.page'
    this.email
    this.message
    this.render()
  }

  async render() {
    await super.render()
  }

  show() {
    this.elem.show()
  }
  
  hide() {
    this.elem.hide()
  } 
}
