import { Component,OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-taskdata',
  templateUrl: './taskdata.component.html',
  styleUrls: ['./taskdata.component.css']
})

  
  export class TaskdataComponent implements OnInit {

    constructor(private apiService: ApicallService){}
  
    ngOnInit(): void {
    }
  }

  
  



