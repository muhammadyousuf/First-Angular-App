import { Component, OnInit } from "@angular/core";

@Component({
  // selector: "[app-servers]",
  // selector: ".app-servers",
  selector: "app-servers",
  //template: `<app-server></app-server>`,
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStaus = "No server was created!'";

  
  servers = [{type:'server', name:'test', content:"testing"}];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}



  // onUpdateServerName(event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
