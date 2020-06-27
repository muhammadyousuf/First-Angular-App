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
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newserverName = "";
  newserverContent = "";
  serverCreated = false;
  constructor() {}

  ngOnInit() {}
  onCreateServer() {
    console.log("this.newserverName", this.newserverName);
    this.serverCreate.emit({
      serverName: this.newserverName,
      serverContent: this.newserverContent,
    });
  }

  onCreateBluePrint() {
    this.bluePrintCreated.emit({
      serverName: this.newserverName,
      serverContent: this.newserverContent,
    });
  }
}
