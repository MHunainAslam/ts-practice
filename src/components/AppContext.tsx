import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { products } from "../interfaces";

// Define the type for the context value
interface AppContextType {
  cartLength: number;
  setcartLength: React.Dispatch<React.SetStateAction<number>>;
  cart: products[];
  handleAddToCart: (item: products) => void;
  handleUpdateQuantity: (
    item: products,
    action: "increase" | "decrease"
  ) => void;
  checkItemInCart: (name: string) => products | undefined;
  finalTotal: number;
}

// Create the context with an initial empty value of the correct type
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [cartLength, setcartLength] = useState(0);
  const [cart, setCart] = useState<products[]>([]); // Track cart in state

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart); // Initialize state from localStorage
    setcartLength(storedCart?.length);
  }, []);

  // Check if the item is in the cart
  const checkItemInCart = (name: string): products | undefined => {
    return cart.find((item) => item.name === name);
  };

  // Add to cart functionality
  const handleAddToCart = (item: products) => {
    const updatedCart = [...cart]; // Create a new array to avoid direct mutation

    const existingItem = updatedCart.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1; // Update quantity if item already in the cart
    } else {
      item.quantity = 1; // Set initial quantity to 1
      updatedCart.push(item); // Add new item to cart
    }

    setCart(updatedCart); // Update the cart state
    setcartLength(updatedCart?.length);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync cart with localStorage
  };

  // Update the quantity of an item in the cart
  const handleUpdateQuantity = (
    item: products,
    action: "increase" | "decrease"
  ) => {
    const updatedCart = [...cart]; // Create a new array to avoid direct mutation

    const existingItem = updatedCart.find((i) => i.name === item.name);
    if (existingItem) {
      if (action === "increase") {
        existingItem.quantity += 1;
      } else if (action === "decrease" && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
      }

      // If quantity reaches 1 after decrease, show "Add to Cart" button

      if (existingItem.quantity === 0) {
        const index = updatedCart.findIndex((i) => i.name === item.name);
        updatedCart.splice(index, 1); // Remove item from cart
      }
    }

    setCart(updatedCart); // Update the cart state
    setcartLength(updatedCart?.length);

    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync cart with localStorage
  };

  const finalTotal = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  return (
    <AppContext.Provider
      value={{
        cartLength,
        setcartLength,
        handleUpdateQuantity,
        handleAddToCart,
        checkItemInCart,
        cart,
        finalTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
};
