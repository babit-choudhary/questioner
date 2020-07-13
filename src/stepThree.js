import React, { Component } from 'react';
import { MDBInput } from "mdbreact";

class StepThree extends Component {
    
    render() {
        return (
            <div>
                  <h5>Meine Hauptschmerzen befinden sich im Bereich</h5>
                 {/* Material unchecked */}
                 <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">Ledenwirbelsäule (Bandscheibenvorfälle, Spinalkanalstenose etc. - mit und ohne Ausstrahlung in das Gesäß oder Beine)</label>
      </div>

      {/* Default checked */}
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" />
        <label class="custom-control-label" for="defaultChecked">der Halswirbelsäule bzw. Nacken (auch Kopfschmerzen oder Migräne)</label>
      </div>
        {/* Default checked */}
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" />
        <label class="custom-control-label" for="defaultChecked">der Schultergelenke (auch Oberarmbeschwerden)</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" />
        <label class="custom-control-label" for="defaultChecked">des Ellenbogens (auch Tennisellenbogen, Golferarm, Unfälle etc.)</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" />
        <label class="custom-control-label" for="defaultChecked">der Schultergelenke (auch Oberarmbeschwerden)</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" />
        <label class="custom-control-label" for="defaultChecked">der Handgelenke und Fingergelenke (auch Carpartunnel</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" />
        <label class="custom-control-label" for="defaultChecked">Der Hüftgelenke (mit und ohne Ausstrahlung in die Beine)</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" />
        <label class="custom-control-label" for="defaultChecked">der Kniegelelnke </label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" />
        <label class="custom-control-label" for="defaultChecked">der Fuß- oder Zehengelenke (auch Fersensporn oder Achillessehnenprobleme…) </label>
      </div>


            </div>
        );
    }
}



export default StepThree;