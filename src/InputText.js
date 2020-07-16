import React, { Component } from 'react';
//import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
import { MDBInput, MDBContainer, MDBFormInline } from "mdbreact";

class InputText extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        radio: ''
      };
    
    //   onClick = nr => () => {
    //     this.setState({
    //       radio: nr
    //     });
    //   };


    onChange = (name, value) => {
        this.setState({[name]: value});
      }
    

    render() {
        const { type, name, classname, placeholder, label, required, dropdown } = this.props.params;

        switch (type) {
            case 'select':
                return (
                  
                    <div>
                        <select className="browser-default custom-select"  label={label} name={name}
                        type={type}
                        required={required}
                        onChange={this.onChange}
                        >
                        <option>Choose your option</option>
                        {dropdown.map((input, i) => {
                        return  <option value={input.value}>{input.text}</option>
                        })}
                        
                        </select>
                    </div>


                );
                break;
            case 'radio':
                return (
                    <MDBFormInline label={label}>
                        <label class="" data-error="" className="form-control-plaintext" data-success="" id="" aria-labelledby="">{label}</label><br />
                        {dropdown.map((input, i) => {
                            return  <MDBInput
                                gap
                                onClick={this.onClick(input.value)}
                                checked={this.state.radio === input.value ? true : false}
                                label={input.label}
                                type='radio'
                                id={`radio${i}`}
                                onChange={this.onChange}
                                containerClass={input.classname}
                            />
                        })}

                    </MDBFormInline>


                );
                break;

                case 'checkbox':
                return (
                <div>   
                {dropdown.map((input, i) => {
                   return  <div class="custom-control custom-checkbox">
                    <input type="checkbox" name={name} class="custom-control-input" value={input.value} onChange={this.onChange} />
                    <label class="custom-control-label" for="defaultUnchecked">{input.label}</label>
                    </div>
                })}
                </div> 
                );
                break;

                

            default:
                return (
                    <MDBInput label={label} name={name}
                        type={type}
                        required={required}
                        onChange={this.onChange}
                        placeholder={placeholder} />
                );
                break;
        }
    }
}

export default InputText;