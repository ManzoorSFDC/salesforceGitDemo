import { LightningElement, track } from 'lwc';

export default class J10_ConditionalOperatorsInLwc extends LightningElement {
    @track onClickButtonLabel = 'Show';
    @track dataVisible = false;
    callProperty = 'Data Shown';
    handleClick() {
        this.dataVisible = !this.dataVisible;
        this.onClickButtonLabel = this.onClickButtonLabel === 'Show' ? 'Hide' : 'Show';

    }
}