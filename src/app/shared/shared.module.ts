import { NgModule } from "@angular/core";
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
declarations :[
    HeaderComponent,
    BreadcrumsComponent,
    NopagefoundComponent,
    SliderComponent
],
exports : [
    HeaderComponent,
    BreadcrumsComponent,
    NopagefoundComponent,
    SliderComponent
]

})
export class SharedModule { }