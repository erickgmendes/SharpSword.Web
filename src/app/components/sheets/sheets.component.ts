import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

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
  public filteredDataRows: string[][] = [];
  public length: number = 0;
  public pageSize: number = 9;
  public pageSizeOptions: number[] = [9, 18, 27, 100];
  public pageEvent: PageEvent;
  public currentPageIndex: number = 0;

  public setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(",")
        .map((str) => +str);
    }
  }

  public handlePageEvent(event: PageEvent): void {
    this.pageEvent = event;
    this.currentPageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.applyPagination();
  }

  private applyPagination(): void {
    const startIndex = this.currentPageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredDataRows = this.tableData.dataRows.slice(startIndex, endIndex);
  }

  public ngOnInit(): void {
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
        ["9", "John Smith", "Pathfinder"],
        ["10", "Jane Doe", "Call of Cthulhu"],
        ["11", "Bob Johnson", "Shadowrun"],
        ["12", "Alice Williams", "Cyberpunk RED"],
        ["13", "Charlie Brown", "Vampire: The Masquerade"],
        ["14", "Diana Miller", "Star Wars RPG"],
        ["15", "Edward Davis", "D&D 3.5"],
        ["16", "Fiona Garcia", "Exalted"],
        ["17", "Alice Williams", "Cyberpunk RED"],
        ["18", "Charlie Brown", "Vampire: The Masquerade"],
        ["19", "Diana Miller", "Star Wars RPG"],
        ["20", "Edward Davis", "D&D 3.5"],
        ["21", "Fiona Garcia", "Exalted"],
      ],
    };

    // Initialize length based on total data rows
    this.length = this.tableData.dataRows.length;

    // Apply initial pagination
    this.applyPagination();
  }
}
