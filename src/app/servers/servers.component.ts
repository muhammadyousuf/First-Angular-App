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

  servers = [{ type: "server", name: "test", content: "testing" }];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  onServerAdded(serverDate: { serverName: string; serverContent: string }) {
    console.log("os")
    this.servers.push({
      type: "server",
      name: serverDate.serverName,
      content: serverDate.serverContent,
    });
  }

  onBluePrintAdded(serverDate: { serverName: string; serverContent: string }) {
    this.servers.push({
      type: "bluePrint",
      name: serverDate.serverName,
      content: serverDate.serverContent,
    });
  }

  // onUpdateServerName(event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
