import { employeeModel } from "./employee.model";
import { IInventory } from "./inventory.model";

export interface Ijobordermodel{
    quantity: number;
    customer: number;
    employee: employeeModel;
    status: boolean;
    inventory: IInventory[];
    inventory2?: IInventory;
    product?: number;
}