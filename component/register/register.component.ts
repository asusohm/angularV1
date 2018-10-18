import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MemberControllerService } from 'src/app/service/controller/member.controller/member-controller.service';
import { FormatDate } from 'src/app/service/format/format-date';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  genders:Array<any>;
  countrys:Array<any>;
  usernameRegister:string;
  passwordRegister:string;
  repeatPassword:string;
  nameProfile:string;
  emailProfile:string;
  genderSelect:number;
  countrySelect:string;
  passportNumProfile:number;
  passportExp:string;
  
  constructor(private _formBuilder: FormBuilder,private memberController:MemberControllerService,
    private formatDateTime:FormatDate) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.getGendertoList();
    this.getCountrytoList();
  }
  getGendertoList(){
    this.memberController.getGender().subscribe(data=>{
      this.genders = data;
    })
  }
  getCountrytoList(){
    this.memberController.getCountry().subscribe(data=>{
      this.countrys = data;
    })
  }

  register(){
    if(this.passwordRegister==this.repeatPassword){
      this.memberController.postMember(this.usernameRegister,this.passwordRegister).subscribe(data=>{
        console.log(data);
      },
      error =>{
        console.log(error);
      });
    }
   
  }
  saveUserProfile(){
    this.memberController.postUserProfile(this.nameProfile,this.emailProfile, this.genderSelect, this.countrySelect, this.passportNumProfile,this.usernameRegister).subscribe(data=>{
      console.log(data);
    },
    error =>{
      console.log(error);
    })
  }

}
