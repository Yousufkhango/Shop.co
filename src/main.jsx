import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Login, Signup, Dashboard, CategoryPage, ItemPage, NewArrivals, Cart, Profile, OrderPage } from './pages'
import { AuthLayout, SellerAuthLayout } from './components/index.js'
import { ContactUs, FAQPage, ShippingDeliveryPage, ReturnsExchangesPage, PrivacyPolicyPage, TermsConditionsPage, CookiePolicyPage, PaymentMethodsPage, PhysicalAddressPage, StoreHoursPage, PhoneNumberPage } from './components/footer/FooterPages/index.js'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: (
          <AuthLayout authentication={true}>
            <Profile />
          </AuthLayout>
        ),
      },
      {
        path: "/category/:slug",
        element: <CategoryPage />,
      },
      {
        path: "/shop",
        element: <NewArrivals />,
      },
      {
        path: "/item/:slug",
        element: <ItemPage />,
      },
      {
        path: "/cart",
        element: (
          <Cart />
        ),
      },
      {
        path: "/contact-us",
        element: (
          <ContactUs />
        ),
      },
      {
        path: "/help",
        element: (
          <FAQPage />
        ),
      },
      {
        path: "/shiping-delivery",
        element: (
          <ShippingDeliveryPage />
        ),
      },
      {
        path: "/return",
        element: (
          <ReturnsExchangesPage />
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <PrivacyPolicyPage />
        ),
      },
      {
        path: "/terms-condition",
        element: (
          <TermsConditionsPage />
        ),
      },
      {
        path: "/cookie-policy",
        element: (
          <CookiePolicyPage />
        ),
      },
      {
        path: "/payment-methods",
        element: (
          <PaymentMethodsPage />
        ),
      },
      {
        path: "/physical-address",
        element: (
          <PhysicalAddressPage />
        ),
      },
      {
        path: "/store-hours",
        element: (
          <StoreHoursPage />
        ),
      },
      {
        path: "/phone-number",
        element: (
          <PhoneNumberPage />
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <SellerAuthLayout authentication={true}>
            <Dashboard enable="orders" />
          </SellerAuthLayout>
        ),
      },
      {
        path: "/dashboard/order/:slug",
        element: <OrderPage />,
      },
      {
        path: "/dashboard/add-item",
        element: (
          <SellerAuthLayout authentication={true}>
            <Dashboard enable="add-item" />
          </SellerAuthLayout>
        ),
      },
      {
        path: "/dashboard/add-category",
        element: (
          <SellerAuthLayout authentication={true}>
            <Dashboard enable="add-category" />
          </SellerAuthLayout>
        ),
      },



      // {
      //   path: "*",
      //   element: <PageNotFound />
      // },
      // {
      //   path: "/*",
      //   element: <PageNotFound />
      // },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
