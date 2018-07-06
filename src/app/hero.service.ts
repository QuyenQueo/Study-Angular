import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero } from './HeroesComponent/hero';
import { HEROES } from './HeroesComponent/mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
  //   // return this.messageService.add('HeroService: fetched heroes');
  //   // return of(HEROES);
  // }
}
