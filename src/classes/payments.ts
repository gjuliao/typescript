import { HasFormatted } from '../interfaces/HasFormatted.js';

export class Payments implements HasFormatted {
    constructor(
      readonly recipient: string,
      private details: string,
      public amount: number,
    ){}
  
    format(){
      return `${this.recipient} owes $${this.amount} for ${this.details}`;
    }
  }