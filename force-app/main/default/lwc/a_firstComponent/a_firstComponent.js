    import { LightningElement } from 'lwc';

    export default class MyFirstComponent extends LightningElement {

    // first lecture
    myTitle = "My first LWC Component";


    // second lecture : ConnectedCallback is a function which runs every time when a lwc component renders in salesforce
    connectedCallback(){

        //var variable is having global scope
         var name = "Manzoor Ali";
        if(this.myTitle){
            //window.alert("Name by Var : "+name); //works fine as var is having global level scope
        } 

        if(this.myTitle){
            var name = "manzoor ali";
        }
        //window.alert("name  by Var 1 : "+name); //works fine as var is having global scope

        //let is having functional scope
        let namelet = "Manzoor Ali";
        if(this.myTitle){
            //window.alert('Name by let : '+namelet); //works fine
        }

        if(this.myTitle){
            let n = "Manzoor Ali";
        }
        //window.alert("Name by let 1 : "+n); //doesn't work as let is having block level scope

        //Const is having block level scope
        const nameConst = "manzoor ali";

        if(this.myTitle){
           // window.alert("Name by const : "+nameConst); //works fine
        }


        if(this.myTitle){
            const na = "manzoor ali";
        }
        //window.alert("Name by Const 1 : "+na); // doesn't work

        //Mutable Assignment

        //1) var support mutable assignment
        var n1 = "Manzoor";
        n1="Ali";
        //window.alert("name : "+n1); //Ali

        //2)let support mutable assignment
        let l = "Manzoor";
        l="Ali by let";
        //window.alert("Name : "+l); //ali by let

        //3) Const does not support mutable assignment
        const c = "manzoor";
        c="Ali by const";
        //window.alert("name : "+c); //through error as it is not support mutable assignment

      
        
    }



    }