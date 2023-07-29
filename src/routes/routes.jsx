import config from '../config'
import Cart from '../components/cart/Cart'
import Shop from '../pages/shop/Shop'
import Product from '../pages/product/Product'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/Home'
const publicRoutes = [
	{ path: config.routes.home, component: Home },
	// {path: config.routes.about, component: About},
	{ path: config.routes.cart, component: Cart },
	{ path: config.routes.shop, component: Shop },
	{ path: config.routes.product, component: Product },
	// { path: config.routes.subscription, component: Subscription },
	// { path: config.routes.checkout, component: Checkout },
	{ path: '*', component: NotFound }
]

export { publicRoutes }