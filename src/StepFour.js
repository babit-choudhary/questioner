import React, { Component } from 'react';

import InputText from "./InputText";

const data = [{
    "required": true,
    "name": "Durchfällen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Durchfällen zu tun",
    "label": "Ich habe mit Durchfällen zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Schluckstörungen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Schluckstörungen zu tun (Dysphagie)",
    "label": "Ich habe mit Schluckstörungen zu tun (Dysphagie)",
    "classname": "text"
},
{
    "required": true,
    "name": "Atembeschwerden",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Atembeschwerden (Atemnot, Kurzatmigkeit…)zu tun",
    "label": "Ich habe mit Atembeschwerden (Atemnot, Kurzatmigkeit…)zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "wieder",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe immer wieder mit Erbrehen zu tun",
    "label": "Ich habe immer wieder mit Erbrehen zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Hautauschlägen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Hautauschlägen zu tun (Exantheme)",
    "label": "Ich habe mit Hautauschlägen zu tun (Exantheme)",
    "classname": "text"
},
{
    "required": true,
    "name": "Schmerzen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Schmerzen an Armen oder Beinen zu tun",
    "label": "Ich habe mit Schmerzen an Armen oder Beinen zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Gelenkschmerzen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Gelenkschmerzen zu tun",
    "label": "Ich habe mit Gelenkschmerzen zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Körpergewicht",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe in letzter Zeit an Körpergewicht verloren",
    "label": "Ich habe in letzter Zeit an Körpergewicht verloren",
    "classname": "text"
},
{
    "required": true,
    "name": "Gewicht_zugenommen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe in letzter zeit an Gewicht zugenommen",
    "label": "Ich habe in letzter zeit an Gewicht zugenommen",
    "classname": "text"
},
{
    "required": true,
    "name": "Hörstörungen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Hörstörungen zu tun",
    "label": "Ich habe mit Hörstörungen zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "harninkontinez",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich leide unter harninkontinez (Verlust von Urin beim Husten; Niesen etc,)",
    "label": "Ich leide unter harninkontinez (Verlust von Urin beim Husten; Niesen etc,)",
    "classname": "text"
},
{
    "required": true,
    "name": "Heißerkeit",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Heißerkeit zu tun",
    "label": "Ich habe mit Heißerkeit zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Bauchschmerzen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe öfters mit Bauchschmerzen zu tun",
    "label": "Ich habe öfters mit Bauchschmerzen zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Herzrhythmusströungen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Herzrhythmusströungen zu tun",
    "label": "Ich habe mit Herzrhythmusströungen zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Herzbeschwerden",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Herzbeschwerden zu tun",
    "label": "Ich habe mit Herzbeschwerden zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Sehproblemen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Sehproblemen zu tun",
    "label": "Ich habe mit Sehproblemen zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Medikamente",
    "type": "text",
    "dropdown": [],
    "placeholder": "Mein Blutdruck ist erhöht und ich nehme Medikamente",
    "label": "Mein Blutdruck ist erhöht und ich nehme Medikamente",
    "classname": "text"
},
{
    "required": true,
    "name": "Thoraxschmerzen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe mit Thoraxschmerzen (Brustkorb) zu tun",
    "label": "Ich habe mit Thoraxschmerzen (Brustkorb) zu tun",
    "classname": "text"
},
{
    "required": true,
    "name": "Schlafstörungen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich leide an Schlafstörungen",
    "label": "Ich leide an Schlafstörungen",
    "classname": "text"
},
{
    "required": true,
    "name": "Kopfschmerzen",
    "type": "text",
    "dropdown": [],
    "placeholder": "Ich habe oft mit Kopfschmerzen zu tun",
    "label": "Ich habe oft mit Kopfschmerzen zu tun",
    "classname": "text"
},
];


class StepFour extends Component {
    render() {
        return (
            <div>
                <h5>Erkrankungen bzw. Symptome meines Körpers  </h5>
                {
                    data.map((input, i) => {
                        return <InputText key={i} params={input} />
                    })
                }

            </div>
        );
    }
}

export default StepFour;