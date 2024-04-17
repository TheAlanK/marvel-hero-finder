import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Marvel } from 'src/app/models/marvel.model';
import { SharedModule } from '@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-marvel-details',
  templateUrl: './marvel-details.component.html',
  styleUrls: ['./marvel-details.component.scss'],
  standalone: true,
  imports: [CommonModule,
    SharedModule,
    MatButtonModule,
  ]
})
export class MarvelDetailsComponent {
  @Input() public marvelDetails: { marvel: Marvel | null; gptInfo: string } | null = null;
  expanded = false;

  public getLink(marvel: Marvel, type: 'comiclink' | 'detail' | 'wiki'): string | undefined {
    return marvel?.urls.find(url => url.type === type)?.url;
  }

  public toggleText(): void {
    this.expanded = !this.expanded;
  }
}
