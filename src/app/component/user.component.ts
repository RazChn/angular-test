import { Component } from '@angular/core';
import {PostsService} from '../services/posts.services';


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
   name: string;
   email: string ;
   address: address ;
   hobbies: string[];
   show_hobbies: boolean;
   posts: Post[];

constructor(private postsService: PostsService){
  this.name = 'RazCo';
  this.email = 'iloveyou@chubby.com';
  this.address = {
  street: 'street is best',
  city: 'rishon'
  }
  this.hobbies = ['music','movies'];
  this.show_hobbies = false;
  this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
  });
 }

toggle_hobbies(){
  if(this.show_hobbies == true)
      this.show_hobbies = false;
  else{
    this.show_hobbies = true;
  }
 }

add_hobby(hobby){
  this.hobbies.push(hobby);

}

delete_hobby(index){
  this.hobbies.splice(index,1);
}

}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;

}
