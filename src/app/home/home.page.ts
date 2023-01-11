import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IQuestion } from '../models/question';
import { IQuiz } from '../models/quiz';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  quizes:IQuiz[] = []

  selectedQuiz:number = 0
  constructor(private router: Router) {}
  ngOnInit(){
    this.quizes = [
      {
        label:"Викторина по праву",
        questions:[
          {
            body:"Противоречие между правовыми нормами, регулирующими одни и те же общественные отношения, называется:",
            answers:["преамбула","коллизия","рецепция"],
            correct_answers:[1]
          },
          {
            body:"Решение конкретного дела на основе правовой нормы, регулирующей похожие, близкие отношения, называется:",
            answers:["аналогия принципа","аналогия пробела","аналогия закона"],
            correct_answers:[2]
          },
          {
            body:"Какой нормативный правовой акт выше по юридической силе?",
            answers:["постановление Правительства РФ","указ Президента РФ","приказ Министерства обороны РФ"],
            correct_answers:[1]
          },
          {
            body:"Конституция РФ принята:",
            answers:["13 декабря 1993 года","12 декабря 1995 года","12 декабря 1993 года"],
            correct_answers:[2]
          },
          {
            body:"Из каких элементов состоит норма права?",
            answers:["гипотеза, диспозиция, функция","гипотеза, преамбула, санкция","гипотеза, диспозиция, санкция"],
            correct_answers:[2]
          },
        ]
      },
      {
        label:"Общая эрудиция",
        questions:[
          {
            body:"В какой стране проходили летние Олимпийские игры 2016 года? ",
            answers:["Китай","Ирландия","Бразилия","Италия "],
            correct_answers:[2]
          },
          {
            body:"Какая планета самая горячая",
            answers:["Венера","Сатурн","Меркурий","Марс"],
            correct_answers:[0]
          },
          {
            body:"Какая самая редкая группа крови?",
            answers:["I группа","II группа","III группа","IV группа"],
            correct_answers:[0]
          },
          {
            body:"Сколько костей в теле человека?",
            answers:["206","205","201","209"],
            correct_answers:[0]
          },
          {
            body:"Fe — это символ какого химического элемента?",
            answers:["Цинк","Водород","Фтор","Железо"],
            correct_answers:[3]
          },
        ]
      }
    ]
  }

  openQuiz(){
    let q:IQuestion[] = this.quizes[this.selectedQuiz].questions
    const navigationExtras: NavigationExtras = {
      state:q
    }
    this.router.navigate(['/quiz'], navigationExtras)
  }

}
