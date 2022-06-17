import {Component, OnInit, AfterViewInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {OrderService} from "../../../order/services/order.service";
import {map, Observable} from "rxjs";
import {OrderM} from "../../models/order-m";
import {DialogCreateOrderComponent} from "../dialog-create-order/dialog-create-order.component";
import {Ng2SearchPipe} from "ng2-search-filter";

@Component({
  selector: 'app-table-order',
  templateUrl: './table-order.component.html',
  styleUrls: ['./table-order.component.css']
})
export class TableOrderComponent implements OnInit {

  @Input()
  set searchTerm(term: string) {
    this.getAllOrders(term);
  }

  displayedColumns: string[] = ['reference', 'status', 'date', 'user', 'product', 'customer', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public order$!: Observable<OrderM[]>;

  constructor(private dialog: MatDialog,
              private searchPipe: Ng2SearchPipe,
              public order: OrderService) {
  }

  ngOnInit(): void {
    this.getAllOrders('');
  }

  editOrder(order: OrderService) {
    this.dialog.open(DialogCreateOrderComponent, {
      width: '45%',
      data: order
    });

  }

  deleteOrder(id: number) {
    let conf = confirm("Etes-vous sûr de vouloir le supprimer ? ");
    if (conf)
      this.order.deleteOrder(id)
        .subscribe({
          next: () => {
            alert('La Commande a bien été supprimé');
            this.getAllOrders('');
          },
          error: () => {
            alert("La suppression d'une commande en cours est interdite ! ")
          }
        })
  }

  getAllOrders(searchTerm: string) {
    this.order.getCollection()
      .pipe(
        map(ordersArray => {
         return this.searchPipe.transform(ordersArray, searchTerm);
        })
      )
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert("Erreur lors de la récupération des enregistrements")
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
