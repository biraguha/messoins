import { Component, HostListener } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface INav {
    name: string;
}

@Component({
    selector: 'messoins-layout-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {
    
    faSearch = faSearch;
    divWidth: number;
    showNav: boolean = false;
    navs: INav[];

    @HostListener('window:resize', ['$event'])
    onresize(event) {
        this.divWidth = event.target.innerWidth;
    }

    constructor() {
        this.divWidth = window.innerWidth;
        this.navs = [
            { name: 'Projets' },
            { name: 'Biographie' },
            { name: 'Equipements' },
            { name: 'Contact' }
        ]
    }

    isMobile(): boolean {
        return this.divWidth <= 768;
    }

    toggle(): void {
        this.showNav = !this.showNav;
    }
}
