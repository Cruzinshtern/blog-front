import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostModalComponent } from './post-modal/post-modal.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';






@NgModule({
    declarations: [HomepageComponent, PostFormComponent, PostListComponent, PostListItemComponent, PostModalComponent, UserListComponent, UserItemComponent],
    exports: [
        HomepageComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ViewModule { }
