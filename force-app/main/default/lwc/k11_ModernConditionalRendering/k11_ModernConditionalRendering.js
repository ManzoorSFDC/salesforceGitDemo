import { LightningElement, track } from 'lwc';

export default class K11_ModernConditionalRendering extends LightningElement {
    @track dynamicButtonLabel = 'Show';
    @track validator1 = false;
    @track validator2 = false;
    @track validator3 = false;

    @track propertyfirst = 'Button1 data';
    @track propertySecond = 'Button2 data';
    @track propertyThird = 'Button3 data';

    handleClick() {
        if (this.dynamicButtonLabel === 'Show' && !this.validator1) {
            this.validator1 = true;
            this.dynamicButtonLabel = 'Button 1';
        } else if (this.dynamicButtonLabel === 'Button 1' && !this.validator2) {
            this.validator1 = false;
            this.validator2 = true;
            this.dynamicButtonLabel = 'Button 2';
        } else if (this.dynamicButtonLabel === 'Button 2' && !this.validator3) {
            this.validator1 = false;
            this.validator2 = false;
            this.validator3 = true;
            this.dynamicButtonLabel = 'Button 3';
        } else {
            this.validator1 = false;
            this.validator2 = false;
            this.validator3 = false;
            this.dynamicButtonLabel = 'Show';
        }
    }
}