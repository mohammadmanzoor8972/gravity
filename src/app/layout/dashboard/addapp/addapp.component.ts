import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { GravityService } from '../../../gravity.service';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
    selector: 'app-addapp',
    templateUrl: './addapp.component.html',
    styleUrls: ['./addapp.component.scss']
})
export class addappComponent implements OnInit, AfterViewInit {
    show: boolean = false;
    right: any;
    left: any;
    btn: any;
    addappData:object;
    myform: FormGroup;
    @ViewChild('fileInput') fileInput;

    ngAfterViewInit() {
        // if (!this.show) {
        //     document.getElementById('sidebar-addapp').style.background =
        //         '#1abc9c';
        // }
    }
    
    constructor(private API : GravityService, private router : Router) {
        
    }

    ngOnInit() {
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
        this.API.getApp();
    
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

    submits(data){
        const fileBrowser = this.fileInput.nativeElement;
       /* if (fileBrowser.files && fileBrowser.files[0]) {
            const formData = new FormData();
            formData.append('files', fileBrowser.files[0]);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/addapp', true);
            xhr.onload = function () {
              if (this['status'] === 200) {
                  const responseText = this['responseText'];
                  const files = JSON.parse(responseText);
                  //todo: emit event
              } else {
                //todo: error handling
              }
            };
            xhr.send(formData);
        }*/

        let param = data.value;
        this.API.addApp(param);
        this.router.navigate(['/dashboard/applist']);
        

        
    }

    
}
