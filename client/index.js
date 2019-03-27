// config
const http = axios;

// let the router register our models with routes
const router = new Router([Start, Contact]);

// non-route models:
const nav = new Navigation();

$(start);

async function start(){
  nav.render();
  router.init();
}


