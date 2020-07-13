import React, { Component } from 'react';
import { MDBInput } from "mdbreact";


class StepFour extends Component {
    render() {
        return (
            <div>
                <h5>Erkrankungen bzw. Symptome meines Körpers  </h5>
                <MDBInput label="Ich habe mit Durchfällen zu tun" />
                <MDBInput label="Ich habe mit Schluckstörungen zu tun (Dysphagie)" />
                <MDBInput label="Ich habe mit Atembeschwerden (Atemnot, Kurzatmigkeit…)zu tun" />
                <MDBInput label="Ich habe immer wieder mit Erbrehen zu tun" />
                <MDBInput label="Ich habe mit Hautauschlägen zu tun (Exantheme)" />
                <MDBInput label="Ich habe mit Schmerzen an Armen oder Beinen zu tun" />
                <MDBInput label="Ich habe mit Gelenkschmerzen zu tun" />
                <MDBInput label="Ich habe in letzter Zeit an Körpergewicht verloren" />
                <MDBInput label="Ich habe in letzter zeit an Gewicht zugenommen" />
                <MDBInput label="Ich habe mit Hörstörungen zu tun" />
                <MDBInput label="Ich leide unter harninkontinez (Verlust von Urin beim Husten; Niesen etc,)" />
                <MDBInput label="Ich habe mit Heißerkeit zu tun" />
                <MDBInput label="Ich habe öfters mit Bauchschmerzen zu tun" />
                <MDBInput label="Ich habe mit Herzrhythmusströungen zu tun" />
                <MDBInput label="Ich habe mit Herzbeschwerden zu tun " />
                <MDBInput label="Ich habe mit Sehproblemen zu tun" />
                <MDBInput label="Mein Blutdruck ist erhöht und ich nehme Medikamente" />
                <MDBInput label="Ich habe mit Thoraxschmerzen (Brustkorb) zu tun" />
                <MDBInput label="Ich leide an Schlafstörungen" />
                <MDBInput label="Ich habe oft mit Kopfschmerzen zu tun" />              

            </div>
        );
    }
}

export default StepFour;