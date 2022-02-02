import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Component Imports
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { DragAreaComponent } from './drag-area/drag-area.component';
import { SidebarIconComponent } from './sidebar-icon/sidebar-icon.component';
import { CourseInfoHomeComponent } from './course-info-home/course-info-home.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ModuleDisplayComponent } from './module-display/module-display.component';
import { DragDropAreaComponent } from './drag-drop-area/drag-drop-area.component';
import { CourseSidebarComponent } from './course-sidebar/course-sidebar.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { EditCurriculumComponent } from './edit-curriculum/edit-curriculum.component';
import { DisplayContentsComponent } from './display-contents/display-contents.component';
import { DisplayModulesComponent } from './display-modules/display-modules.component';
import { DisplaySectionsComponent } from './display-sections/display-sections.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseAddFormComponent } from './course-add-form/course-add-form.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { DialogCreateCourseComponent } from './dialog-create-course/dialog-create-course.component';
import { CourseEditFormComponent } from './course-edit-form/course-edit-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { SectionFormAddComponent } from './section-form-add/section-form-add.component';
import { ModuleFormAddComponent } from './module-form-add/module-form-add.component';
import { EditDisplaySectionsComponent } from './edit-display-sections/edit-display-sections.component';
import { EditDisplayModulesComponent } from './edit-display-modules/edit-display-modules.component';
import { EditDisplayContentsComponent } from './edit-display-contents/edit-display-contents.component';
import { SectionFormDeleteComponent } from './section-form-delete/section-form-delete.component';
import { ContentFormAddVideoComponent } from './content-form-add-video/content-form-add-video.component';
import { QuizBuilderComponent } from './quiz-builder/quiz-builder.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ // Declare all components in the app/component folder (Don't forget to export)
    DragAreaComponent,
    CourseDashboardComponent,
    SidebarIconComponent,
    CourseInfoHomeComponent,
    ContentHeaderComponent,
    ModuleDisplayComponent,
    DragDropAreaComponent,
    CourseSidebarComponent,
    VideoUploadComponent,
    VideoViewerComponent,
    EditCurriculumComponent,
    DisplayContentsComponent,
    DisplayModulesComponent,
    DisplaySectionsComponent,
    CourseCardComponent,
    CourseAddFormComponent,
    DialogFormComponent,
    DialogCreateCourseComponent,
    CourseEditFormComponent,
    DialogComponent,
    SectionFormAddComponent,
    ModuleFormAddComponent,
    EditDisplaySectionsComponent,
    EditDisplayModulesComponent,
    EditDisplayContentsComponent,
    SectionFormDeleteComponent,
    ContentFormAddVideoComponent,
    QuizBuilderComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    DragDropModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],  
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [ // Export all components in the app/component folder
    DragAreaComponent,
    CourseDashboardComponent,
    SidebarIconComponent,
    CourseInfoHomeComponent,
    ContentHeaderComponent,
    ModuleDisplayComponent,
    DragDropAreaComponent,
    CourseSidebarComponent,
    VideoUploadComponent,
    VideoViewerComponent,
    EditCurriculumComponent,
    DisplayContentsComponent,
    DisplayModulesComponent,
    DisplaySectionsComponent,
    CourseCardComponent,
    CourseAddFormComponent,
    DialogFormComponent,
    DialogCreateCourseComponent,
    CourseEditFormComponent,
    DialogComponent,
    SectionFormAddComponent,
    ModuleFormAddComponent,
    EditDisplaySectionsComponent,
    EditDisplayModulesComponent,
    EditDisplayContentsComponent,
    SectionFormDeleteComponent,
    ContentFormAddVideoComponent,
    QuizBuilderComponent,
  ],  
})
export class ComponentsModule { }