import React, { Component } from 'react';
import { MDBInput } from "mdbreact";
import InputText from "./InputText";

const data = [{
    "required": false,
    "name": "Operation",
    "type": "text",
    "dropdown": [],
    "placeholder": "Operation",
    "label": "Operation",
    "classname": "text"
}, {
    "required": false,
    "name": "Grund",
    "type": "text",
    "dropdown": [],
    "placeholder": "Grund",
    "label": "Grund",
    "classname": "text"

}, {
    "required": false,
    "name": "Zeitpunkt",
    "type": "text",
    "dropdown": [],
    "placeholder": "Zeitpunkt",
    "label": "Zeitpunkt",
    "classname": "text"
}];
class StepSix extends Component {
    render() {
        return (
            <div>
                <h5>Operationen </h5>
                <label class="" data-error="" className="form-control-plaintext" data-success="" id="" aria-labelledby="">Ich hatte folgende Operation:</label><br />
                <label class="" data-error="" className="form-control-plaintext" data-success="" id="" aria-labelledby="">bitte beachreiben Sie um welche OP es sich gehandelt hat und den Grund und Zeitpunkt der Operation </label><br />
                {
                    data.map((input, i) => {
                        return <InputText key={i} params={input} />
                    })
                }

            </div>
        );
    }
}

export default StepSix;