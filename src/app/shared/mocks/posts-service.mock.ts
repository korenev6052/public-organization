import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsServiceMock {

  constructor() { }

  getPosts() {
    const posts: Post[] = [{
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Надійшло',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 1
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'Виконано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 2
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Скасовано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 3
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Скасовано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 4
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Скасовано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 5
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Скасовано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 6
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Скасовано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 7
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Скасовано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 8
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Скасовано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 9
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Скасовано',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 10
    }, {
      city: 'Макеевка',
      street: 'Репина',
      house: '3',
      photo: '1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam tenetur esse animi praesentium quia repellat maxime odio eum veritatis quis ad recusandae, nihil, necessitatibus rem commodi molestias dolorem itaque.',
      status: 'Надійшло',
      createdTimeStamp: '25.06.2019 12:25:25',
      changedTimeStamp: '25.06.2019 12:25:25',
      id: 11
    }];
    return posts;
  }

}