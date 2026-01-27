import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OBJECT_NAME from '@salesforce/schema/Lead';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import COMPANY_NAME from '@salesforce/schema/Lead.Company';

export default class P16_RecordEditForm_LDS extends LightningElement {
    objectApiName = OBJECT_NAME;
    nameField = NAME_FIELD;
    emailField = EMAIL_FIELD;
    phoneField = PHONE_FIELD;
    comName = COMPANY_NAME;
    leadId='Created Lead id will display here'

    handleSuccess(event) {
        this.leadId = event.detail.id;
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Lead record created successfully!',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);

    }

    handleError(event) {
        const detail = event.detail;
        let errorMessage = 'Form submission failed. Please fix the following:';

        // Check for field-specific errors
        if (detail && detail.output && detail.output.fieldErrors) {
            const fieldErrors = detail.output.fieldErrors;
            const fieldMessages = [];

            // Loop through fields with errors
            for (const field in fieldErrors) {
                const messages = fieldErrors[field];
                messages.forEach(msg => {
                    fieldMessages.push(`${field}: ${msg.message}`);
                });
            }

            if (fieldMessages.length > 0) {
                errorMessage += '\n- ' + fieldMessages.join('\n- ');
            } else {
                errorMessage += '\n- Unknown error occurred.';
            }
        }

        const toastEvent = new ShowToastEvent({
            title: 'Error',
            message: errorMessage,
            variant: 'error',
            mode: 'sticky'
        });
        this.dispatchEvent(toastEvent);
    }
}
