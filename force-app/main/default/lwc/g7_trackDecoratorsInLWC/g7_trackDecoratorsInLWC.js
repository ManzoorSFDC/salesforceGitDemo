import { LightningElement, track } from 'lwc';

export default class G7_trackDecoratorsInLWC extends LightningElement {
    @track fullName = { FirstName: "", LastName: "" };

    handleChange(event) {
        const fieldName = event.target.name;
        const value = event.target.value;

        if (fieldName === "FirstName") {
            this.fullName.FirstName = value;
        } else if (fieldName === "LastName") {
            this.fullName.LastName = value;
        }
    }
}
