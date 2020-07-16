import React, { Component } from 'react';
import {MDBInput} from "mdbreact";
//import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
import InputText from "./InputText";
/* import {MDBSelect} from "mdbreact"; */


const data = [{
        "type": "text",
        "name": "name",                    
        "classname": "text",
        "placeholder": "Enter Name",
        "label": "Name",
        "required": "required",
		"dropdown": []
    },
    {
        "type": "text",
        "name": "vorname",                  
        "classname": "text",
        "placeholder": "Enter Vorname",
		"label": "Vorname",
        "required": "required",
		"dropdown": []
    },
    {
        "type": "text",
        "name": "geburtsdatum",                  
        "classname": "text",
        "placeholder": "Enter Geburtsdatum",
		"label": "Geburtsdatum",
        "required": "required",
		"dropdown": []
    },
    {
        "type": "text",
        "name": "strasse",                  
        "classname": "text",
        "placeholder": "Enter Strasse",
		"label": "Strasse",
        "required": "required",
		"dropdown": []
    },
    {
        "type": "text",
        "name": "wohnort",                  
        "classname": "text",
        "placeholder": "Enter Wohnort",
		"label": "Wohnort",
        "required": "required",
		"dropdown": []
    },
    {
        "type": "text",
        "name": "telefon",                  
        "classname": "text",
        "placeholder": "Enter Telefon",
		"label": "Telefon",
        "required": "required",
		"dropdown": []
    },
    {
        "type": "text",
        "name": "email",                  
        "classname": "text",
        "placeholder": "Enter E-Mail",
		"label": "E-Mail",
        "required": "required",
		"dropdown": []
    } , 
	{
		
		"type": "select",
		"name": "günter_kränzlein",                  
		"classname": "text",
		"placeholder": "Sind Sie bereits Patient bei Günter Kränzlein?",
		"label": "Sind Sie bereits Patient bei Günter Kränzlein?",
		"required": "required",	
      
      "dropdown": [
       {"text":"Ich bin bereits bei Günter Kränzlein Patient oder habe mich in seiner Praxis angemeldet","value":1},
       {"text":"Ich bin kein Patient von Günter Kränzlein und interessiere mich für das Ergebnis des Fragebogens","value":2}       
      ]
    } 
 ]
 


class StepOne extends Component {
	
	
	render() {
		return (
            <div>
			 <h5>Alle Daten werden vertraulich behandelt und nicht weitergeben. Als Heilpraktiker und Physiotherapeut unterliege ich der Schweigepflicht! Bitte lesen Sie auch dazu unsere Datenschutzerklärung!</h5>
                {
                  data.map((input, i) => {
					  return <InputText key={i} params={input} />
					})
                } 
            </div>
        );
    }
}

export default StepOne;