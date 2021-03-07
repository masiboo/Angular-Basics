import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.css']
})
  export class LoanTypesComponent implements OnInit {

    addLoanTypesForm!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      // this.addLoanTypesForm = new FormGroup({
      //   'loanName' : new FormControl(),
      //   'loanType' : new FormControl(),
      //   'terms' : new FormControl(),
      //   'loanDescription' : new FormControl()

      // });
      this.addLoanTypesForm =   this.fb.group({
          'loanName' : new FormControl('', [Validators.required,
          Validators.maxLength(10), Validators.minLength(4)]),
          'loanType' : new FormControl('', Validators.required),
          'terms' : new FormControl(),
          'loanDescription' : new FormControl()
          // 'loanDescription' : new FormControl('', Validators.compose([
          //   Validators.required,
          //   Validators.minLength(5),
          //   Validators.maxLength(6)
          // ]))

      });
      this.addLoanTypesForm.get('loanName')?.statusChanges.subscribe( data => {
          console.log('status: '+ data);
      })
    }

  addLoanType(){
      //console.log(this.addLoanTypesForm.value);
      console.log(this.addLoanTypesForm.valid);
      console.log(this.addLoanTypesForm.invalid);
      console.log(this.addLoanTypesForm.pending);
      console.log(this.addLoanTypesForm.pristine);
      console.log(this.addLoanTypesForm.dirty);
      console.log(this.addLoanTypesForm.touched);
      console.log(this.addLoanTypesForm.untouched);
  }

  resetForm(){
    this.addLoanTypesForm.reset();
  }

  trackChanges(): void{
    this.addLoanTypesForm.valueChanges.subscribe( data => {
        console.log.apply(data);
      }

    )

    this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe( data => {
        console.log('loanName data: ' + data);
    });


  }

}
