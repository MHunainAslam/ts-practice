import { useEffect, useState } from "react";
import { products } from "../interfaces";
import { useAppContext } from "./AppContext";

export const useCart = () => {
  const [cart, setCart] = useState<products[]>([]); // Track cart in state
  const { cartLength, setcartLength } = useAppContext();

  // Sync cart with localStorage when it changes
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

  return {
    handleUpdateQuantity,
    handleAddToCart,
    checkItemInCart,
    cart,
  };
};
