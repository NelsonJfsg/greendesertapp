export class Directory  {

  //RootURL
  static rootURL : string = 'https://proveedores--moonlit-elf-cb67e7.netlify.app/';

  //Auth

  //Employee
  static  addEmployee : string = this.rootURL + 'employee/add';
  static  reviewEmployee : string = this.rootURL + 'employee/review';
  
  //Inventory
  static addInventory : string = this.rootURL + 'inventory/add';
  static reviewInventory : string = this.rootURL + 'invetory/review';

  //Proveedores
  static addProvider : string = this.rootURL + 'proveedores/add'
  static reviewProveedores : string = this.rootURL + 'proveedores/review';

  //Productos
  static addProduct : string = this.rootURL + 'productos/add'
  static reviewProduct : string = this.rootURL + 'productos/review';
  
  //Customer
  static addCustomer : string = this.rootURL + 'customer/add'
  static reviewCustomer : string = this.rootURL + 'customer/review';

  //JobOrder
  static addjoborder : string = this.rootURL + 'joborder/add'
  static reviewJoborder : string = this.rootURL + 'joborder/review';

  //Home


}