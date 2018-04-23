import jsonServer from 'json-server'
import rewrites from './routes.json'
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
import {signUpHandler}  from './handlers';
import {simulateServerError, modifiedRes, requireLogin} from './middlewares'

server.use(jsonServer.rewriter(rewrites))
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/signup', signUpHandler)

// 访问受保护路由
server.get('/private', requireLogin, (req, res, next) => {
  res.json("Here's some private data!")
})

server.use(simulateServerError)
server.use(modifiedRes)
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})