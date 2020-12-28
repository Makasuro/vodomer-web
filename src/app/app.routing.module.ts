import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountersComponent } from "./components/counters/counters.component";
import { GraphComponent } from "./components/graph/graph.component";
import { MemoComponent } from "./components/memo/memo.component";

const routes: Routes = [
    {path:'', component: CountersComponent},
    {path:'chart', component: GraphComponent},
    {path:'memo', component: MemoComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }