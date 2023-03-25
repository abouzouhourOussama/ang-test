import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList:any[]=[]
  currenInput:any={
    note:"",date:null
  }

  addTodo(){
    this.todoList.push(
      {
        note:this.currenInput.note,
        date:new Date()
      }
    )
    console.log(this.todoList);
    

    let todoListString=JSON.stringify(this.todoList)
    localStorage.setItem("todoList",todoListString)
    



  }



}
