export class Directory  {

  //RootURL
  static rootURL : string = 'http://localhost:5173/';

  //Auth

  //Employee
  static  addEmployee : string = this.rootURL + 'employee/add';
  static  reviewEmployee : string = this.rootURL + 'employee/review';
  
  //Inventory
  static addInventory : string = this.rootURL + 'inventory/add';
  static reviewInventory : string = this.rootURL + 'inventory/review';

  //Proveedores
  static addProvider : string = this.rootURL + 'proveedores/add'

  //Productos
  static addProduct : string = this.rootURL + 'productos/add'
  
  //Customer
  static addCustomer : string = this.rootURL + 'customer/add'

  //JobOrder
  static addjoborder : string = this.rootURL + 'customer/add'

  //Home
  

}