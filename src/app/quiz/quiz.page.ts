import { Component, OnInit } from '@angular/core';
import { IAnswer } from '../models/answer';
import { IQuestion } from '../models/question';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  clear() {
    this.selectedAnswer = -1
  }
  back(){
    this.router.navigate(['/home'])
  }
  refreshMultipleSelection(answersLength:number){
    this.selectedMultiple = []
    for (let index = 0; index < answersLength; index++) {
      this.selectedMultiple.push(false)
    }
  }
  calculateAnswer(){
    let answer:IAnswer = {
      selected: [],
      correct:false,
      points: 0
    }
    if(this.currentQuestion.correct_answers.length == 1){
      answer.selected = [this.selectedAnswer]
      if(this.currentQuestion.correct_answers[0] == this.selectedAnswer){
        answer.correct = true
        answer.points = 1
      }
    } else {
      let selected:number[] = []
      console.log(this.selectedMultiple)
      for (let index = 0; index < this.selectedMultiple.length; index++) {
        let sel = this.selectedMultiple[index]
        if(sel == true){
          selected.push(index + 1)
        }
      }
      this.currentQuestion.correct_answers.forEach(element => {
        if(this.selectedMultiple[element] == true){
          answer.points += 1.0/this.currentQuestion.correct_answers.length
        }
      });
      answer.selected = selected
      if(answer.points == 1 && selected.length == this.currentQuestion.correct_answers.length){
        answer.correct = true
      } else {
        answer.points = 0
      }
    }
    this.answers.push(answer)
  }
  nextQuestion(){
    this.calculateAnswer()
    this.clear()
    this.iterator += 1
    if(this.iterator < this.questions.length){
      this.currentQuestion = this.questions[this.iterator]
      this.refreshMultipleSelection(this.currentQuestion.answers.length)
    }
    else{
      if(this.answers.length > this.questions.length){
        this.answers = this.answers.slice(0, this.questions.length)
      }
      this.setOpen(true)
    }
  }
  selectedAnswer:number = -1
  selectedMultiple:boolean[] = []
  iterator:number=0
  constructor (private router:Router) {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit() {
    const test = this.router.getCurrentNavigation()?.extras.state
    console.log(test)
    this.questions = <IQuestion[]>test
    this.currentQuestion = this.questions[this.iterator]
    if(this.currentQuestion){
      this.refreshMultipleSelection(this.currentQuestion.answers.length)
    }
  }
  currentQuestion:IQuestion = {
    body:"",
    answers:[],
    correct_answers:[]
  }
  questions:IQuestion[] = []

  answers:IAnswer[] = []

}
