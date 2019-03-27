class Contact extends Component{

  constructor(){
    super();
    this.route = '/contact';
    this.templateFile = 'templates/contact.html';
    this.selector = 'main';
    this.confirmation
    this.initModal()
  }

  async submitMessage(e) {

    let fields = e.target.elements 
    this.confirmation.email = fields[0].value
    this.confirmation.render()
    this.confirmation.show()
    let inputs = $(this.elem).find('[value]')
    $(inputs).attr('value', '')
    this.clear()
    this.render()
  }
  
  initModal() {
    this.confirmation = new ContactConfirmation()
  }
}
