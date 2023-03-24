import { nanoid } from "nanoid";
import { Component } from "react";

class ContactForm extends Component {
    state = {
        name: "",
        id: "",
        number: "",
    }

    handleChange = evt => { 
        const { name, value, number } = evt.currentTarget;
        this.setState({[name]: value, [number]: value})
    }
    onFormSubmit = evt => {
        evt.preventDefault();
        const id = nanoid();
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        this.props.onSubmit({ name, id, number });
        this.resetForm();
    };

    resetForm = () => {
        this.setState({ name: "", id: "", number: "" })
    };
    
    render() { 
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor={this.id}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label htmlFor={this.id}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                    
                    <button type="submit">Add contact</button>
            </form>
        )
    }   
}

export default ContactForm