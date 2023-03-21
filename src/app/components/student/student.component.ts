import { Component } from '@angular/core';
import StudentList from '../../data/Students.json';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
    studentList:any=StudentList;
    
}
