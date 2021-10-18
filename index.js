const app = require('./app/lib/infrastructure/webserver/server')

try {
  app.listen(8080,()=>{
  console.log('Server subiu na porta: ',8080);
  })
} catch (err) {
  console.log(err);
}