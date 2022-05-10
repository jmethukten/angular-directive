import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  articles: Article[] = [
    new Article(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nemo iure obcaecati, numquam aperiam unde, est enim tempore laborum doloremque recusandae, repellat incidunt similique id et? Perspiciatis, consectetur alias sed laudantium quia exercitationem, excepturi vitae autem blanditiis similique est dicta deserunt quas libero aliquam iste ullam pariatur! Consequuntur facere esse modi harum quae distinctio eligendi pariatur possimus dolor praesentium quas adipisci perferendis, sapiente natus laborum ullam, aut placeat aliquid magnam nihil neque aperiam sequi. Exercitationem dicta, inventore perferendis minus fugit nostrum voluptate magni at illo, in doloremque ex accusamus saepe soluta. Ipsam blanditiis voluptatibus molestias aliquam voluptatum architecto fugiat perspiciatis!',
      'blue'
    ),
    new Article(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nemo iure obcaecati, numquam aperiam unde, est enim tempore laborum doloremque recusandae, repellat incidunt similique id et? Perspiciatis, consectetur alias sed laudantium quia exercitationem, excepturi vitae autem blanditiis similique est dicta deserunt quas libero aliquam iste ullam pariatur! Consequuntur facere esse modi harum quae distinctio eligendi pariatur possimus dolor praesentium quas adipisci perferendis, sapiente natus laborum ullam, aut placeat aliquid magnam nihil neque aperiam sequi. Exercitationem dicta, inventore perferendis minus fugit nostrum voluptate magni at illo, in doloremque ex accusamus saepe soluta. Ipsam blanditiis voluptatibus molestias aliquam voluptatum architecto fugiat perspiciatis!',
      'black'
    ),
    new Article(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nemo iure obcaecati, numquam aperiam unde, est enim tempore laborum doloremque recusandae, repellat incidunt similique id et? Perspiciatis, consectetur alias sed laudantium quia exercitationem, excepturi vitae autem blanditiis similique est dicta deserunt quas libero aliquam iste ullam pariatur! Consequuntur facere esse modi harum quae distinctio eligendi pariatur possimus dolor praesentium quas adipisci perferendis, sapiente natus laborum ullam, aut placeat aliquid magnam nihil neque aperiam sequi. Exercitationem dicta, inventore perferendis minus fugit nostrum voluptate magni at illo, in doloremque ex accusamus saepe soluta. Ipsam blanditiis voluptatibus molestias aliquam voluptatum architecto fugiat perspiciatis!',
      'red'
    ),
    new Article(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nemo iure obcaecati, numquam aperiam unde, est enim tempore laborum doloremque recusandae, repellat incidunt similique id et? Perspiciatis, consectetur alias sed laudantium quia exercitationem, excepturi vitae autem blanditiis similique est dicta deserunt quas libero aliquam iste ullam pariatur! Consequuntur facere esse modi harum quae distinctio eligendi pariatur possimus dolor praesentium quas adipisci perferendis, sapiente natus laborum ullam, aut placeat aliquid magnam nihil neque aperiam sequi. Exercitationem dicta, inventore perferendis minus fugit nostrum voluptate magni at illo, in doloremque ex accusamus saepe soluta. Ipsam blanditiis voluptatibus molestias aliquam voluptatum architecto fugiat perspiciatis!',
      'green'
    ),
  ];

  titleColor: string = '';
  active: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleClick(color: string) {
    this.titleColor = color;
    this.active = color;
  }
}
