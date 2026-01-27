import { LightningElement, track } from 'lwc';
import getLeadDataComboBox from '@salesforce/apex/LeadController.getLeadDataComboBox';

export default class M13_ComboBoxIn_LWC extends LightningElement {
    @track value = '';
    @track isVisible = false;
    @track accList = [];

    //This is dummy Data to get reference in Combo-box
    // options = [
    //     { label: 'Account A', value: 'accountA Value' },
    //     { label: 'Account B', value: 'accountB Value' },
    //     { label: 'Account C', value: 'accountC Value' }
    // ];

    // Computed property for combobox options
    get options() {
        return this.accList;
    }

    connectedCallback() {
        getLeadDataComboBox()
            .then(result => {
                console.log('Response size: ' + result.length);
                let arr = [];

                for (let i = 0; i < result.length; i++) {
                    arr.push({
                        label: result[i].Name, 
                        value: result[i].Id
                    });
                }

                this.accList = arr;
            })
            .catch(error => {
                console.error('Error fetching lead data:', error);
            });
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.isVisible = true;
    }
}
