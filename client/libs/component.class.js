class Component{

  clear(){
    $(this.selector).html('');
    return this;
  }

  async render(){
    if(!this.template){ // only load the template once
      this.template = await http.get(this.templateFile);
    }
    let html = eval('`' + this.template.data + '`');
    this.elem = $(html);
    $(this.selector).append(this.elem);
    this.addEventHandlers();
  }

  addEventHandlers(){
    // click
    $(this.elem).find('[data-click]').on('click', (e) => {
      //console.log($(e.target), $(e.target).attr('data-click'));
      e.preventDefault();
      let method = $(e.target).attr('data-click');
      //console.log(this, method, this[method]);
      return this[method](e);
    });
    // change
    $(this.elem).find('[data-change]').on('change', (e) => {
      e.preventDefault();
      let method = $(e.target).attr('data-change');
      return this[method](e, $(e.target));
    });
    // action
    $(this.elem).find('form').on('submit', (e) => {
      e.preventDefault();
      let method = $(e.target).attr('data-submit');
      return this[method](e, $(e.target));
    });
  }

}
