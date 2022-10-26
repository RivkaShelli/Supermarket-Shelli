import { ProductCategorModel } from "./product-category.model";
export interface ProductModel {
    product_id: number;
    price: number;
    image: string;
    product_name: string;
    product_category: ProductCategorModel;
    amount?:number
}
export interface ProductCount{
    NumberOfProducts:number
}
