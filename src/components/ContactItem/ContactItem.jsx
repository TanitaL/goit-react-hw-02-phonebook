import css from "./ContactItem.module.css";

const ContactItem = ({name, id, number}) => {
    return (<li id={id} className={css.contactsItem}>
        <p className={css.contactsName}>{name}:</p> 
        <p className={css.contactsNumber}>{number}</p> 
    </li>)
}
 
export default ContactItem;