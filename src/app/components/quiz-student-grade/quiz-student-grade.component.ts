import { QuizzesService } from './../../_services/quizzes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveVersion, Quiz } from 'src/app/models/quiz';
import { QuizVersion } from 'src/app/models/quiz';
import { UserGrade } from 'src/app/models/quiz';
import { ApiService } from 'src/service/api.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-quiz-student-grade',
  templateUrl: './quiz-student-grade.component.html',
  styleUrls: ['./quiz-student-grade.component.scss'],
})
export class QuizStudentGradeComponent implements OnInit {
  @Input() quizId: string = '';
  email: string = '';
  courseId: string = '';
  passingGrade: number = 0;
  courseInfo: Course = {};
  userGrade: UserGrade[] = [];
  quizInfo: ActiveVersion = {};

  constructor(
    private QuizService: QuizzesService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('email');
      if (id) {
        this.email = id;
      }
      let courseId = params.get('courseId');
      if (courseId) {
        this.courseId = courseId
      }
    });
    this.getBasicQuizInfo();
    this.getQuizGrade();
    this.getQuizPassingGrade();
    console.log(this.userGrade)
  }

  viewGradedQuiz(submissionId: string) {
    this.router.navigate(['/viewQuiz/:submissionId'])
  }

  getBasicQuizInfo() {
    this.QuizService.getQuizInfo(this.quizId).subscribe((activeVersion) => {
      this.quizInfo = activeVersion;
    });
  }

  getQuizPassingGrade() {
    this.api.getCourse(this.courseId).subscribe((info) => {
      this.courseInfo = info;
      if (typeof this.courseInfo.settings?.enforcementPercent != 'undefined') {
        this.passingGrade = this.courseInfo.settings?.enforcementPercent*.01
        console.log(this.passingGrade)
      }
    })
    
  }

  getQuizGrade(): void {
    this.QuizService.getAllUserGrades(this.quizId).subscribe((info) => {
      this.userGrade = info;
    });
  }

  getGradePercentage(stringDecGrade: Number | undefined) {
    var percentGrade: Number = Number(stringDecGrade) * 100;
    var stringPercentGrade: String = percentGrade.toFixed(2);
    return stringPercentGrade;
  }

  getLetterGrade(stringDecGrade: Number | undefined) {
    var percentGrade: Number = Number(stringDecGrade) * 100;
    var letterGrade: String;
    if (percentGrade >= 97 && percentGrade <= 100) {
      return (letterGrade = 'A+');
    } else if (percentGrade >= 93 && percentGrade <= 96.99) {
      return (letterGrade = 'A');
    } else if (percentGrade >= 90 && percentGrade <= 92.99) {
      return (letterGrade = 'A-');
    } else if (percentGrade >= 87 && percentGrade <= 89.99) {
      return (letterGrade = 'B+');
    } else if (percentGrade >= 83 && percentGrade <= 86.99) {
      return (letterGrade = 'B');
    } else if (percentGrade >= 80 && percentGrade <= 82.99) {
      return (letterGrade = 'B-');
    } else if (percentGrade >= 77 && percentGrade <= 79.99) {
      return (letterGrade = 'C+');
    } else if (percentGrade >= 73 && percentGrade <= 76.99) {
      return (letterGrade = 'C');
    } else if (percentGrade >= 70 && percentGrade <= 72.99) {
      return (letterGrade = 'C-');
    } else if (percentGrade >= 67 && percentGrade <= 69.99) {
      return (letterGrade = 'D+');
    } else if (percentGrade >= 63 && percentGrade <= 66.99) {
      return (letterGrade = 'D');
    } else if (percentGrade >= 60 && percentGrade <= 62.99) {
      return (letterGrade = 'D-');
    } else {
      return (letterGrade = 'F');
    }
  }
}
