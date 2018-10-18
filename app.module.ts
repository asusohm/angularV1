import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { HttpModule} from '@angular/http';
/* Import Material Angular */
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';

import {
   
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { UpdateCurrencyComponent } from './component/update-currency/update-currency.component';
import { LoginAdministratorComponent } from './component/login-administrator/login-administrator.component';
import { HomeComponent } from './component/home/home.component';
// import Module for Routes
import { Routes, RouterModule } from '@angular/router';
import { CurrencyRateController } from 'src/app/service/controller/currency.rate.controller/currency-rate-controller';
import { Authentication } from 'src/app/service/authentication/authentication';
import { FinancialComponent } from 'src/app/component/financial/financial.component'
import { TransactionController } from 'src/app/service/controller/transaction.controller/transaction-controller';
import { QueueController } from 'src/app/service/controller/queue.controller/queue-controller';
import { ReservationComponent } from 'src/app/component/reservation/reservation.component';
import { PrintReserveComponent } from 'src/app/component/print-reserve/print-reserve.component';
import { FormatDate } from 'src/app/service/format/format-date';



import { LoginComponent } from 'src/app/component/login/login.component';
import { ShowprofileComponent } from 'src/app/component/showprofile/showprofile.component';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { MemberControllerService } from 'src/app/service/controller/member.controller/member-controller.service';
import { ExchangecurrencyComponent } from 'src/app/component/exchangecurrency/exchangecurrency.component';
import { ReceiptcurrencyComponent } from 'src/app/component/receiptcurrency/receiptcurrency.component';
import { ExchangeController } from './service/controller/exchange.controller/exchange-controller';



const appRoutes: Routes = [
  {path:'login-admin' ,   component:LoginAdministratorComponent},
  {path:'update-rate' ,   component:UpdateCurrencyComponent},
  {path:'transaction' , component:FinancialComponent},
  {path:'reservation' , component:ReservationComponent},
  {path:'print-reserve', component:PrintReserveComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user-profile',component:ShowprofileComponent},
  {path:'receiptcurrency',component:ReceiptcurrencyComponent},
  {path:'exchangecurrency',component:ExchangecurrencyComponent},
  {path:'' , component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    // Sivarut
    HomeComponent,
    UpdateCurrencyComponent,
    LoginAdministratorComponent,
    // Natapon
    FinancialComponent,

    //Prai
    PrintReserveComponent,
    ReservationComponent,

    //Nan
    LoginComponent,
    ShowprofileComponent,
    RegisterComponent,

    // Mart
    ReceiptcurrencyComponent,
    ExchangecurrencyComponent 

    
    
  ],
  imports: [
    ScrollDispatchModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CurrencyRateController,DatePipe,Authentication,TransactionController,
    QueueController,FormatDate,MemberControllerService,ExchangecurrencyComponent,
    ReceiptcurrencyComponent,ExchangeController],
  bootstrap: [AppComponent]
})
export class AppModule { }
