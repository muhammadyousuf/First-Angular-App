import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName = "";
  serverContent = "";
  serverCreated = false;
  constructor() { }

  ngOnInit() {
  }
  onCreateServer() {
    if (this.serverName.length && this.serverContent.length) {
      this.serverCreated = true;
      // this.servers.push({
      //   type: "server",
      //   name: this.serverName,
      //   content: this.serverContent,
      // });
    }
  }

  onCreateBluePrint() {
    if (this.serverName.length && this.serverContent.length) {
      this.serverCreated = true;
      // this.servers.push({
      //   type: "bluePrint",
      //   name: this.serverName,
      //   content: this.serverContent,
      // });
    }
  }
}
