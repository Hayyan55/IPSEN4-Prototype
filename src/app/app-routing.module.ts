import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainScanComponent} from "./main-scan/main-scan.component";
import {LoadScanComponent} from "./load-scan/load-scan.component";
import {ScanResultComponent} from "./scan-result/scan-result.component";

const routes: Routes = [
  {path:'loadScan', component: LoadScanComponent},
  {path: '', redirectTo: '/mainScan', pathMatch: 'full'},
  { path: 'mainScan', component: MainScanComponent},
  {path: 'scanResult', component: ScanResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
