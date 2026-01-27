import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ThirdFunctionCalling extends LightningElement {
    myName = "Toast";
    //Ist Function
    handleClick(){
        //here we are calling another function from this function
        //this.showToast();

        //same process is to called perameterized function as well
        this.showToast(this.myName);
    }

    //2nd Function
    showToast(FunctionArgument){
        const event = new ShowToastEvent({
           // title : "Show toast demo",
           title : FunctionArgument,
            message : "This is the example of toast message",
            variant : "success", 
            /* there are total three variant 
            1. success - green color's toast
            2. warning - orange
            3. Error - red
            */
        })
        this.dispatchEvent(event);
        
    }
}

