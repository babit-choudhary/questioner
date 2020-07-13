import React, { Component } from 'react';
import {MDBInput} from "mdbreact";
import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
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
    }/* , 
	{
		
		"type": "select",
		"name": "email",                  
		"classname": "text",
		"placeholder": "Enter E-Mail",
		"label": "E-Mail",
		"required": "required",	
      
      "dropdownArr": [
        "Ich bin bereits bei Günter Kränzlein Patient oder habe mich in seiner Praxis angemeldet",
        "Ich bin kein Patient von Günter Kränzlein und interessiere mich für das Ergebnis des Fragebogens"
       
      ]
    } */
 ]
 
class InputText extends React.Component {

  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue() {
    console.log('');
  }

  render() {
   const { type, name, classname, placeholder, label, required, dropdownArr } = this.props.params;
   
   	if(type == 'select'){
		return (
			<MDBInput
          options={dropdownArr}
          label={label} name={name}
					type={type}
					required={required}
        />
				
			
		);
	}else{
		return (
			<MDBInput label={label} name={name}
					type={type}
					required={required}
					placeholder={placeholder}s  />
		);
	
	}
  }
}

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