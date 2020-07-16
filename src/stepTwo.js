import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBFormInline } from "mdbreact";
import InputText from "./InputText";

const data = [{
  "type": "number",
  "required": true,
  "name": "Körpergröße",
  "dropdown": [],
  "placeholder": "Körpergröße in Meter (z.B. 1,7 m)",
  "label": "Körpergröße in Meter (z.B. 1,7 m)",
  "classname": "text"
}, {
  "type": "number",
  "required": true,
  "name": "Körpergewicht",
  "dropdown": [],
  "placeholder": "Körpergewicht",
  "label": "Körpergewicht",
  "classname": "text"
}, {
  "type": "text",
  "required": true,
  "name": "Alter",
  "dropdown": [],
  "placeholder": "Alter (in Jahren)",
  "label": "Alter (in Jahren)",
  "classname": "text"

}, {
  "type": "radio",
  "required": true,
  "name": "Geschlecht",
  "dropdown": [{ "value":"M","label": "Männlich", "classname": "mr-5" }, {"value":"W","label": "Weiblich", "classname": "mr-5" }],
  "placeholder": "Geschlecht (W/M)",
  "label": "Geschlecht (W/M)",
  "classname": "text"
}, {
  "type": "text",
  "required": false,
  "name": "Blutdruck",
  "dropdown": [],
  "placeholder": "Blutdruck (optional)",
  "label": "Blutdruck (optional)",
  "classname": "text"
}, {
  "type": "text",
  "required": false,
  "name": "Ruhepuls",
  "dropdown": [],
  "placeholder": "Ruhepuls (optional)",
  "label": "Ruhepuls (optional)",
  "classname": "text"
}];

class StepTwo extends Component {

  render() {
    return (
      <div>
        <h5>Allgemeine Daten zur Körperkonstitution</h5>
        {
          data.map((input, i) => {
            return <InputText key={i} params={input} />
          })
        }
      </div>
    );
  }
}

export default StepTwo;