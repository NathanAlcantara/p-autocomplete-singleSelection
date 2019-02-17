import { Component, OnChanges, ViewChild } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {

  @ViewChild('autoComplete') autoComplete: AutoComplete;

  private isSelected = false;
  private inputElement: any;

  public country: any;
  public filteredCountries: any[];

  constructor(private countryService: CountryService) {}

  public search(event): any {
      if (!this.isSelected) {
          const query = event.query;
          this.countryService.getCountries().then(countries => {
              this.filteredCountries = this.filterCountry(query, countries);
          });
      } else {
          this.autoComplete.hide();
          this.autoComplete.loading = false;
      }

      this.inputElement = this.autoComplete.multiInputEL.nativeElement;
  }

  public filterCountry(query, countries: any[]): any[] {
      // in a real application, make a request to a remote url with the query and return filtered results
      // for demo we filter at client side
      const filtered: any[] = [];
      for (const country of countries) {
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
              filtered.push(country);
          }
      }
      return filtered;
  }

  public selected() {
      this.isSelected = true;
      this.inputElement.disabled = true;
  }

  public unSelected() {
      this.isSelected = false;
      this.inputElement.disabled = false;
  }
}
