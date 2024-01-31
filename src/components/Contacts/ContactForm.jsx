import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectContacts } from 'redux/contacts/selectors';
import { addContactThunk } from 'redux/contacts/operations';

import { Form, Label, Input, Button } from './ContactsEl.styled';

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const hasNameDuplicate = contact => {
    return contacts.some(({ name }) => name === contact);
  };

  const hasNamberDuplicate = contact => {
    return contacts.some(({ number }) => number === contact);
  };

  const onSubmit = contact => {
    if (Array.isArray(contacts)) {
      if (hasNameDuplicate(contact.name)) {
        toast.info(` ${contact.name} is already in contacts`);
        return;
      }

      if (hasNamberDuplicate(contact.number)) {
        toast.info(` Number ${contact.number} is already in contacts`);
        return;
      }
    }
    try {
      dispatch(addContactThunk(contact));
      toast.success('Contact added successfully');
    } catch (error) {
      toast.error(`Something went wrong.`);
    }

    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name
          <Input
            {...register('name', { required: true })}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            {...register('number', { required: true })}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
      {/* <ToastContainer /> */}
    </>
  );
};
