import { Button } from "./common/Button";
import { InputField } from "./shared/EmployeeModal/common/InputField";
import { person as personSvg } from "../assets";
import { EmployeeFormFields } from "./shared/EmployeeModal/common/enums";
import { LastNameField } from "./shared/EmployeeModal/Components/LastNameField";
import { EmailField } from "./shared/EmployeeModal/Components/EmailField";
import { PositionsField } from "./shared/EmployeeModal/Components/PositionsField";
import { Form } from "./common/Form";
import React from "react";
import { useFirstNameField } from "./shared/EmployeeModal/hooks/useFirstNameField";
import { useFormikContext } from "formik";

export const EmployeeModalData = ({ onSubmit }: any) => {
  const { firstNameField } = useFirstNameField();

  const formikContext = useFormikContext();

  return (
    <div className="employee-modal-container">
      <Form
        // TODO: remove onSubmit
        onSubmit={() => ""}
        isValid={formikContext.isValid}
        className="modal-container__modal form"
      >
        <Button
          text={"closeText"}
          type="button"
          className="modal-container_close"
          onClick={() => true}
        />
        <InputField
          placeholder={"asdas"}
          icon={personSvg}
          name={EmployeeFormFields.FIRST_NAME}
          value={firstNameField.value}
          touched={firstNameField.touched}
          error={firstNameField.error}
          handleBlur={firstNameField.onBlur}
          handleChange={firstNameField.onChange}
        />
        {/*<FirstNameField />*/}
        <LastNameField />
        <EmailField />
        <PositionsField />
        <Button
          text={"btnText"}
          // TODO: remove onClick
          onClick={() => onSubmit(formikContext)}
          type="submit"
          disabled={false}
        />
      </Form>
    </div>
  );
};
