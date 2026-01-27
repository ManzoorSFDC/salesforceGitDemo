import { LightningElement ,track } from 'lwc';
import fetchLeadData from '@salesforce/apex/ImperativeDemoClass.fetchLeadData';
const columns =[
        {label : "Lead Id" , fieldName : "Id"},
        {label : "Lead Name", fieldName : "Name"},
        {label : "Lead Phone", fieldName : "Phone"},
        {label : "Lead Email", fieldName : "Email"}
        
]
export default class I9_ImperativeMethodDemo extends LightningElement {
    @track columns = columns;
    @track data = [];
    connectedCallback(){
        fetchLeadData().then(result => {
            this.data = result;
        }).catch(error => {
            console.log(error);
        })

    }
}