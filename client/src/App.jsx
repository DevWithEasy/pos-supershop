import { useRoutes } from 'react-router-dom'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import New_purchase from './pages/purchases/New_purchase'
import Purchase from './pages/purchases/Purchase'
import New_report from './pages/reports/New_report'
import Reports from './pages/reports/Reports'
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
import Purchases from './pages/purchases/Purchases'
import Protected from './pages/Protected'
import LayoutAdmin from './pages/LayoutAdmin'
import Categories from './pages/categories/Categories'
import Update_category from './pages/categories/Update_category'
import New_category from './pages/categories/New_category'
import PrintBarCode from './pages/products/PrintBarCode'
import New_Invoice from './pages/invoices/New_Invoice'
import Products_Home from './pages/products/Products_Home'
import Update_invoice from './pages/invoices/Update_invoice'

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
      path : '/products/',
      element : 
      <Protected>
      <Layout>
        <Products_Home/>
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
      path : '/dashboard',
      element : <Protected>
      <Layout>
        <Dashboard/>
      </Layout>
    </Protected>
    },
    {
      path : '/admin/dashboard',
      element : <Protected>
      <LayoutAdmin>
        <Admin/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/invoices',
      element : 
      <Protected>
      <LayoutAdmin>
        <Invoices/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/invoice/:id',
      element : <Protected>
      <LayoutAdmin>
        <Invoice/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/invoice/update/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_invoice/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/product/new',
      element : <Protected>
      <LayoutAdmin>
        <New_product/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/products',
      element : 
      <Protected>
      <LayoutAdmin>
        <Products/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/printbarcode',
      element : 
      <Protected>
      <LayoutAdmin>
        <PrintBarCode/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/product/:id',
      element : 
      <Protected>
      <LayoutAdmin>
        <Update_product/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/category/new',
      element : <Protected>
      <LayoutAdmin>
        <New_category/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/categories',
      element : <Protected>
      <LayoutAdmin>
        <Categories/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/category/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_category/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/customer/new',
      element : <Protected>
      <LayoutAdmin>
        <New_customer/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/customers',
      element : <Protected>
      <LayoutAdmin>
        <Customers/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/customer/:id',
      element : <Protected>
      <LayoutAdmin>
        <UpdateCustomer/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/adminuser/new',
      element : <Protected>
      <LayoutAdmin>
        <New_user/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/admin/users',
      element : <Protected>
      <LayoutAdmin>
        <Users/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/admin/user/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_user/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/purchase/new',
      element : <Protected>
      <LayoutAdmin>
        <New_purchase/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/purchases',
      element : <Protected>
      <LayoutAdmin>
        <Purchases/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/purchase/:id',
      element : <Protected>
      <LayoutAdmin>
        <Purchase/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/purchase/update/:id',
      element : <Protected>
      <LayoutAdmin>
        <Purchase/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/report/new',
      element : <Protected>
      <LayoutAdmin>
        <New_report/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/reports',
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
