import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { emit } from "process";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreate = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreate") bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newserverName = "";
  newserverContent = "";
  serverCreated = false;
  constructor() {}

  ngOnInit() {}
  onCreateServer() {
    if (this.newserverName && this.newserverContent) {
      this.serverCreate.emit({
        serverName: this.newserverName,
        serverContent: this.newserverContent,
      });
    }
  }

  onCreateBluePrint() {
    if (this.newserverName && this.newserverContent) {
      this.bluePrintCreated.emit({
        serverName: this.newserverName,
        serverContent: this.newserverContent,
      });
    }
  }
}
