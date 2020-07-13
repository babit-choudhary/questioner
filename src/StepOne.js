import React, { Component } from 'react';
import { MDBInput } from "mdbreact";


class StepOne extends Component {
    render() {
        return (
            <div>
                <h5>Alle Daten werden vertraulich behandelt und nicht weitergeben. Als Heilpraktiker und Physiotherapeut unterliege ich der Schweigepflicht! Bitte lesen Sie auch dazu unsere Datenschutzerklärung!</h5>
                <MDBInput label="Name" />
                <MDBInput label="Vorname" />
                <MDBInput label="Geburtsdatum" />
                <MDBInput label="Strasse" />
                <MDBInput label="Wohnort" />
                <MDBInput label="Telefon" />
                <MDBInput label="E-Mail" />
                <MDBInput label="Wohnort" />
                <select className="Sind Sie bereits Patient bei Günter Kränzlein?">
                    <option value="1">Ich bin bereits bei Günter Kränzlein Patient oder habe mich in seiner Praxis angemeldet</option>
                    <option value="2">Ich bin kein Patient von Günter Kränzlein und interessiere mich für das Ergebnis des Fragebogens</option>
                </select>

            </div>
        );
    }
}

export default StepOne;