
export const addItemToCart = (cartItems, itemToAdd) => {
    const isExist = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
    if (isExist)
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id ? {
            ...cartItem, quantity: cartItem.quantity + 1
        } : cartItem);
    else
        return [...cartItems, { ...itemToAdd, quantity: 1 }];

}
export const removeItemFromCart = (cartItems, itemToRemove) => {

    const existingItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);
    if (existingItem.quantity > 1)
        return cartItems.map(cartItem => cartItem.id === itemToRemove.id ? {
            ...cartItem, quantity: cartItem.quantity - 1
        } : cartItem);
    else
        return clearItemFromCart(cartItems, itemToRemove);
}
export const clearItemFromCart = (cartItems, itemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
}