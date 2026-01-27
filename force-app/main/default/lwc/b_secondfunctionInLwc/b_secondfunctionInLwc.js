import { LightningElement } from 'lwc';

export default class FunctionInLwc extends LightningElement {
    /*
    1. A JavaScript function is a block of code designed to perform a particular task.
    2. A JavaScript function is executed when "someone" invokes it (calls it).
    */

    handleClick() {
        let a = 30;
        let b = 20;
        let c = a + b;

        window.alert("Sum of " +a+ " and " +b+  " is : " + c);
        console.log('Value Of Sum : ' +c);
        console.log('Button clicked successfully');
        window.alert("Button clicked successfully");
        
    }
}
