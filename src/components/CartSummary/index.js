import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      const itemsCount = cartList.length

      cartList.forEach(product => {
        total += product.price * product.quantity
      })

      return (
        <div className="order-summary-container">
          <h1 className="order-summary-heading">
            Order Total:{' '}
            <span className="order-summary-amount">Rs. {total}/-</span>
          </h1>
          <p className="order-summary-items">
            {itemsCount} {itemsCount === 1 ? 'item in cart' : 'items in cart'}
          </p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
