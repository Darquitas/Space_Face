import { Injectable } from '@angular/core';

interface Post {
  id: number;
  imageSrc: string;
  comments: string[];
}

@Injectable({
  providedIn: 'root'
})

export class CommentService {
	public posts: Post[] = [{id: 1, imageSrc: "../../assets/imagenes/foto1.jpeg", comments: []},
  {id: 2, imageSrc: "../../assets/imagenes/foto2.jpeg", comments: []},
  {id: 3, imageSrc: "../../assets/imagenes/foto3.jpeg", comments: []},
  {id: 4, imageSrc: "../../assets/imagenes/foto4.jpeg", comments: []},
  {id: 5, imageSrc: "../../assets/imagenes/fptp5.jpeg", comments: []},
  {id: 6, imageSrc: "../../assets/imagenes/foto7.jpeg", comments: []}]; // Supongamos que tenemos una lista de post

  constructor() { }

  // Agregar un comentario a una foto
  addComment(id: number, text: string) {

    let postsLs = localStorage.getItem('posts');

    if(postsLs){
      this.posts = JSON.parse(postsLs);
    }

    this.posts.forEach(post => {
      if(post.id == id){
        post.comments.push(text);
      }
    });
    localStorage.setItem('posts', JSON.stringify(this.posts));
    console.log(text)
    console.log(this.posts)


  }
}