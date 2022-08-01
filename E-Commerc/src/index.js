import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-23-bnk8z.us.auth0.com
// snCYEhAMEMqbeNh5GltB4pbpKlqRvGPr
ReactDOM.render(
  <Auth0Provider
    domain="dev-23-bnk8z.us.auth0.com"
    clientId="snCYEhAMEMqbeNh5GltB4pbpKlqRvGPr"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById('root')
)
