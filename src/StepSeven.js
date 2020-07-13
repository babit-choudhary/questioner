import React, { Component } from 'react';
import { MDBInput } from "mdbreact";


class StepSeven extends Component {
    render() {
        return (
            <div>
                <h5>Medikamente und Nahrungsergänzungen  </h5>
                <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">Ich  nehme Mediamente oder Nahrungsergänzungsmittel ein</label>
      </div>          
               
            </div>
        );
    }
}

export default StepSeven;