import { Component } from '@angular/core';

import { GravatarService } from './gravatar.service'

@Component({
  selector: 'gravatar',
  templateUrl: './gravatar.component.html'
})
export class GravatarComponent {
  email = ''
  resultado = null

  constructor(private service: GravatarService) { }

  onSubmit(): void {
    this.service.getProfile(this.email).then((resultado: JSON[]) => this.resultado = resultado);
  }
}
