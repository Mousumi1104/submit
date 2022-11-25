import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from'@angular/forms';
import {CrudHttpService} from './crud-http.service';

import{Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userList:any = [];
ID: string = ""; //Proterty for unique json field id
FirstName: string = ""; //Proterty
LastLname: string = ""; //Proterty
Email: string = ""; //Proterty
userPwd: string = ""; //Proterty
userMob: string = "";
Orgnm:string="";
orgAd:string="";
orgDt:string="";

  loginForm=new FormGroup({
    first:new FormControl('',[Validators.required,Validators.maxLength(50) ]),
    last:new FormControl('',[Validators.required,Validators.maxLength(50) ]),
    orga:new FormControl('',[Validators.required,Validators.maxLength(1000) ]),
    orgn:new FormControl('',[Validators.required,Validators.maxLength(1000) ]),
    ph:new FormControl('',[Validators.required,Validators.minLength(10) ]),
    email:new FormControl('',[Validators.required, Validators.email,Validators.maxLength(254)]),
    password:new FormControl('',[Validators.required, Validators.minLength(16)]),
    orgd:new FormControl('',Validators.required)
   
    })
    constructor(private crudHttpService: CrudHttpService , private router:Router) { 
} 
    ngOnInit(): void {
    
    }

    get first(){
      return this.loginForm.get('first')
      }
      get last(){
        return this.loginForm.get('last')
        }
        get ph(){
          return this.loginForm.get('ph')
          }
          get orga(){
            return this.loginForm.get('orga')
            }
            get orgn(){
              return this.loginForm.get('orgn')
              }
      get email(){
      return this.loginForm.get('email')
      
      }
      get password(){
      return this.loginForm.get('password')
      
      }
      get orgd(){
        return this.loginForm.get('orgd')
        
        }
        submit(){
          if(this.loginForm.valid){
          alert("Submitted")
        }
      }
      getuser(data:any)
{ 
let user_data = {fnam:data.first,lnam:data.last,email:data.email,pas:data.password,mob:data.ph,orgNm:data.orgn,orgAd:data.orga,orgDt:data.orgd}
//Json Array will be created as the No. of fields & name of the fields assigns as above
this.crudHttpService.create(user_data).subscribe((response)=>
{
  console.log(user_data)
},(error=>{ })); 

}
 
}