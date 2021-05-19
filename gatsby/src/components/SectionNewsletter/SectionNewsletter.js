import React, { useRef } from 'react';
import { FaMailchimp } from '@react-icons/all-files/fa/FaMailchimp';
import { ImBasecamp } from '@react-icons/all-files/im/ImBasecamp';

import { BootsContainer } from '../BootsElements';

import FormMailchimp from '../FormMailchimp/FormMailchimp';
import FormLogin from '../FormLogin/FormLogin';
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
            <div className="tileWrapper">
              <ImBasecamp className="icon" /> Strefa Klienta
            </div>
          </button>
          <button
            className="tile newsletter"
            type="button"
            onClick={() => modalRef2.current.openModal()}
          >
            <div className="tileWrapper">
              <FaMailchimp className="icon" /> Newsletter
            </div>
          </button>
        </div>

        <Modal ref={modalRef1} title="Strefa Klienta">
          <FormLogin />
        </Modal>
        <Modal ref={modalRef2} title="Newsletter">
          <FormMailchimp />
        </Modal>
      </BootsContainer>
    </SectionNewsletterStyles>
  );
}

export default SectionNewsletter;
