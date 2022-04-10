import React from 'react'

import TemplateForm from '../../../resources/templates/phoneTemplate';
import PPForm from '../../../resources/components/PPForm'

export default function index() {
  return (
    <TemplateForm>
        <PPForm isSettings  />
    </TemplateForm>
  );
}
