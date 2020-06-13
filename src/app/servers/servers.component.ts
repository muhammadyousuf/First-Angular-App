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
  serverName = "";
  serverContent = "";
  serverCreated = false;
  servers = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  onCreateServer() {
    if (this.serverName.length && this.serverContent.length) {
      this.serverCreated = true;
      this.servers.push({
        type: "server",
        name: this.serverName,
        content: this.serverContent,
      });
      // this.serverCreationStaus =
      //   "Server was created!' Name is " + this.serverName;
    }
  }

  onCreateBluePrint() {
    if (this.serverName.length && this.serverContent.length) {
      this.serverCreated = true;
      this.servers.push({
        type: "bluePrint",
        name: this.serverName,
        content: this.serverContent,
      });
      // this.serverCreationStaus =
      //   "Server was created!' Name is " + this.serverName;
    }
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
