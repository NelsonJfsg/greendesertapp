import { IProduct } from "./product.model";

export interface IInventory{
    id?: number;
    
    quantity: number;
    
    
    spot: string;

    
    product?: number;

    porduct2?: IProduct

    //order: number;
    
}
    