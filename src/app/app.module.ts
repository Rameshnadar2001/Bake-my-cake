import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchComponent } from './search/search.component';
import {MatChipsModule} from '@angular/material/chips';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakeOrdersComponent } from './cake-orders/cake-orders.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingViewComponent,
    ItemCardComponent,
    SearchComponent,
    ItemDetailComponent,
    AdminComponent,
    PageNotFoundComponent,
    CakeOrdersComponent,
    FilterSearchComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,
    MatToolbarModule,MatIconModule,MatFormFieldModule, MatInputModule,
    MatButtonModule,MatCardModule, MatGridListModule, MatMenuModule,
    LayoutModule, MatSidenavModule, MatListModule,MatDatepickerModule,MatTableModule,
    MatNativeDateModule,MatRadioModule,MatExpansionModule,MatSnackBarModule,MatChipsModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
