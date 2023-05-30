import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators  } from '@angular/forms';
import { Enumerations } from 'src/app/enums/enumerations';
import { QrService } from 'src/app/services/qr.service';

@Component({
  selector: 'app-var-symbol',
  templateUrl: './var-symbol.component.html',
  styleUrls: ['./var-symbol.component.scss']
})
export class VarSymbolComponent implements OnInit {

generatedvariable: number = 0;
showSuccessfulMessage: boolean = false;

  qrForm: UntypedFormGroup = this.fb.group({
    height_of_payment: this.fb.control(null, [Validators.required]),
    club: this.fb.control(null, [Validators.required]),
    payment: this.fb.control(null, [Validators.required])
  });


clubs = Enumerations.clubs;
payment = Enumerations.payment;



constructor(private fb: UntypedFormBuilder, private qrService: QrService){}

  ngOnInit(): void {}

  generatePaymentQR():void
  {
     //generatedVariable = this.qrForm.value

    this.qrService.GetVariabileSymbol(this.qrForm.value).subscribe(data =>{ 
      
      this.showSuccessfulMessage = true},
      error =>{

      });
      

    //let vyskaPlatby = this.qrForm.height_of_payment.value;

  }

}


