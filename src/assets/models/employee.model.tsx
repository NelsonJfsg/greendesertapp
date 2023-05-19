import { rolModel } from "./role.model";
import { userModel } from "./user.model";

export interface employeeModel{
      id?:number
      name:string,
      fristSurname:string,
      secondSurname:string,
      birthday:string,
      email:string,
      phonenumber:string,
      status?:boolean,
      password:string,
      user: userModel,
}