import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** title = 'NoteTake';
    tasks=[];
    cross = "X";
    newTask: string="";
   
    addTask(){
      this.tasks.push(this.newTask);
      this.newTask = "";
    }
  
    deleteTask(task){
      let index=this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
    */

  title = 'NoteTake';
  tasks = [];
  cross = "X";
  Edit = "Edit";
  Save = "Save changes";
  Cancel = "Cancel edit";
  newTask: string = "";
  newTaskUpper: string = "";
  editTask: string = "";

  /**
   * 
   *  newArrayTask: string="Hello";
  newPriorityLevel: number=9; 
   */

   newArrayTask: string = "";
   newPriorityLevel: string = "";
 
arrayTasks=[{taskName:this.newArrayTask,taskPriority:this.newPriorityLevel}];
  addTask() {
    this.newTaskUpper = this.newTask.toLocaleUpperCase();
    this.tasks.push(this.newTask);
    
    this.newTask = "";
   document.getElementById("input").focus();

  }

  /** deleting from one D arrays */
  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  /** Editing one D array */
  editItem(task) {
    let index = this.tasks.indexOf(task);
    this.tasks[index] = this.editTask;






    if (document.getElementById("hidden")) {
      document.getElementById("hidden").hidden = true;
    }
  }

  /** Adding items after prompt textbox validation */
  showDiv(task) {
    /**
     let currentTask = this.tasks.indexOf(task).valueOf;
     let index=this.tasks.indexOf(task);
     let answer =prompt("Edit task: ", task);
   this.tasks[index]=answer;
     */



    /**
     * Currently viable code
     * Enable this
     * 
     * 
     */
    let index = this.tasks.indexOf(task);
    let currentTask = this.tasks[index];
  let answer =prompt("Edit task: ", task);

   if(answer == null || answer==""){
     this.tasks[index]=currentTask;
     alert("you clicked cancel");
   }
   else{
      this.tasks[index]= answer;
      alert("You clicked okay");
   }
   
    /**  */

    /**
     *  Experimental code
     * 
     * 
     * 
     * 
     * 
     *  let index = this.tasks.indexOf(task);
       let currentTask = this.tasks[index];
     let answer =prompt("Edit task: ", task);
    
      if(answer ==String(false)){
        this.tasks[index]=currentTask;
        alert("you clicked cancel");
      }
      else{
         this.tasks[index]= answer;
         alert("You clicked okay");
      }
     * 
     * 
     * 
     * 
     * 
     * 
     */


  }

  hideDiv() {
    if (document.getElementById("hidden")) {
      document.getElementById("hidden").hidden = true;
    }
  }

  /** For the second list, the parallel arrays */  
 allowEdit(arrayTask){
   let index = this.arrayTasks.indexOf(arrayTask);
   this.arrayTasks.push(arrayTask.taskName[index], arrayTask.taskPriority[index]);
 }  


 /** Viable add code for parallel arrays */
 addParallelTask(arrayTask){
   
  let index = this.arrayTasks.indexOf(arrayTask);
  this.arrayTasks.push({taskName: this.newArrayTask, taskPriority: this.newPriorityLevel});
 }
    
}
