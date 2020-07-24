import React from 'react';

import Form from './components/form/form-component'
import PageHeader from './components/page-header/page-header.component'


function Contact() {
  return (
    <div className="page-wrapper contact">
      <PageHeader title="Contact"/>
      <Form />
    </div>
  );
}

export default Contact;
