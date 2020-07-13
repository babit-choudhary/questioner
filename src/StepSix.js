import React, { Component } from 'react';
import { MDBInput } from "mdbreact";


class StepSix extends Component {
    render() {
        return (
            <div>
                <h5>Operationen </h5>
                <label class="" data-error="" className="form-control-plaintext" data-success="" id="" aria-labelledby="">Ich hatte folgende Operation:</label><br/>
                <label class="" data-error="" className="form-control-plaintext" data-success="" id="" aria-labelledby="">bitte beachreiben Sie um welche OP es sich gehandelt hat und den Grund und Zeitpunkt der Operation </label><br/>
                             
                <MDBInput label="Operation " />             
                <MDBInput label="Grund" />             
                <MDBInput label="Zeitpunkt" />            
               
            </div>
        );
    }
}

export default StepSix;