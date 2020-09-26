import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Some Welcome Message..!!'
  name: string = ''
  welcomeMessageFromService: string

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit(){
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
    alert('name : '+this.name)
  }
  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.welcomeMessageFromService = this.service.executeHelloWorldBeanServiceWithPathVariable(this.name);
    // console.log("Get Welcome Message"+ this.welcomeMessageFromService)
  }

}
