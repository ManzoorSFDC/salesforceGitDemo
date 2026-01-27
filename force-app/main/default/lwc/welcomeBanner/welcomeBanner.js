import { LightningElement, api } from 'lwc';

export default class WelcomeBanner extends LightningElement {

    //Private Variables
    myName = 'Manzoor Ali';
    myListOfBooks = [];
    myPersonalDetails ={};

    //Public variables
    @api myFavColor = 'Red';   //can be access in other components as it is decorated by publc decorator
    @api myFavFood = 'Biryani'; 
    mypersonality = {
        myname : 'Manzoor Ali',
        myAge:28,
        myHobbies : ['Reading', 'Coding', 'Travelling']
    }
    
}
