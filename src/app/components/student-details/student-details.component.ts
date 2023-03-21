import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import StudentList from '../../data/Students.json';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  currentStudent:any;
  studentList:any=StudentList;
  currentStudentNotes:any[]=[];
  moy:number=0;
  constructor(private route:ActivatedRoute){}
  
  calc(){
      let sum=0,cpt=0;

      this.currentStudentNotes.reduce(
        (pre,curr)=>{
          pre=curr
          console.log(pre.note," | ",curr.note);
        },0
      )



      this.currentStudentNotes.map(
        (elm)=>{
          sum+=elm.note;
          cpt++;
        }
      )
      this.moy=sum/cpt;
      
      
  }
  
  ngOnInit(): void {
      this.route.paramMap.subscribe(
        (par:ParamMap)=>{
          let id=Number(par.get("id"));
          //console.log(this.studentList);
          
          this.currentStudent=this.studentList.find(
            (student:any)=>{
              return student.id==id;
          }
          )
          //this.currentStudentNotes=this.currentStudent.notes;
          //console.log(this.currentStudent);
          this.currentStudentNotes=this.currentStudent.notes;
          this.calc()
        }
        
      )
  }
}
