import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorComponent } from 'src/app/dialogs/error/error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string = "";

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  login()
  {
    if(this.email === "demo" && this.password === "demo")
    {
      this.router.navigate(['customer-list']);
    }
    else
    {
      console.log("Dialog !");

      this.dialog.open(ErrorComponent, {
        data: { message: "Your login infomation are incorrect !" }
      })
    }

  }

}
