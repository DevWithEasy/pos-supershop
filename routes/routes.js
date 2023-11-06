const authRouter = require("./authRoute")
const categoryRouter = require('./categoryRoute')
const productRouter = require('./productRoute')
const customerRouter = require('./customerRoute')
const invoiceRouter = require('./invoiceRoute')
const purchaseRouter = require('./purchaseRoute')
const reportRouter = require('./reportRoute')

const routes = [
  {
    path: "/api/auth",
    handler : authRouter
  },
  {
    path: "/api/category",
    handler : categoryRouter
  },
  {
    path: "/api/product",
    handler : productRouter
  },
  {
    path: "/api/customer",
    handler : customerRouter
  },
  {
    path: "/api/invoice",
    handler : invoiceRouter
  },
  {
    path: "/api/purchase",
    handler : purchaseRouter
  },
  {
    path: "/api/report",
    handler : reportRouter
  },
  {
    path: "/",
    handler : (req, res) =>{
      res.send("Alhamdulillah.Server is ready !")
    }
  }
]

const applyRoutes = (app)=>{
  routes.map(r=>{
    if(r.path === "/"){
      app.get(r.path,r.handler)
    }else{
      app.use(r.path,r.handler)
    }
  })
}

module.exports = applyRoutes