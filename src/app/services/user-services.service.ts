import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})


export class UserServicesService {

  baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient

  ) { }

  addNewUser(userInfo){

    let formData = new FormData();
    formData.append('file', userInfo.profileImage);
    formData.append('firstName', userInfo.firstName);
    formData.append('lastName', userInfo.lastName);
    formData.append('email', userInfo.email)
    formData.append('phoneNumber', userInfo.phoneNumber)
    return this.http.post(this.baseUrl,formData);
  }

  getAllUsers(){
    return this.http.get(this.baseUrl,{});
  }

  removeUser(userId){
    return this.http.delete(this.baseUrl + '/'+ userId,{});
  }

  updateUserDetails(userId, userInfo){
    console.log("serive: ", userId);
    console.log("updated log: ", userInfo);
    
    
    return this.http.put(this.baseUrl  + '/'+ userId,userInfo)
  }
}
