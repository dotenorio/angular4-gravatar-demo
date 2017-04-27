import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GravatarComponent } from './gravatar/gravatar.component';
import { GravatarService } from './gravatar/gravatar.service'

@NgModule({
  declarations: [
    AppComponent,
    GravatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [GravatarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
