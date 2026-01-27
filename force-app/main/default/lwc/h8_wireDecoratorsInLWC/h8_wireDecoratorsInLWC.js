// Importing necessary modules from LWC
import { LightningElement, track, wire } from 'lwc';

// Importing the Apex method to fetch leads
import getLeadList from '@salesforce/apex/wireDemoBySalesforceNoob.getLeadList';

// Define the columns for the lightning-datatable
const columns = [
    { label: 'Name', fieldName: 'Name' },               // Display Lead Name
    { label: 'Lead Record Id', fieldName: 'Id' }        // Display Lead Id
];

export default class H8_wireDecoratorsInLWC extends LightningElement {
    // Assign columns to be used in the datatable
  @track columns = columns;

    // This property will hold the lead data returned from Apex
    @track data = [];

    // Wire the Apex method to fetch the lead data
    // This runs automatically when the component loads
    @wire(getLeadList)
    wiredLeads({ data, error }) {
        if (data) {
            // If data is received, assign it to the 'data' property
            this.data = data;
        } else if (error) {
            // If there is an error, log it to the console
            console.error('Error occurred while fetching data: ', error);
        }else{
            //window.alert('No lead data found to be returned ');
            console.log('No lead data found to be returned ');
        }
    }
}
