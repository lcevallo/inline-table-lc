import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { IProvincias } from '../data/interfaces/i-provincias';

@Component({
  selector: 'app-oficinas-ce',
  templateUrl: './oficinas-ce.component.html',
  styleUrls: ['./oficinas-ce.component.css']
})
export class OficinasCeComponent implements OnInit {

  oficinasForms: FormArray = this.fb.array([]);
  provincias: IProvincias[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addOficinasForm();
  }

  addOficinasForm(){
    this.oficinasForms.push(
      this.fb.group(
        {
          id: [0],
          fkClienteEmpresa: [1],
          fkProvincia: [0, Validators.min(1)],
          fkCanton: [0],
          fkParroquia: [0],
          sector: [''],
          direccion: ['', Validators.required],
          telefono_convencional: ['']
        }
      )
    );
  }


}
