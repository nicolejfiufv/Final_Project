import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { memo } from '../memo';

@Component({
  selector: 'app-new-memory',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-memory.html',
  styleUrl: './new-memory.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMemory implements OnInit{
  private formBuilder = inject(FormBuilder);
  memoService = inject(memo);
  editingId = signal<string | null>(null);

  memoForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    level: [1, [Validators.required, Validators.min(1)]],
    nature: ['', Validators.required],
  });

  ngOnInit() {
    // Initial fetch to show data when component loads
    this.memoService.fetchMemo();
  }

  deleteMemo(id: string){
    if(confirm("Are you sure you want to remove this memory?")){
      this.memoService.deleteMemo(id);
    }
    this.memoService.fetchMemo();
  }

  startEdit(memo: any){
    this.editingId.set(memo._id);
    this.memoForm.patchValue(memo);
    //populating our pokemon form automatically using patchValue
  }

  cancelEdit(){
    this.editingId.set(null);
    this.memoForm.reset();
  }

  onSubmit() {
    if (this.memoForm.invalid) return;

    const data = this.memoForm.getRawValue();
    const id = this.editingId();

    if(id){
      this.memoService.updateMemo(id, data).subscribe({
        next: () => {
          this.memoService.fetchMemo();
          this.cancelEdit();
        }, 
        error: (err) => console.error('Update Failed!', err)
      })
    } else {
      this.memoService.saveMemo(data).subscribe({
      next: () => {
        this.memoService.fetchMemo();
        this.memoForm.reset();
      },
      error: (err) => console.error('Save failed', err)
      });
    }
  }
}
