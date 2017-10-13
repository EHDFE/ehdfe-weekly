import App from './app';
import render from './app/render';
render(App); 

if(module.hot){
    module.hot.accept('./app', function() {
    const NextApp= require('./app').default;
    render(NextApp);
  })
}