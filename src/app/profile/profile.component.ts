import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],

  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public posts: any[] = [];
  constructor(private commentService: CommentService) {

    this.posts = this.commentService.posts

   }

  ngOnInit(): void {
    // Después de inicializar this.images, obtén los comentarios asociados a cada imagen
  }

  addComment(id: number, text: string) {
    console.log({id, text})
    this.commentService.addComment(id, text);
    // Lógica adicional después de agregar un comentario, si es necesario
  }


}



