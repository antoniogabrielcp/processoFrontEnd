import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessoService } from '../service/processo.service';
import { Processo } from '../model/processo';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-processo-tramitar',
  templateUrl: './processo-tramitar.component.html',
  styleUrls: ['./processo-tramitar.component.css']
})
export class ProcessoTramitarComponent implements OnInit {
  
  @ViewChild('formProcesso', { static: true }) formProcesso: NgForm;
  processo: Processo; 

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private httpClient: HttpClient,
    private processoService: ProcessoService) {
    this.processo = new Processo();
  }  

  ngOnInit() {
  	const id = +this.route.snapshot.params['id'];
  	this.processoService.buscarPorId(id).subscribe(data => {
      this.processo = data;
    });  	
  }  

  atualizar(): void {    
	  this.processoService.save(this.processo).subscribe(result => this.gotoProcessoList());  
  }

  gotoProcessoList() {
    this.router.navigate(['/processos']);
  } 

}
