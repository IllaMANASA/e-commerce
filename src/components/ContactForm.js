// // ContactForm.js
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import styled from 'styled-components';

// const FormContainer = styled.form`
//   max-width: 400px;
//   margin: 0 auto;
// `;

// const Label = styled.label`
//   margin-bottom: 0.5rem;
//   display: block;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   font-size: 1rem;
//   margin-bottom: 1rem;
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 0.5rem;
//   font-size: 1rem;
//   margin-bottom: 1rem;
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   padding: 0.75rem 1.5rem;
//   cursor: pointer;
//   font-size: 1rem;
// `;

// const ContactForm = () => {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     // Handle form submission logic here
//     console.log(data);
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit(onSubmit)}>
//       <Label>Name</Label>
//       <Input type="text" name="name" ref={register({ required: true })} />
//       {errors.name && <span>Name is required</span>}

//       <Label>Email</Label>
//       <Input type="email" name="email" ref={register({ required: true })} />
//       {errors.email && <span>Email is required</span>}

//       <Label>Message</Label>
//       <TextArea name="message" rows="4" ref={register({ required: true })}></TextArea>
//       {errors.message && <span>Message is required</span>}

//       <Button type="submit">Submit</Button>
//     </FormContainer>
//   );
// };

// export default ContactForm;
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: block;
`;

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">Name</Label>
      <Input 
        type="text" 
        id="name"
        {...register("name", { required: "Name is required" })}
        autoComplete="name"
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <Label htmlFor="email">Email</Label>
      <Input 
        type="email" 
        id="email"
        {...register("email", { required: "Email is required" })}
        autoComplete="email"
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <Label htmlFor="message">Message</Label>
      <TextArea 
        id="message"
        rows="4" 
        {...register("message", { required: "Message is required" })}
        autoComplete="off"
      ></TextArea>
      {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}

      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default ContactForm;
