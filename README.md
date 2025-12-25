# Nxt Trendz - Cart Features

**Nxt Trendz** is a React-based e-commerce application designed to simulate a shopping experience. This specific iteration focuses on implementing robust **Cart Functionality** using **React Context API** for global state management.

## 🚀 Live Demo
🔗 **[Launch HRMS Frontend](https://akileshecomapp.ccbp.tech/login)**

### 🔐 Demo Credentials
* **Email:** `henry`
* **Password:** `henry_the_developer`
* order something for you!

---

## 🚀 Features

* **Authentication Flow**: Includes a Login page and Protected Routes to ensure only authenticated users can access the main application.
* **Product Browsing**:
  * Home Page
  * Products List
  * Individual Product Details
* **Advanced Cart Management**:
  * **Global State**: Cart data is accessible throughout the app via React Context.
  * **Add to Cart**: Adds products to the cart or increments the count if the item already exists.
  * **Quantity Controls**: Users can increment or decrement the quantity of specific items directly from the cart.
  * **Auto-Remove**: Decreasing an item's quantity to zero automatically removes it from the cart.
  * **Remove Item**: Delete specific items from the cart.
  * **Clear Cart**: Functionality to remove all items at once.
* **Routing**: Client-side routing using `react-router-dom`.

## 🛠 Tech Stack

* **Frontend**: React.js (v17)
* **Routing**: React Router DOM (v5.2)
* **State Management**: React Context API
* **Styling**: CSS
* **Icons**: React Icons
* **Authentication Utilities**: JS Cookie
* **Testing**: Jest, React Testing Library

## 📂 Project Structure

The core logic for the cart lies within the `App.js` and `CartContext.js` files:

* **`src/context/CartContext.js`**: Initializes the Context object with default values and empty placeholder functions for cart operations.
* **`src/App.js`**:
  * Acts as the central store for the application state (`cartList`).
  * Defines the logic for all cart manipulation methods (`addCartItem`, `incrementCartItemQuantity`, etc.).
  * Wraps the application in the `CartContext.Provider` to make state and methods available to all nested components.
  * Manages routing using `Switch`, `Route`, and `ProtectedRoute`.

## 🧭 Application Routes

| Path | Component | Description | Protected |
| :--- | :--- | :--- | :--- |
| `/login` | `LoginForm` | User login page | No |
| `/` | `Home` | Landing page | **Yes** |
| `/products` | `Products` | List of available products | **Yes** |
| `/products/:id` | `ProductItemDetails` | Detailed view of a specific product | **Yes** |
| `/cart` | `Cart` | Displays added items and totals | **Yes** |
| `/not-found` | `NotFound` | 404 Error page | No |

## ⚙️ Cart Context Methods

The `App.js` file exposes the following methods via the Context Provider:

1. **`addCartItem(product)`**:
   * Checks if the product already exists in `cartList`.
   * If it exists, it increases the quantity by 1.
   * If it does not exist, it adds the new product to the list.
2. **`removeCartItem(id)`**:
   * Filters the `cartList` to remove the item matching the provided `id`.
3. **`incrementCartItemQuantity(id)`**:
   * Iterates through the list and increases the `quantity` count for the matching item `id`.
4. **`decrementCartItemQuantity(id)`**:
   * Decreases the quantity of the matching item.
   * **Logic**: If the quantity reaches 0, the item is filtered out (removed) from the list.
5. **`removeAllCartItems()`**:
   * Resets the `cartList` state to an empty array `[]`.

## 📦 Installation & Setup

1. **Clone the repository** (or download source files).

2. **Install dependencies**:
   ```bash
   npm install
