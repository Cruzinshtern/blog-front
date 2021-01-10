import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './view/homepage/homepage.component';
import { PostFormComponent } from './view/post-form/post-form.component';
import { PostListComponent } from './view/post-list/post-list.component';
import { UserListComponent } from './view/user-list/user-list.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'createpost', component: PostFormComponent},
  {path: 'postlist', component: PostListComponent},
  {path: 'users', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
