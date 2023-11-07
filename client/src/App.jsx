import { useRoutes } from 'react-router-dom'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Order from './pages/Order'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import New_purchase from './pages/admin/purchases/New_purchase'
import Purchase from './pages/admin/purchases/Purchase'
import New_report from './pages/admin/reports/New_report'
import Reports from './pages/admin/reports/Reports'
import Customers from './pages/customers/Customers'
import New_customer from './pages/customers/New_customer'
import UpdateCustomer from './pages/customers/UpdateCustomer'
import Invoice from './pages/invoices/Invoice'
import Invoices from './pages/invoices/Invoices'
import New_product from './pages/products/New_product'
import Products from './pages/products/Products'
import Update_product from './pages/products/Update_product'
import New_user from './pages/users/New_user'
import Update_user from './pages/users/Update_user'
import Users from './pages/users/Users'
import Purchases from './pages/admin/purchases/Purchases'
import Protected from './pages/Protected'
import LayoutAdmin from './pages/LayoutAdmin'
import Categories from './pages/categories/Categories'
import Update_category from './pages/categories/Update_category'
import New_category from './pages/categories/New_category'
import PrintBarCode from './pages/products/PrintBarCode'
import New_Invoice from './pages/New_Invoice'

function App() {
  const routes= useRoutes([
    {
      path : '/',
      element : <Protected>
        <Layout>
          <Home/>
        </Layout>
      </Protected>
    },
    {
      path : '/dashboard',
      element : <Protected>
      <Layout>
        <Dashboard/>
      </Layout>
    </Protected>
    },
    {
      path : '/order',
      element : <Protected>
      <Layout>
        <Order/>
      </Layout>
    </Protected>
    },
    {
      path : '/invoice/new',
      element : 
      <Protected>
      <Layout>
        <New_Invoice/>
      </Layout>
    </Protected>
    },
    {
      path : '/invoices',
      element : 
      <Protected>
      <Layout>
        <Invoices/>
      </Layout>
    </Protected>
    },
    {
      path : '/invoice/:id',
      element : <Protected>
      <Layout>
        <Invoice/>
      </Layout>
    </Protected>
    },
    {
      path : '/product/new',
      element : <Protected>
      <LayoutAdmin>
        <New_product/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/products',
      element : 
      <Protected>
      <LayoutAdmin>
        <Products/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/printbarcode',
      element : 
      <Protected>
      <LayoutAdmin>
        <PrintBarCode/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/product/:id',
      element : 
      <Protected>
      <LayoutAdmin>
        <Update_product/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/category/new',
      element : <Protected>
      <LayoutAdmin>
        <New_category/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/categories',
      element : <Protected>
      <LayoutAdmin>
        <Categories/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/category/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_category/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/customer/new',
      element : <Protected>
      <LayoutAdmin>
        <New_customer/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/customers',
      element : <Protected>
      <LayoutAdmin>
        <Customers/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/customer/:id',
      element : <Protected>
      <LayoutAdmin>
        <UpdateCustomer/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin',
      element : <Protected>
      <LayoutAdmin>
        <Admin/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : 'user/new',
      element : <Protected>
      <LayoutAdmin>
        <New_user/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/users',
      element : <Protected>
      <LayoutAdmin>
        <Users/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/user/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_user/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/purchase/new',
      element : <Protected>
      <LayoutAdmin>
        <New_purchase/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/purchases',
      element : <Protected>
      <LayoutAdmin>
        <Purchases/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : 'purchase/:id',
      element : <Protected>
      <LayoutAdmin>
        <Purchase/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/report/new',
      element : <Protected>
      <LayoutAdmin>
        <New_report/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/reports',
      element : <Protected>
      <LayoutAdmin>
        <Reports/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/signup',
      element : <Signup/>
    },
    {
      path : '/signin',
      element : <Signin/>
    }
  ])

  return routes
}

export default App
