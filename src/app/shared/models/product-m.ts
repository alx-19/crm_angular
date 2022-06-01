import {ProductI} from "../interfaces/product-i";

export class ProductM implements ProductI {
  id = 0;
  reference = '';
  nom = '';
  type = '';
  tarif = '';
  surface = '';
  notes = '';
  url = '';
}
