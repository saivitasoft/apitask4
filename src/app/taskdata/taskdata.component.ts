import { Component,OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-taskdata',
  templateUrl: './taskdata.component.html',
  styleUrls: ['./taskdata.component.css']
})

  
  export class TaskdataComponent implements OnInit {

    constructor(private apiService: ApicallService){}
    apiData!: any;


   ngOnInit() {
    this.apiService.getData().subscribe((res: any) => {
      console.log(res);
      this.apiData = res.data
      console.log(this.apiData);

  
      });
  
    }
  }

  
  



