import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { GravityService } from '../../../gravity.service';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
    selector: 'app-applist',
    templateUrl: './applist.component.html',
    styleUrls: ['./applist.component.scss']
})
export class applistComponent implements OnInit, AfterViewInit {
    show: boolean = false;
    right: any;
    left: any;
    btn: any;
    applistData:object;
 
    ngAfterViewInit() {
        
    }

    constructor(private API : GravityService) {
        this.applistData = API.getApp();
    }

    ngOnInit() {
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
    }

    publish(data){
       /* var x = confirm("Would you like to publish ad !")
        var self = this;
        if(x){           
            this.API.publishApp(data, true)
            this.applistData = this.API.getApp();
        } */
		this.API.publishApp(data, true)
        this.applistData = this.API.getApp();

    }

    btnClicked() {
        this.show = !this.show;
        this.btn.className =
            this.btn.className === 'fa fa-times fa-2x'
                ? 'fa fa-bars fa-2x'
                : 'fa fa-times fa-2x';
        this.left.classList.toggle('hide');
        this.right.classList.toggle('hide-div-content');
    }
}
