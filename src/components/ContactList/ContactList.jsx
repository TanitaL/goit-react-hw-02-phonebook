import ContactItem from "components/ContactItem/ContactItem";

const ContactList = ({ contacts}) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => { 
                return (
                    <ContactItem
                        key={id}
                        name={name}
                        number={number}
                        id={id} />
                    )
            }) }
        </ul>
    )
};

export default ContactList;