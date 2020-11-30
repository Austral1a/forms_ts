import { Button, Form, SelectField, InputField, useFields } from "@Components";
import { person as personSvg, email as emailSvg } from "@Assets";
import React, { FC, ReactElement, useCallback, useEffect } from "react";
import { FormikProps, useFormikContext } from "formik";
import { EmployeeModalFormFields } from "@Employees";
import { translations } from "@helpers";
import classNames from "classnames";
import Modal from "react-modal";
import {
  createEmployeeAction,
  getEmployeePositionsAction,
  getEmployeesAction,
  selectEmployeePositions,
} from "@StoreEmployees";
import { useDispatch, useSelector } from "react-redux";

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
  cleanFormFieldValues?: boolean;
  dispatchAction: (props: FormikProps<EmployeeModalFormFields>) => void;
}

Modal.setAppElement("#root");

export const EmployeeModalForm: FC<EmployeeModalFormProps> = ({
  handleClose,
  dispatchAction,
  submitBtnText,
  className,
  isModalOpen,
  cleanFormFieldValues,
}): ReactElement => {
  const formikContext = useFormikContext<EmployeeModalFormFields>();
  const dispatch = useDispatch();

  const {
    emailField,
    firstNameField,
    lastNameField,
    positionField,
  } = useFields();
  const {
    field: { firstNameText, lastNameText, emailText },
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
  const onAfterModalOpen = useCallback(
    () => dispatch(getEmployeePositionsAction()),
    [dispatch]
  );

  const onAfterModalClose = useCallback(() => {
    const employeeModalFormFieldsInitValues = {
      firstName: "",
      lastName: "",
      email: "",
      position: "",
    };
    cleanFormFieldValues &&
      formikContext.setFormikState((prevState) => {
        prevState.values = { ...employeeModalFormFieldsInitValues };
        return prevState;
      });
  }, [formikContext, cleanFormFieldValues]);

  const employeePositions = useSelector(selectEmployeePositions);
  const isFormValid =
    // fields values must presence
    !!formikContext.values.email &&
    !!formikContext.values.firstName &&
    !!formikContext.values.lastName &&
    !!formikContext.values.position &&
    // fields errors must absence
    !formikContext.errors.email &&
    !formikContext.errors.firstName &&
    !formikContext.errors.lastName &&
    !formikContext.errors.position;
  const customClasses = classNames("modal-container__modal form", className);
  return (
    <>
      {isModalOpen && (
        <Modal
          onAfterOpen={onAfterModalOpen}
          onAfterClose={onAfterModalClose}
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
            isValid={isFormValid}
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
              onBlur={firstNameField.onBlur}
              onChange={firstNameField.onChange}
            />
            <InputField
              placeholder={lastNameText}
              icon={personSvg}
              name={EmployeeFormFields.LAST_NAME}
              value={lastNameField.value}
              touched={lastNameField.touched}
              error={lastNameField.error}
              onBlur={lastNameField.onBlur}
              onChange={lastNameField.onChange}
            />
            <InputField
              placeholder={emailText}
              icon={emailSvg}
              name={EmployeeFormFields.EMAIL}
              value={emailField.value}
              touched={emailField.touched}
              error={emailField.error}
              onBlur={emailField.onBlur}
              onChange={emailField.onChange}
            />
            <SelectField
              name={EmployeeFormFields.POSITION}
              value={positionField.value}
              touched={positionField.touched}
              error={positionField.error}
              onBlur={positionField.onBlur}
              onChange={positionField.onChange}
              selectOptions={["Chose position", ...employeePositions]}
            />
            <Button
              text={submitBtnText}
              type="submit"
              disabled={!isFormValid}
            />
          </Form>
        </Modal>
      )}
    </>
  );
};
