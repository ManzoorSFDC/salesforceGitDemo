import { LightningElement } from 'lwc';

export default class F_ParentComponentOfFifth extends LightningElement {
    handleClick(){
        window.alert('parent function is called');
        this.template.querySelector("c-e_-decorators-in-lwc_-child-component").handleChangeValue();
    }
}