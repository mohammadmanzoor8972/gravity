import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GravityService } from '../../gravity.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
    show: boolean = false;
    right: any;
    left: any;
    btn: any;
    flag: boolean = false;
    activeApp = {};
    constructor(private API : GravityService) {}

    ngAfterViewInit() {
        if (!this.show) {
            document.getElementById('sidebar-home').style.background =
                '#1abc9c';
        }
    }

    ngOnInit() {
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
        this.activeApp = this.API.getActiveApp();
    }
    unPublish(){
        this.API.unpublishApp(this.activeApp)
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
