import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class memo {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/memo';

//Reactive state management using signals
  memoList = signal<any[]>([]);

  fetchMemo(){
    this.http.get<any[]>(this.apiUrl).subscribe(data => this.memoList.set(data));
  }

  saveMemo(data: any){
    return this.http.post(this.apiUrl, data);
  }

  deleteMemo(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.memoList.update(list => list.filter(p => p._id !== id)));
    //removing the item immediately from our local signal
  }

  updateMemo(id: string, data: any){
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}