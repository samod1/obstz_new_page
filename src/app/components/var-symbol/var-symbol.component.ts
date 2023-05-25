import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators  } from '@angular/forms';
import { Enumerations } from 'src/app/enums/enumerations';

@Component({
  selector: 'app-var-symbol',
  templateUrl: './var-symbol.component.html',
  styleUrls: ['./var-symbol.component.scss']
})
export class VarSymbolComponent implements OnInit {

generatedvariable: number = 0;

  qrForm: UntypedFormGroup = this.fb.group({
    height_of_payment: this.fb.control(null, [Validators.required]),
    club: this.fb.control(null, [Validators.required]),
    payment: this.fb.control(null, [Validators.required])
  });


clubs = Enumerations.clubs;
payment = Enumerations.payment;



constructor(private fb: UntypedFormBuilder){}

  ngOnInit(): void {}

  generatePaymentQR():void
  {
     //generatedVariable = this.qrForm.value

    console.log(this.qrForm.value)

    //let vyskaPlatby = this.qrForm.height_of_payment.value;

  }

}


