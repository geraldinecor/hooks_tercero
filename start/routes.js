'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.delete("clients/:id",function({request,params}){
	console.log("eliminado")
	console.log("id:",params.id)
	console.log(request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.post("clients",function({request,params}){
	console.log("agregando")

	console.log("data:",request.all())
})
Route.put("clients/:id",function({request,params}){
	console.log("actualizando")
	console.log("id:",params.id)
	console.log("data:",request.all())
})
//********************************************* */

Route.delete("projects/:id",function({request,params}){
	console.log("eliminado proyecto")
	console.log("id:",params.id)
	console.log(request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.post("projects",function({request,params}){
	console.log("agregando proyecro")
	console.log("header",request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.put("projects/:id",function({request,params}){
	console.log("actualizando proyecto")
	console.log("id:",params.id)
	console.log("data:",request.all())
})
//******************************************************* */
Route.delete("brands/:id",function({request,params}){
	console.log("eliminado brand")
	console.log("id:::",params.id)
	console.log(request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.post("brands",function({request,params}){
	console.log("agregando brand")
	console.log("header",request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.put("brands/:id",function({request,params}){
	console.log("actualizando proyecto")
	console.log("id:::",params.id)
	console.log("data:",request.all())
})

//********************************************************** */
Route.delete("products/:id",function({request,params}){
	console.log("eliminado product")
	console.log("id:::",params.id)
	console.log(request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.post("products",function({request,params}){
	console.log("agregando producto")
	console.log("header",request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.put("products/:id",function({request,params}){
	console.log("actualizando productos")
	console.log("id:::",params.id)
	console.log("data:",request.all())
})

/************************************************************** */
Route.delete("users/:id",function({request,params}){
	console.log("eliminado usuario")
	console.log("id:::",params.id)
	console.log(request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.post("users",function({request,params}){
	console.log("agregando usuario")
	console.log("header",request.headers('Authorization'))
	console.log("data:",request.all())
})
Route.put("users/:id",function({request,params}){
	console.log("actualizando usuarios")
	console.log("id:::",params.id)
	console.log("data:",request.all())
})

Route.get('/', () => {
  return { greeting: 'Hooks' }
})
