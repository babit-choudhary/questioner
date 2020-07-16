import React, { Component } from 'react';
import InputText from "./InputText";

    const data = [
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe mit Durchfällen zu tun",
          "label": "Meine Symptome traten plötzlich auf",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "die Symptome ändern ihre Intensität",
          "label": "die Symptome ändern ihre Intensität",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Symptome sind heftig und akut",
          "label": "Meine Symptome sind heftig und akut",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Symptome verstärken sich bei Zugluft",
          "label": "Meine Symptome verstärken sich bei Zugluft",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Symptome  verstärken sich bei kaltem Wetter oder wenn ich Kaltes esse",
          "label": "Meine Symptome  verstärken sich bei kaltem Wetter oder wenn ich Kaltes esse",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Symptome verstärken sich durch Kälte und verbessern sich durch Wärme",
          "label": "Meine Symptome verstärken sich durch Kälte und verbessern sich durch Wärme",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine Abneigung gegen Kälte",
          "label": "Ich habe eine Abneigung gegen Kälte",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine weiß belegte Ziunge",
          "label": "Ich habe eine weiß belegte Ziunge",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine Gelenk, das geschwollen ist oder ich habe Wasser dicke Beine oder Knöchel",
          "label": "Ich habe eine Gelenk, das geschwollen ist oder ich habe Wasser dicke Beine oder Knöchel",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine taubes Gefühl in Beinen, Füßen, Nacken, Händen etc.",
          "label": "Ich habe eine taubes Gefühl in Beinen, Füßen, Nacken, Händen etc.",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine Abneigung gegen Nässe    ",
          "label": "Ich habe eine Abneigung gegen Nässe    ",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine allgemeines Hitzegefühl oder im Knie oder anderen Gelenken",
          "label": "Ich habe eine allgemeines Hitzegefühl oder im Knie oder anderen Gelenken",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine Abneigung gegen Wärme",
          "label": "Ich habe eine Abneigung gegen Wärme",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich fühle mich unbeweglich oder habe in einenm oder mehreren Gelenken ein Bewegungseinschränkung",
          "label": "Ich fühle mich unbeweglich oder habe in einenm oder mehreren Gelenken ein Bewegungseinschränkung",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Zungen körper ist rot und ich habe einen dicken gelben Zungenbelag",
          "label": "Meine Zungen körper ist rot und ich habe einen dicken gelben Zungenbelag",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Bei meinen Schmerzen handelt es sich um einen ziehenden Schmerz",
          "label": "Bei meinen Schmerzen handelt es sich um einen ziehenden Schmerz",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Bei meinen Schmerzen handelt es sich um einen punktuellen Schmerz",
          "label": "Bei meinen Schmerzen handelt es sich um einen punktuellen Schmerz",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Schmerzen verstärken sich nachts",
          "label": "Meine Schmerzen verstärken sich nachts",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Schmerzen verbessern sich durch Massage, Berührung oder Kontakt",
          "label": "Meine Schmerzen verbessern sich durch Massage, Berührung oder Kontakt",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Schmerzhen sind schwach, dumpf oder drückend",
          "label": "Meine Schmerzhen sind schwach, dumpf oder drückend",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Schmerzen nehmen durch Belastung zu",
          "label": "Meine Schmerzen nehmen durch Belastung zu",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe ein allgemeines Kältegefühl oder kalte Füße",
          "label": "Ich habe ein allgemeines Kältegefühl oder kalte Füße",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine Abnweigung gegen Bewegung oder Stress",
          "label": "Ich habe eine Abnweigung gegen Bewegung oder Stress",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich fühle mich insgesamt schwach",
          "label": "Ich fühle mich insgesamt schwach",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Symptome verstärken sich durch Arbeit oder Belastung",
          "label": "Meine Symptome verstärken sich durch Arbeit oder Belastung",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Symptome verbessern sich durch Riuhe , Wärme oder Massage",
          "label": "Meine Symptome verbessern sich durch Riuhe , Wärme oder Massage",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Meine Beschwerden sind stark und einseitig",
          "label": "Meine Beschwerden sind stark und einseitig",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe ein blasses, helles Gesicht",
          "label": "Ich habe ein blasses, helles Gesicht",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine schwache Atmung oder Stimme",
          "label": "Ich habe eine schwache Atmung oder Stimme",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe Taubheit oder ein Zittern der Glieder",
          "label": "Ich habe Taubheit oder ein Zittern der Glieder",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe mit Schwindel zu tun",
          "label": "Ich habe mit Schwindel zu tun",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe mit Spannung und Schmerzen zu tun, die immer wieder wo anderes auftreten",
          "label": "Ich habe mit Spannung und Schmerzen zu tun, die immer wieder wo anderes auftreten",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich habe eine relativ dunkel Resichtsfarbe",
          "label": "Ich habe eine relativ dunkel Resichtsfarbe",
          "classname": "text"
        },
        {
          "required": true,
          "name": "Durchfällen",
          "type": "text",
          "dropdown": [],
          "placeholder": "Ich haplaceholdert Durchfällen zu tun",
          "label": "Ich haplaceholdert Durchfällen zu tun",
          "classname": "text"
        }
      ];
class StepFive extends Component {
    render() {
        return (
            <div>
                <h5>Allgemeine Frage zu den Symptomen meines Körpers </h5>
                {
                    data.map((input, i) => {
                        return <InputText key={i} params={input} />
                    })
                }
            </div>
        );
    }
}

export default StepFive;