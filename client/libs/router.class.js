class Router {

  constructor(models){
    this.models = models;
    this.routes = this.routes || {};
    for(let i=0; i<this.models.length;i++){
      this.models[i] = new this.models[i]();
      this.routes[this.models[i].route] = this.models[i];
    }
    this.listenToATagClicks();
    this.listenToBackForward();
    this.setPath(location.pathname);
  }

  init(){
    this.routes[this.path].clear().render();
    setTimeout(()=>{
      this.setActiveLink();
    },100);
  }

  listenToATagClicks(){
    let that = this;
    $(document).on('click', 'a', function(e){
      // assume all links starting with '/' are internal
      let link = $(this).attr('href');
      console.log("link", link)
      if(link.indexOf('/') === 0){
        e.preventDefault(); // no hard reload of page
        history.pushState(null, null, link); // change url (no reload)
        that.setPath(link);
        that.routes[link].clear().render();
      }
    });
  }

  listenToBackForward(){
    window.addEventListener("popstate", () => {
      this.setPath(location.pathname);
      this.routes[location.pathname].clear().render();
    });
  }

  setPath(path){
    console.log(this)
    this.path = this.routes[path] ? path : '404';
    setTimeout(() => this.setActiveLink(), 0);
  }

  setActiveLink(){
    $('a').removeClass('active');
    $(`a[href="${this.path}"]`).addClass('active');
  }

}

