import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { Alumno } from 'src/app/models';
import { MatTableDataSource } from '@angular/material/table';







@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public alumnos: Alumno[] = [
    new Alumno(1, 'Sheldon', 'Cooper', 'sheldon@mail.com', 24, new Date('1999-01-03'), 'Angular'),
    new Alumno(3, 'Leonard', 'Hofstadter', 'leonard@mail.com', 24,  new Date('1999-04-14'), 'JavaScript'),
    new Alumno(4, 'Penny', 'Hofstadter', 'penny@mail.com', 22, new Date('2001-01-24'), 'Desarrollo web'),
    new Alumno(5, 'Rajesh', 'Koothrappali', 'rajesh@mail.com', 27, new Date('1996-02-12'), 'Angular'),
    new Alumno(6, 'Howard', 'Wolowitz', 'howard@mail.com', 25, new Date('1996-03-24'), 'Desarrollo web'),
  ];
  displayedColumns: string[] = ['id', 'nombre completo', 'email', 'edad', 'fecha de nacimiento', 'curso', 'acciones']
  dataSource = new MatTableDataSource(this.alumnos);

  constructor(
    private matDialog: MatDialog
  ) { }

  onCreateUser(): void {
    const dialog = this.matDialog.open(UserFormDialogComponent)
    dialog.afterClosed().subscribe((valor) => {
      console.log(valor)
      if (valor) {
        this.dataSource.data = [...this.dataSource.data,
        {
          ...valor,
          id: this.dataSource.data.length + 1,
        }];
        console.log(this.dataSource.data)
      }

    })

  }
  aplicarFiltro(ev: Event): void {

    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();

  }
  eliminarAlumno(rowId: number) {
    if (rowId > -1) {
      this.matDialog.getDialogById(rowId.toString());
      this.dataSource.data.splice(rowId,1);
      this.dataSource._updateChangeSubscription();
      console.log(rowId.toString())
    }
  }
  editarAlumno(alumnoParaEditar: Alumno): void {

    const dialog = this.matDialog.open(UserFormDialogComponent, {

     data: {
        alumnoParaEditar
      }

    })

    dialog.afterClosed().subscribe((dataDelAlumnoEditado) => {

     if (dataDelAlumnoEditado) {

      this.dataSource.data = this.dataSource.data.map(

       (alumnoActual) => alumnoActual.id === alumnoParaEditar.id

        ? ({ ...alumnoActual, ...dataDelAlumnoEditado})

        : alumnoActual,

      );

     }

    })

   }

}
