import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  dataQR:string = '';
  qrCodeDownloadLink : SafeUrl = '';
  width:number = 256;

  private window: { [key: string]: any[] } = {};

  /* qrcode-fast.online */
  form: FormGroup = this.formBuilder.group({
    url: [
      '', [Validators.required, Validators.minLength(8)]
    ]
  });

  constructor(
    private formBuilder : FormBuilder
  ){

  }



  ngAfterViewInit(): void {
    window
    setTimeout(() => {
      try {
        //(window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      } catch (e) {
        console.error('error');
      }
    }, 2000);

  }

  generate():void{
    this.dataQR = this.form.controls['url'].value;

  }

  reset():void{
    this.dataQR = '';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
    this.dataQR = this.form.controls['url'].value;
  }

}
