import { Invoice } from "./classes/invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/payments.js";
import { HasFormatted } from "./interfaces/HasFormatted.js";

const invOne = new Invoice('gio', 'car purchase', 250);
const invTwo = new Invoice('frank', 'boat purchase', 450);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);


// inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatted;
  if (type.value == 'invoice'){
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payments(toFrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end');

})