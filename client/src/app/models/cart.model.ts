export interface CartItem { 
    product_id: number;
    amount: number;
    price: number;
    cart_id: number;
   
}
export interface CartItemResponse extends CartItem{
    item_id: number;
    product_name: string;
    product_category: number
    image?: string;
}


export interface CartModel{
    cart_id: number;
    user_id?: string;
    create_date: Date;
    cartItems: CartItemResponse[];
}