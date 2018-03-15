import { Injectable,Type ,Input} from '@angular/core';
import { valueItem , valueComponent} from '../components/home/value-item';
import { ValueContentComponent } from '../components/home/value-content.component';

@Injectable()
export class ValuesService {

  getVls() {
    return [
      new valueItem(ValueContentComponent, {value: 'Sharing', content: 'Sharing is caring, adding tutorials and articles is our way to create value to our community'}),
      new valueItem(ValueContentComponent, {value: 'Compassion', content: 'We are aware of the accelerated development and the social dilemmas that lie ahead in the near future. Compassion is what will connect us as one society. Massive medical progress is essential to human functioning'}),
      new valueItem(ValueContentComponent, {value: 'Innovation & impact', content: 'We are here to promote the innovators who are struggling to improve the world, this is our way to impact'}),
      
      
    ];
  }

}
