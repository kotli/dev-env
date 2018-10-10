import './index.css';

import numeral from 'numeral';

const cValue = numeral(1000).format('$0,0.00');
//next line is for debuging webpack via source map
//debugger;
console.log(`Here is ${cValue} dollers`);// eslint-disable-line no-console


