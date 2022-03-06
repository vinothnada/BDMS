import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openTab(tab1: string, tab2: string) : void {
    var tabcontent1,tabcontent2 ;

    tabcontent1 = document.getElementById(tab1);
    console.log(tabcontent1);
    tabcontent1.style.display = "block";

    tabcontent2 = document.getElementById(tab2);
    tabcontent2.style.display = "none";
  }

}
