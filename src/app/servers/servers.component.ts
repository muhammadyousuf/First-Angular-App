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
  serverName = "Tested";
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStaus =
      "Server was created!' Name is " + this.serverName;
    
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
