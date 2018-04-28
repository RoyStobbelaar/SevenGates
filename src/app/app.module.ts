import { GameComponent } from './game/game.component';
import { LocationsComponent } from './locations/locations.component';
import { CharactersComponent } from './characters/characters.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuGridComponent } from './menu-grid/menu-grid.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoryComponent } from './story/story.component';
import { WorldComponent } from './world/world.component';
import { EditorComponent } from './editor/editor.component';
import { SideMenuService } from './services/side-menu.service';

const appRoutes = [
  { path: '', component: MenuGridComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'story', component: StoryComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'world', component: WorldComponent },
  { path: 'game', component: GameComponent },
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuGridComponent,
    CharactersComponent,
    StoryComponent,
    LocationsComponent,
    WorldComponent,
    GameComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [SideMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
