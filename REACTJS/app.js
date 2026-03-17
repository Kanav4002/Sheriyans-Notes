// Import and export
/*  
  var a = 10;
  export default a;

  seperate file: 
  import a from './app.js';
  console.log(a);
  

  1️⃣ Named Export → needs { }
  When you export something with its name, it must be imported with curly braces.
  export const arr = [1,2,3,4,5];
  import
  import { arr } from './app.js';
*/

export const arr = [1, 2, 3, 4, 5]; // name export 
const username = "Kanav";
export const age = "21";
export const city = "Zirakpur";
export const rollNo = 2111;
export default username; // default export

