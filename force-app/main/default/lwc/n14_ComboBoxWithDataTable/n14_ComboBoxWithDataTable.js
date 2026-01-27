import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/MasterAccountController.getAccountList';
import getRealtedContacts from '@salesforce/apex/MasterAccountController.getRealtedContacts';

//Defines the columns of the datatable
const columns = [
    { label: 'Contact Rec Id', fieldName: 'Id' },
    { label: 'Contact Name', fieldName: 'Name' },
    { label: 'Contact email', fieldName: 'Email' }
]

export default class N14_ComboBoxWithDataTable extends LightningElement {
    @track value = '';
    @track isVisible = false;
    @track optionArray = [];
    @track columns = columns;

    @track data = [];  //used for storing  contact details in datatable

    //Now store options by returning the options array
    get options() {
        return this.optionArray;
    }

    connectedCallback() {
        getAccountList()
            .then(response => {
                if (response && response.length > 0) {
                    let arr = [];
                    for (var i = 0; i < response.length; i++) {
                        arr.push({ label: response[i].Name, value: response[i].Id });
                    }
                    this.optionArray = arr;
                } else {
                    console.log('No accounts returned from Apex');
                }
            })
            .catch(error => {
                console.error('Error fetching accounts:', error);
            });
    }

    handleChangeValue(event) {
        // window.alert('I am in hanldeChangeValue metod');
        this.isVisible = true;
        this.value = event.detail.value;
        //window.alert('Account id  : ' + this.value);

        // Call apex method to get related contacts 

        getRealtedContacts({ accountId: this.value })
            .then(response => {
                if (response && response.length > 0) {
                    this.data = response;
                } else {
                    console.log('No contacts returned from Apex');
                }
            })
            .catch(error => {
                console.log('Error Fetching in Contacts : ' + error);
            })
    }
}