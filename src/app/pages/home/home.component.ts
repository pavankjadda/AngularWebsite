import {Component, OnInit} from '@angular/core';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import {faMobile} from '@fortawesome/free-solid-svg-icons/faMobile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{

  //Imports Font-Awesome Icons
  faLaptopCode=faLaptopCode;
  faGlobe=faGlobe;
  faMobile=faMobile;

  constructor()
  {
  }

  ngOnInit()
  {

  }
}
