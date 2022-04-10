import react from "react";

import TemplateForm from "../../resources/templates/phoneTemplate";
import PPForm from "../../resources/components/PPForm";

export default function resetPassword(){
    return (
        <TemplateForm>
            <PPForm isReset />
        </TemplateForm>
        );
}