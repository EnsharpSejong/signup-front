import { FormContainer, FormInner } from "./FormStyled";

const Form = ({ children, formStyles, innerStyles }) => {
    return (
        <FormContainer $formStyles={formStyles}>
            <FormInner $innerStyles={innerStyles}>{children}</FormInner>
        </FormContainer>
    );
};

export default Form;
