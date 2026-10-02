const customertname ="Sara";
const booktitle ="javascript Basics";
const Pprice =150;
const quintity = '3';
const shippingcost =30;

const customernamewithspaces=" Sara ";
const cleanedcustomername=customernamewithspaces.trim();

console.log("Original name:",`"${customernamewithspaces}"`);
console.log("Cleaned name:" , `"${cleanedcustomername}"`);

let num = Number(quintity);

console.log("Original quintity:" ,quintity);
console.log("Original quintity type:" ,typeof quintity);

console.log("Numeric quintity:", num);
console.log("Numeric quintity type:", typeof num);

const subtotal= Pprice * quintity;
const total=subtotal+shippingcost;

console.log("-----BOOK RECEIPT-----")
console.log("Customer:" + " " + cleanedcustomername);
console.log("Book:" + " " + booktitle);
console.log("Price:" + " " + Pprice.toFixed(2));
console.log("Quintity:" + " " + quintity);
console.log("Subtotal:" + " " + subtotal.toFixed(2));
console.log("Shippingcost:" + " " + shippingcost.toFixed(2));
console.log("Total:" + " " + total.toFixed(2));


