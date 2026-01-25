import { Component, OnInit, inject  } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { GenericDialogComponent } from "../shared/dialogs/generic-dialog/generic-dialog.component";

declare interface TableRow {
  id: string;
  nome: string;
  sistema: string;
}

@Component({
  selector: "app-sheets",
  templateUrl: "./sheets.component.html",
  styleUrls: ["./sheets.component.scss"],
})
export class SheetsComponent implements OnInit {
  private dialog: MatDialog = inject(MatDialog);

  public length: number = 0;
  public pageSize: number = 9;
  public pageEvent: PageEvent;
  public currentPageIndex: number = 0;
  public tableData: TableRow[] = [];
  public filteredDataRows: TableRow[] = [];
  public pageSizeOptions: number[] = [9, 18, 27, 100];

  public ngOnInit(): void {
    this.tableData = [
      { id: "1", nome: "Dakota Rice", sistema: "D&D 5e" },
      { id: "2", nome: "Minerva Hooper", sistema: "Mighty Blade" },
      { id: "3", nome: "Sage Rodriguez", sistema: "Old Dragon" },
      { id: "4", nome: "Philip Chaney", sistema: "D&D 5e" },
      { id: "5", nome: "Doris Greene", sistema: "Mighty Blade" },
      { id: "6", nome: "Mason Porter", sistema: "Old Dragon" },
      { id: "7", nome: "Sage Rodriguez", sistema: "Old Dragon" },
      { id: "8", nome: "Philip Chaney", sistema: "D&D 5e" },
      { id: "9", nome: "John Smith", sistema: "Pathfinder" },
      { id: "10", nome: "Jane Doe", sistema: "Call of Cthulhu" },
      { id: "11", nome: "Bob Johnson", sistema: "Shadowrun" },
      { id: "12", nome: "Alice Williams", sistema: "Cyberpunk RED" },
      { id: "13", nome: "Charlie Brown", sistema: "Vampire: The Masquerade" },
      { id: "14", nome: "Diana Miller", sistema: "Star Wars RPG" },
      { id: "15", nome: "Edward Davis", sistema: "D&D 3.5" },
      { id: "16", nome: "Fiona Garcia", sistema: "Exalted" },
      { id: "17", nome: "Alice Williams", sistema: "Cyberpunk RED" },
      { id: "18", nome: "Charlie Brown", sistema: "Vampire: The Masquerade" },
      { id: "19", nome: "Diana Miller", sistema: "Star Wars RPG" },
      { id: "20", nome: "Edward Davis", sistema: "D&D 3.5" },
      { id: "21", nome: "Fiona Garcia", sistema: "Exalted" },
    ];

    // Initialize length based on total data rows
    this.length = this.tableData.length;

    // Apply initial pagination
    this.applyPagination();
  }

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
    this.filteredDataRows = this.tableData.slice(startIndex, endIndex);
  }


  public editItem(item: TableRow): void {
    alert(`Editar personagem: ${item.nome}`);
    // Aqui você pode implementar a lógica para editar o personagem
  }

  public deleteItem(item: TableRow): void {
    // Open the generic dialog for confirmation
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmar Exclusão',
        message: `Tem certeza que deseja excluir o personagem "${item.nome}"?`,
        confirmText: 'Excluir',
        cancelText: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed deletion
        this.performDelete(item);
      }
    });
  }

  private performDelete(item: TableRow): void {
    // Remove the item from the table data
    this.tableData = this.tableData.filter(row => row.id !== item.id);

    // Update the length and reapply pagination
    this.length = this.tableData.length;
    this.applyPagination();

    // Show a success message (you could use a snackbar here)
    alert(`Personagem "${item.nome}" excluído com sucesso!`);
  }

}
