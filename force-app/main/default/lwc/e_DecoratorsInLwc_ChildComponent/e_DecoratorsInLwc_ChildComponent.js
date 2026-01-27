import { LightningElement, api } from 'lwc';

export default class E_DecoratorsInLwc_ChildComponent extends LightningElement {
    // Make property public so it can be accessed in the parent component
    @api propertyName = "Manzoor By Child Card";

    // Declare a function and make it public so it can be called from the parent component
    @api
    handleChangeValue() {
        window.alert('Child function is called');
        this.propertyName = "Manzoor by parent comp on button click";
        window.alert('PropertyName while calling from parent component :  '+this.propertyName);
    }
}
