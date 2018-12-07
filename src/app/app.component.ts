import { Component } from '@angular/core';

import { HeaderComponent } from "./layout/header.component";
import { FooterComponent } from "./layout/footer.component";

@Component({
    selector: 'messoins-root',
    template: `
    <div class="h-full relative">
        <div class="bg-white md:px-4 md:mx-6 md:mt-6" style="padding-bottom: 60px">
            <messoins-layout-header></messoins-layout-header>
            <messoins-home></messoins-home>
        </div>
        <messoins-layout-footer></messoins-layout-footer>
    </div>    
    `,
    styles: []
})

export class AppComponent {}
