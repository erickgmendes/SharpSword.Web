import { Component, OnInit } from "@angular/core";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "app-sheets",
  templateUrl: "./sheets.component.html",
  styleUrls: ["./sheets.component.scss"],
})
export class SheetsComponent implements OnInit {
  public tableData: TableData;

  constructor() {}

  ngOnInit() {
    this.tableData = {
      headerRow: ["ID", "Nome", "Sistema"],
      dataRows: [
        ["1", "Dakota Rice", "D&D 5e"],
        ["2", "Minerva Hooper", "Mighty Blade"],
        ["3", "Sage Rodriguez", "Old Dragon"],
        ["4", "Philip Chaney", "D&D 5e"],
        ["5", "Doris Greene", "Mighty Blade"],
        ["6", "Mason Porter", "Old Dragon"],
        ["7", "Sage Rodriguez", "Old Dragon"],
        ["8", "Philip Chaney", "D&D 5e"],
      ],
    };
  }
}
