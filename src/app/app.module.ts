import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '@app/app-routing.module';

import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from '@app/_helpers';
import { AppComponent } from '@app/app.component';
import { AlertComponent } from '@app/_components';
import { HomeComponent } from '@app/home';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // szolgáltató, amit a hamis backend létrehozására használunk
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };