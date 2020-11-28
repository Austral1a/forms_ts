import React, { FC, PropsWithChildren, ReactElement, useCallback } from "react";
import { Button, Form, SelectField, InputField, useFields } from "@Components";
import { FormikProps, useFormikContext } from "formik";
import Modal from "react-modal";
import { person as personSvg, email as emailSvg } from "@Assets";
import { translations } from "@helpers";
import { EmployeeModalFormFields } from "@Employees";
import classNames from "classnames";

export enum EmployeeFormFields {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  POSITION = "position",
  PASSWORD = "password",
}

interface EmployeeModalFormProps {
  handleClose: () => void;
  isModalOpen: boolean;
  className?: string;
  submitBtnText: string;
  dispatchAction: (props: FormikProps<EmployeeModalFormFields>) => void;
}

Modal.setAppElement("#root");

export const EmployeeModalForm: FC<EmployeeModalFormProps> = ({
  handleClose,
  dispatchAction,
  submitBtnText,
  className,
  isModalOpen,
}): ReactElement => {
  const formikContext = useFormikContext<EmployeeModalFormFields>();

  const {
    emailField,
    firstNameField,
    lastNameField,
    positionField,
  } = useFields();

  const {
    field: { firstNameText, lastNameText, emailText, qa, dev, manager },
    button: { closeText },
  } = translations;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatchAction(formikContext);
      handleClose();
    },
    [dispatchAction, formikContext, handleClose]
  );

  const customClasses = classNames("modal-container__modal form", className);
  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, .6)",
            },
            content: {
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
            },
          }}
        >
          <Form
            onSubmit={onSubmit}
            isValid={formikContext.isValid}
            className={customClasses}
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
              type="submit"
              disabled={!formikContext.isValid}
            />
          </Form>
        </Modal>
      )}
    </>
  );
};
