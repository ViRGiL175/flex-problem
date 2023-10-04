import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FlexComponent} from "./flex/flex.component";

const routes: Routes = [
  {
    title: "Testing Flex",
    path: "", component: FlexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
