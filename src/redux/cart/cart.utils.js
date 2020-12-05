
export const addItemToCart = (cartItems, itemToAdd) => {
    const isExist = cartItems.find(cartItem => cartItem.id === itemToAdd);
    if (isExist)
        return cartItems.map(cartItem => cartItem.id === itemToAdd ? {
            ...cartItem, quantity: cartItem.quantity + 1
        } : cartItem);
    else
        return [...cartItems, { ...itemToAdd, quantity: 1 }];

}