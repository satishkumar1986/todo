import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  yourObj = {id:1, name:'satish'}

  addForm: FormGroup;

  toDoList = JSON.parse(localStorage.getItem('TODO')) || [];

  myDate = new Date();

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.setAddForm();
  }

  setAddForm() {
    this.addForm = this._fb.group({
      id:[0],
      text: ['', Validators.compose([Validators.required])],
      complate: [false],
      trash: [false]
    })
  }

  addFormSubmit() {
    
    if(this.addForm.invalid){
      return false;
    }

    this.toDoList.push(this.addForm.value);
    localStorage.setItem('TODO', JSON.stringify(this.toDoList));
    this.addFormRest();
  }

  addFormRest() {
    //console.log(this.toDoList.length);
    let setIndex = this.toDoList.length;
    this.addForm.get('id').setValue(setIndex);
    this.addForm.get('text').setValue('');
  }

  complate(indexValue) {
    //console.log(this.toDoList[indexValue].complate);
    this.toDoList[indexValue].complate = !this.toDoList[indexValue].complate;
    localStorage.setItem('TODO', JSON.stringify(this.toDoList));
  }

  removeItem(indexValue) {
    //console.log(indexValue);
    this.toDoList.splice(indexValue, 1);
    localStorage.setItem('TODO', JSON.stringify(this.toDoList));
  }

  clearStroage() {
    localStorage.clear();
    this.toDoList = [];
  }

}
