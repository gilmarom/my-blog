import { Component, OnInit } from '@angular/core';
import { ValuesService  } from '../../services/values.service';
import { valueItem} from '../../components/home/value-item'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vls: valueItem[];

  constructor(private valuesService: ValuesService ) { }
  values = ['compasion', 'sharing', 'proggres']
  tiles = [
    {text: 'Mendelhaim', cols: 3, rows: 1, color: 'black', img:''},
    {text: 'Two', cols: 1, rows: 2, color: 'black', img:''},
    {text: 'Three', cols: 1, rows: 1, color: 'green', img:''},
    {text: `Gregor Johann Mendel ( 20 July 1822 – 6 January 1884)  was a scientist, Augustinian friar and abbot of St. Thomas' Abbey. Mendel was born in Silesian part of the Austrian Empire (today's Czech Republic) and gained posthumous recognition as the founder of the modern science of genetics Decades after his study. It was Inevitable to add to his name the word haim, meaning life in hebrew to push forward his inspiration in our vision.`, cols: 2, rows: 2, color: '',img:'../assets/images/mendel.png'},
  ];
  ngOnInit() {

    this.vls = this.valuesService.getVls();
  }

}
