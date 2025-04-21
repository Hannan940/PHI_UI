import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-processor',
  standalone: true, 
  templateUrl: './file-processor.component.html',
  imports: [CommonModule, HttpClientModule],  
  styleUrls: ['./file-processor.component.scss']  
})
export class FileProcessorComponent {
  selectedFiles: File[] = [];

  statusMessage: string | null = null;
  private apiUrl = 'https://localhost:44396/api/phi/redact-file';

  constructor(private http: HttpClient) {}

  isError(): boolean {
    return this.statusMessage ? this.statusMessage.startsWith('Error') : false;
  }

  onFileSelect(event: any): void {
    this.selectedFiles = Array.from(event.target.files);

    this.statusMessage = `${this.selectedFiles.length} file(s) selected.`;
  }

  processFiles(): void {

    // If no files are selected, show a message to ask the user to select files
    if (this.selectedFiles.length === 0) {
      this.statusMessage = 'Please select files to process.';
      return;  
    }

    this.statusMessage = 'Processing files...';

    // Call the processFilesApi method to send the files to the backend API
    this.processFilesApi(this.selectedFiles).subscribe(
      (response) => {
        this.statusMessage = 'Files processed successfully!';
        console.log('Processed file response:', response);  
      },
      (error) => {
        // If there is an error during the API call, display the error message to the user
        this.statusMessage = `Error processing files: ${error.error}`;
        console.error('Error processing files:', error);  
      }
    );
  }

  private processFilesApi(file: File[]): Observable<any> {

    const formData = new FormData();
    
    file.forEach(f => formData.append('file', f, f.name));

    const options = {
      headers: new HttpHeaders()
    };

    return this.http.post(this.apiUrl, formData, options);
  }
}
