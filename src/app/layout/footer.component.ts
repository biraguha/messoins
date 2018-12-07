import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faSoundcloud,
    faTwitter
} from "@fortawesome/fontawesome-free-brands";

interface ISocial {
    name: string;
    icon: any;
    url: string;
}

@Component({
    selector: 'messoins-layout-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent {

    faFacebookF = faFacebookF;
    faInstagram = faInstagram;
    faYoutube = faYoutube;
    faSoundcloud = faSoundcloud;
    faTwitter = faTwitter;
    socials: ISocial[];

    constructor() {
        this.socials = [
            { name: 'Facebook', icon: faFacebookF, url: 'https://www.facebook.com/messoins' },
            { name: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/messoins/' },
            { name: 'Youtube', icon: faYoutube, url: 'https://www.youtube.com/channel/UCHbxTXmz-1BGsjW2ZSC_MEQ' },
            { name: 'Soundcloud', icon: faSoundcloud, url: 'https://soundcloud.com/messoinsmusic' },
            { name: 'Twitter', icon: faTwitter, url: 'https://twitter.com/messoins' }
        ]
    }

}