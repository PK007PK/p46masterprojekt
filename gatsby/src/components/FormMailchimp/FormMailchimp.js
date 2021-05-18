import Mailchimp from 'react-mailchimp-form';
import React from 'react';
import { FormMailchimpStyles } from './FormMailchimpStyles';

export default function FormMailchimp() {
  return (
    <FormMailchimpStyles>
      <h3 className="info">
        Bądź na bieżąco z informacjami o naszej ofercie i możliwościach
        aplikowania o środki
      </h3>
      <Mailchimp
        action="https://masterprojekt.us1.list-manage.com/subscribe/post?u=782afe1fa00f8b7841829b048&amp;id=3da9210cca"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
            autocomplete: 'off',
          },
        ]}
        messages={{
          sending: 'Wysyłanie...',
          success: 'Dziękujemy za subskrypcję!',
          error: 'Przepraszamy, błąd serwera.',
          empty: 'Musisz podać adres email.',
          duplicate: 'Too many subscribe attempts for this email address',
          button: 'wyślij',
        }}
        // Add a personalized class
        className="form"
      />
    </FormMailchimpStyles>
  );
}
