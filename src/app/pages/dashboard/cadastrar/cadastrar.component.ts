import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { FormGroup,  FormBuilder,  Validators, } from '@angular/forms';
import { CadastrarService } from './cadastrar.service'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {

  status = "Status";
  statusName = "";
  statusPrice = "";
  statusVari = "";
  statusDate = "";
  postJson;
  public myForm: FormGroup;

  createForm() {
    this.myForm = this.fb.group ({
      username: ['',
      [Validators.required,
      Validators.minLength(4),
    ]],
      price: ['',
      [Validators.required,
      Validators.pattern("^[0-9]{1,4}(?:\.[0-9]{1,2})?$")
    ]],
      variation: ['',
      [Validators.required,
      Validators.pattern("^[-0-9]{0,1}[0-9]{1,3}(?:\.[0-9]{1,2})?$")
    ]],
      date: ['',
      [Validators.required,
    ]],
  });
  }
  undrawRequired(aux: number) {
    if(aux == 1){
      const element = document.getElementById('inputName')
      element.style.border = "none";
      this.statusName = ""
    }
    if(aux == 2){
      const element = document.getElementById('inputPrice')
      element.style.border = "none";
      this.statusPrice = ""
    }
    if(aux == 3){
      const element = document.getElementById('inputVariation')
      element.style.border = "none";
      this.statusVari = ""
    }
    if(aux == 4){
      const element = document.getElementById('inputDate')
      element.style.border = "none";
      this.statusDate = ""
    }
  }

  drawRequired(aux: number) {
    if(aux == 1){
      const element = document.getElementById('inputName')
      element.style.border = "1px solid red";
      this.statusName = "* Campo obrigatório"
    }
    if(aux == 2){
      const element = document.getElementById('inputPrice')
      element.style.border = "1px solid red";
      this.statusPrice = "* Campo obrigatório"
    }
    if(aux == 3){
      const element = document.getElementById('inputVariation')
      element.style.border = "1px solid red";
      this.statusVari = "* Campo obrigatório"
    }
    if(aux == 4){
      const element = document.getElementById('inputDate')
      element.style.border = "1px solid red";
      this.statusDate = "* Campo obrigatório"
    }
}

drawCondition(aux: number) {
  if(aux == 1){
    const element = document.getElementById('inputName')
    element.style.border = "1px solid red";
    this.statusName = "* Mínimo 4 caracteres"
  }
  if(aux == 2){
    const element = document.getElementById('inputPrice')
    element.style.border = "1px solid red";
    this.statusPrice = "* Máximo de 4 inteiros e 2 decimais (9999,99)"
  }
  if(aux == 3){
    const element = document.getElementById('inputVariation')
    element.style.border = "1px solid red";
    this.statusVari = "* Máximo de 3 inteiros e 2 decimais (999,99)"
  }
}

  submit(nome: string, preco: number, variacao: number, data: string){
    let latest_date =this.datepipe.transform(data, 'dd/MM/yyyy');

    if(this.myForm.controls['username'].valid){
      if(this.myForm.controls['price'].valid){
        if(this.myForm.controls['variation'].valid){
          if(this.myForm.controls['date'].valid){
            console.log(nome);
            console.log(preco);
            console.log(variacao);
            console.log(latest_date);
            this.cadastrarService.postStocks(nome, preco, variacao, latest_date);
            this.myForm.controls['username'].reset();
            this.myForm.controls['price'].reset();
            this.myForm.controls['variation'].reset();
            this.myForm.controls['date'].reset();
            this.status = "Cadastro realizado com sucesso"
          }else{
            this.drawRequired(4);
            this.status = "Argumentos inválidos"
          }
        }else{
          this.drawRequired(3);
          this.status = "Argumentos inválidos"
        }
      }else{
        this.drawRequired(2);
        this.status = "Argumentos inválidos"
      }
    }else{
      this.drawRequired(1);
      this.status = "Argumentos inválidos"
    }

  }

  constructor(public datepipe: DatePipe, private fb: FormBuilder, private cadastrarService: CadastrarService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

}
