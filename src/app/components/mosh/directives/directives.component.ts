import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  courses;

  viewMode = 'map';

  constructor() { }

  ngOnInit(): void {
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'Redux' },
      { id: 2, name: 'React' },
      { id: 3, name: 'Next' }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
