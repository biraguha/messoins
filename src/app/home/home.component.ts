import { Component, OnInit } from '@angular/core';
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

interface ITab {
    type: string;
}

interface IArtist {
    url: string;
    info: string;
    terms: string;
}

@Component({
    selector: 'messoins-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent {

    faCircleNotch = faCircleNotch;
    joab: string = '#JourneyOfABeat';
    selectedTab: ITab;
    loading: boolean;
    completed: boolean;

    tabs: ITab[] = [
        { type: 'Tout' },
        { type: '#JourneyOfABeat' },
        { type: 'Playlistes' }
    ];

    artists: IArtist[] = [
        { info: 'Playliste de la semaine n°2', terms: 'Playlistes', url: 'assets/img/playlist1.png' },
        { info: '#JourneyOfABeat : Ep17', terms: this.joab, url: 'assets/img/joab17.jpg' },
        { info: '#JourneyOfABeat : Ep16', terms: this.joab, url: 'assets/img/joab16.jpg' },
        { info: '#JourneyOfABeat : Ep15', terms: this.joab, url: 'assets/img/joab15.jpg' },
        { info: '#JourneyOfABeat : Ep14', terms: this.joab, url: 'assets/img/joab14.jpg' },
        { info: '#JourneyOfABeat : Ep13', terms: this.joab, url: 'assets/img/joab13.jpg' },
        { info: '#JourneyOfABeat : Ep12', terms: this.joab, url: 'assets/img/joab12.jpg' },
        { info: '#JourneyOfABeat : Ep11', terms: this.joab, url: 'assets/img/joab11.jpg' },
        { info: '#JourneyOfABeat : Ep10', terms: this.joab, url: 'assets/img/joab10.jpg' },
        { info: '#JourneyOfABeat : Ep9', terms: this.joab, url: 'assets/img/joab09.jpg' },

    ];

    constructor() {
        this.selectedTab = this.tabs[0];
    }

    selectTab(terms: string) {
        let tab: ITab;

        switch (terms) {
            case 'Tout': tab = this.tabs[0]; break;
            case '#JourneyOfABeat': tab = this.tabs[1]; break;
            case 'Playlistes': tab = this.tabs[2]; break;
        }

        this.selectedTab = tab;
    }

    loadArtist() {
        this.loading = true;
        this.completed = true;

        let newArtists: IArtist[] = [
            { info: '#JourneyOfABeat : Ep8', terms: this.joab, url: 'assets/img/joab08.jpg' },
            { info: '#JourneyOfABeat : Ep7', terms: this.joab, url: 'assets/img/joab07.jpg' },
            { info: '#JourneyOfABeat : Ep6', terms: this.joab, url: 'assets/img/joab06.jpg' },
            { info: '#JourneyOfABeat : Ep5', terms: this.joab, url: 'assets/img/joab05.jpg' },
            { info: '#JourneyOfABeat : Ep4', terms: this.joab, url: 'assets/img/joab04.jpg' },
            { info: '#JourneyOfABeat : Ep3', terms: this.joab, url: 'assets/img/joab03.jpg' },
            { info: '#JourneyOfABeat : Ep2', terms: this.joab, url: 'assets/img/joab02.jpg' },
            { info: '#JourneyOfABeat : Ep1', terms: this.joab, url: 'assets/img/joab01.jpg' }
        ];

        setTimeout(() => { 
            this.loading = false;
            this.artists = this.artists.concat(newArtists);
        }, 1000);
        // newArtists.forEach(x => this.artists.push(x));
    }

    filterArtists(tab: ITab): IArtist[] {

        let artists: IArtist[] = [];

        if (tab.type === 'Tout')
            artists = this.artists;
        else
            artists = this.artists.filter(x => x.terms === tab.type);

        return artists;
    }
}