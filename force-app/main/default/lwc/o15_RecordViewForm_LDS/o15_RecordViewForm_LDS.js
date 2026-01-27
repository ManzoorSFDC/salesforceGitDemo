import { LightningElement,api } from 'lwc';
//import LEAD_OBJECT from '@salesforce/schema/Lead';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import Email_FIELD from '@salesforce/schema/Lead.Email';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
export default class O15_RecordViewForm_LDS extends LightningElement {
    //objectApiName = LEAD_OBJECT;
    NameField = NAME_FIELD;
    emailField = Email_FIELD;
    phoneField = PHONE_FIELD;
    @api recordId ;
    // when you decorate recordId with api decorator and put this component on record page then it fetched the recordID automatically for that record 
    @api objectApiName; //it is also fetch object api automatically 
}