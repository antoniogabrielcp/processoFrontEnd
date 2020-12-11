import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Processo } from '../model/processo';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessoService } from '../service/processo.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-processo-list',
  templateUrl: './processo-list.component.html',
  styleUrls: ['./processo-list.component.css']
})
export class ProcessoListComponent implements OnInit {

  processos: Processo[];  
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
  	private processoService: ProcessoService,
  	private httpClient: HttpClient
  	) {}

  ngOnInit() {
    this.buscaProcessos();
  }

  buscaProcessos(){
    this.processoService.findAll().subscribe(data => {
      this.processos = data;
    });
  }

  getFileName(response: HttpResponse<Blob>) {
    let filename: string;
    try {
      const contentDisposition: string = response.headers.get('content-disposition');
      const r = /(?:filename=")(.+)(?:")/
      filename = r.exec(contentDisposition)[1];
    }
    catch (e) {
      filename = 'myfile.jpg'
    }
    return filename
  }
  
  getArquivo($event: any, id: number) {
    $event.preventDefault();
    this.processoService.getArquivo(id).subscribe(
      (response: HttpResponse<Blob>) => {
          let filename: string = this.getFileName(response)
          let binaryData = [];
          binaryData.push(response.body);
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
          downloadLink.setAttribute('download', filename);
          document.body.appendChild(downloadLink);
          downloadLink.click();
      }
      ), error => console.log('Error downloading the file'),
    () => console.info('File downloaded successfully');

    this.buscaProcessos();
  } 
    
}