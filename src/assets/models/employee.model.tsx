import { rolModel } from "./role.model";
import { userModel } from "./user.model";

export interface employeeModel{

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