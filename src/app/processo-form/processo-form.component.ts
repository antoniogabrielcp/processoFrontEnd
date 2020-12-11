import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessoService } from '../service/processo.service';
import { Processo } from '../model/processo';

@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.css']
})
export class ProcessoFormComponent {

  processo: Processo;
  selectedFile: File;
  message: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private httpClient: HttpClient,
    private processoService: ProcessoService) {
    this.processo = new Processo();
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }

  onSubmit() {
  	this.onUpload();
    this.processoService.save(this.processo).subscribe(result => this.gotoProcessoList());
  }

  gotoProcessoList() {
    this.router.navigate(['/processos']);
  }
}
