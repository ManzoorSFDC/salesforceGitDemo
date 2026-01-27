import { LightningElement } from 'lwc';
import OBJECT_NAME from '@salesforce/schema/Lead';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Q17_RecordForm_LDS extends LightningElement {
    objectApiName = OBJECT_NAME;
    recordId = '00QJ3000007yoYVMAY';
    fields = [NAME_FIELD, PHONE_FIELD, EMAIL_FIELD];

    handleSubmit(event) {
        console.log('Form is submitting:', event.detail);
    }

    handleSuccess(event) {
        this.dispatchEvent(new ShowToastEvent({
            title: 'Success',
            message: 'Record updated successfully!',
            variant: 'success'
        }));
    }

    handleError(event) {
        console.error('Error updating record:', event.detail);
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error',
            message: 'There was a problem updating the record.',
            variant: 'error',
            mode: 'sticky'
        }));
    }
}
