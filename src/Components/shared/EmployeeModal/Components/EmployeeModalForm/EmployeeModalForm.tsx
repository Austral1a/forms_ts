import React, { FC, ReactElement, useCallback } from "react";
import { Button, Form } from "../../../../common";
import { SelectField } from "../../common";
import { FormikProps, useFormikContext } from "formik";
import {
  useEmailModalField,
  useFirstNameModalField,
  useLastNameModalField,
  usePositionModalField,
} from "../../hooks";
import { person as personSvg, email as emailSvg } from "../../../../../assets";
import { EmployeeFormFields, InputField } from "../../common";
import { translations } from "../../../../../helpers";
import { Employee } from "../../../../../Store/Employees/interfaces";

interface EmployeeModalFormProps {
  handleClose: () => void;
  submitBtnText: string;
  dispatchAction: (props: FormikProps<Employee>) => void;
}

export const EmployeeModalForm: FC<EmployeeModalFormProps> = ({
  handleClose,
  dispatchAction,
  submitBtnText,
}): ReactElement => {
  const formikContext = useFormikContext<Employee>();

  const { firstNameField } = useFirstNameModalField();
  const { lastNameField } = useLastNameModalField();
  const { emailField } = useEmailModalField();
  const { positionField } = usePositionModalField();

  const {
    field: { firstNameText, lastNameText, emailText, qa, dev, manager },
    button: { closeText },
  } = translations;

  const onSubmit = useCallback(() => {
    dispatchAction(formikContext);
  }, [dispatchAction, formikContext]);

  return (
    <div className="employee-modal-container">
      <Form
        // TODO: remove onSubmit
        onSubmit={onSubmit}
        isValid={formikContext.isValid}
        className="modal-container__modal form"
      >
        <Button
          text={closeText}
          type="button"
          className="modal-container_close"
          onClick={handleClose}
        />
        <InputField
          placeholder={firstNameText}
          icon={personSvg}
          name={EmployeeFormFields.FIRST_NAME}
          value={firstNameField.value}
          touched={firstNameField.touched}
          error={firstNameField.error}
          handleBlur={firstNameField.onBlur}
          handleChange={firstNameField.onChange}
        />
        <InputField
          placeholder={lastNameText}
          icon={personSvg}
          name={EmployeeFormFields.LAST_NAME}
          value={lastNameField.value}
          touched={lastNameField.touched}
          error={lastNameField.error}
          handleBlur={lastNameField.onBlur}
          handleChange={lastNameField.onChange}
        />
        <InputField
          placeholder={emailText}
          icon={emailSvg}
          name={EmployeeFormFields.EMAIL}
          value={emailField.value}
          touched={emailField.touched}
          error={emailField.error}
          handleBlur={emailField.onBlur}
          handleChange={emailField.onChange}
        />
        <SelectField
          name={EmployeeFormFields.POSITION}
          value={positionField.value}
          touched={positionField.touched}
          error={positionField.error}
          handleBlur={positionField.onBlur}
          handleChange={positionField.onChange}
          defaultValue={qa}
          selectOptions={[qa, dev, manager]}
        />
        <Button
          text={submitBtnText}
          //@ts-ignore
          onClick={() => ""}
          type="submit"
          disabled={!formikContext.isValid}
        />
      </Form>
    </div>
  );
};
