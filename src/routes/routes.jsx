import config from '../config'
import Cart from '../components/cart/Cart'
import Shop from '../pages/shop/Shop'
import About from '../pages/about/About'
import Product from '../pages/product/Product'
import NotFound from '../pages/notFound/NotFound'
import Subscription from '../pages/subscription/Subscription'
import Checkout from '../pages/checkout/Checkout'
import Home from '../pages/Home'
import Login from '../pages/authentication/Login'
import Register from '../pages/authentication/Register'
const publicRoutes = [
	{ path: config.routes.home, component: Home },
	{ path: config.routes.login, component: Login },
	{ path: config.routes.register, component: Register },
	{ path: config.routes.about, component: About },
	{ path: config.routes.cart, component: Cart },
	{ path: config.routes.shop, component: Shop },
	{ path: config.routes.product, component: Product },
	{ path: config.routes.subscription, component: Subscription },
	{ path: config.routes.checkout, component: Checkout },
	{ path: '*', component: NotFound }
]

export { publicRoutes }