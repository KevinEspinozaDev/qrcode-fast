import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataQR:string = '';
  qrCodeDownloadLink : SafeUrl = '';
  width:number = 256;
  /* qrcode-fast.online */

  constructor(
    private formBuilder : FormBuilder
  ){

  }

  form: FormGroup = this.formBuilder.group({
    url: ['', Validators.required]
  })


  ngOnInit(): void {

  }

  generate():void{
    this.dataQR = this.form.controls['url'].value;
  }

  reset():void{
    this.dataQR = '';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

}
