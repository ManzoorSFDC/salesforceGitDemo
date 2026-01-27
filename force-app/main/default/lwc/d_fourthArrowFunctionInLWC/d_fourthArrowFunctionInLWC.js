import { LightningElement } from 'lwc';

export default class FourthArrowFunctionInLWC extends LightningElement {

    //connectedCallBack is a Lwc life cycle function which invokes automatically when component reneders in DOM
    
    connectedCallback(){
        let callMyFuntion = this.myFunction(10,2); //this keyword is mandatory
        let callMyArrowFunction = this.myArrowFunction(20,2);
       // window.alert('callMyFuntion using standard function : '+callMyFuntion);
       // window.alert('callMyarrowFunction using arrow function : '+callMyArrowFunction);
    }
    myFunction(didvidend,divisor){
        return (didvidend/divisor); // (10/2=5)

    }
    //Arrow function
    myArrowFunction = (didvidend,divisor) =>{
        return (didvidend/divisor);
    }

}
