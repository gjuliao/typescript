import { HasFormatted } from '../interfaces/HasFormatted.js';

export class Invoice implements HasFormatted {
    constructor(
      readonly client: string,
      private details: string,
      public amount: number,
    ){}
  
    format(){
      return `${this.client} owes $${this.amount} for ${this.details}`;
    }
  }