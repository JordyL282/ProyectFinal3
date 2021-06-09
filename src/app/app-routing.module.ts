import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './models/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import {HomeComponent} from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
const routes: Routes = [
{
  path: '',
component: DefaultComponent,  
children: [{
path: '',
component: DashboardComponent
},


{
  path: 'posts',
  component: PostsComponent

},
{
  path: 'home',
  component: HomeComponent,
  },
  {
    path: 'room',
    component: RoomComponent,
  },
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
