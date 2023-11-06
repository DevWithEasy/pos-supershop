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
import Companies from './pages/companies/Companies'
import New_company from './pages/companies/New_company'
import Update_company from './pages/companies/Update_company'
import Customers from './pages/customers/Customers'
import New_customer from './pages/customers/New_customer'
import UpdateCustomer from './pages/customers/UpdateCustomer'
import Generics from './pages/generics/Generics'
import New_generic from './pages/generics/New_generic'
import Update_generic from './pages/generics/Update_generic'
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
      <Layout>
        <Products/>
      </Layout>
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
      path : '/generic/new',
      element : 
      <Protected>
      <LayoutAdmin>
        <New_generic/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/generics',
      element : <Protected>
      <LayoutAdmin>
        <Generics/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/generic/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_generic/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/company/new',
      element : <Protected>
      <LayoutAdmin>
        <New_company/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/companies',
      element : <Protected>
      <LayoutAdmin>
        <Companies/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/company/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_company/>
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
      path : '/admin/user/new',
      element : <Protected>
      <LayoutAdmin>
        <New_user/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/users',
      element : <Protected>
      <LayoutAdmin>
        <Users/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/user/:id',
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
