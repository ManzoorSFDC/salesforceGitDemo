import { LightningElement, wire } from 'lwc';
import getListAccounts from '@salesforce/apex/forEachLoopDemo.getListAccounts';

export default class L12_ForEachLoopLWC extends LightningElement {
    accounts = [];
    error;

    @wire(getListAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = [];
        }
    }
}
