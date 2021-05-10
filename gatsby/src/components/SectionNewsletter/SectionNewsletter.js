import React, { useRef } from 'react';
import { BootsColumn, BootsContainer, BootsRow } from '../BootsElements';
import Button from '../Button';
import { FormMailchimp } from '../FormMailchimp/FormMailchimp';
import Modal from '../Modal/Modal';
import { SectionNewsletterStyles } from './SectionNewsletterStyles';

function SectionNewsletter() {
  const modalRef1 = useRef();
  const modalRef2 = useRef();
  return (
    <SectionNewsletterStyles>
      <BootsContainer>
        <div className="grid-wrapper">
          <button
            className="tile login"
            type="button"
            onClick={() => modalRef1.current.openModal()}
          >
            Strefa Klienta
          </button>
          <button
            className="tile newsletter"
            type="button"
            onClick={() => modalRef2.current.openModal()}
          >
            Newsletter
          </button>
        </div>

        <Modal ref={modalRef1} title="Strefa Klienta">
          <h3>Modal title 1</h3>
        </Modal>
        <Modal ref={modalRef2} title="Newsletter">
          <FormMailchimp />
        </Modal>
      </BootsContainer>
    </SectionNewsletterStyles>
  );
}

export default SectionNewsletter;
