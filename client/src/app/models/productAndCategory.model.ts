import { ProductCategorModel } from "./product-category.model";
import { ProductModel } from "./product.model";
export interface productAndCategoryModel {
    categories: ProductCategorModel[],
    products: ProductModel[]
}