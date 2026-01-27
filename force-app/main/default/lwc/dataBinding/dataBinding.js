import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    name = 'Manzoor Ali';
    timeStamps = new Date().toLocaleTimeString();

    typedText ;
    handleChange(event){
        this.typedText = event.target.value;
    }
}