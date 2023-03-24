import { Injectable } from '@angular/core';
import { moviesList } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategories() {
    return moviesList.categories;
  }

  getCategory(id: string) {
    return moviesList.categories.find((cat) => cat.id.toString() == id);
  }
}
