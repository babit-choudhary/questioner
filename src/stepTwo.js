import React, { Component } from 'react';
import { MDBInput,MDBContainer,MDBFormInline } from "mdbreact";

class StepTwo extends Component {
    state = {
        radio: ''
      };
    
      onClick = nr => () => {
        this.setState({
          radio: nr
        });
      };

      
    render() {
        return (
            <div>
                <h5>Allgemeine Daten zur Körperkonstitution</h5>
                <MDBInput label="Körpergröße in Meter (z.B. 1,7 m):" type="number" min="1" max="7" />
                <MDBInput label="Körpergewicht" type="number"/>
                <MDBInput label="Alter (in Jahren)"/>
                <MDBFormInline label="Geschlecht (W/M)">
                <label class="" data-error="" className="form-control-plaintext" data-success="" id="" aria-labelledby="">Körpergewicht</label><br/>
                <MDBInput
                    gap
                    onClick={this.onClick("M")}
                    checked={this.state.radio === "M" ? true : false}
                    label='Männlich'
                    type='radio'
                    id='radio1'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(2)}
                    checked={this.state.radio === "W" ? true : false}
                    label='Weiblich'
                    type='radio'
                    id='radio2'
                    containerClass='mr-5'
                    />

               </MDBFormInline>
                <MDBInput label="Blutdruck (optional)"/>
                <MDBInput label="Ruhepuls (optional)"/>                
            </div>
        );
    }
}

export default StepTwo;