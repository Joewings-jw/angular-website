import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})



export class ContactComponent implements OnInit {
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // preventing spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button when loading
  responseMessage!: string; // the response message to show to the user

  url:string = "https://script.google.com/macros/s/AKfzcoZZUSsvceokjFC9_aDlPVhCc2KWFF-UQFukgpJ7nvBrEg-ih7rLHz_5RUQ/exec";
  
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }

  on_submit() {
    if (this.form.status === "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.form.controls["name"].value);
      formData.append("email", this.form.controls["email"].value);
      formData.append("message", this.form.controls["message"].value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post(this.url, formData).subscribe(
        (response:any) => {
          // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }

}
