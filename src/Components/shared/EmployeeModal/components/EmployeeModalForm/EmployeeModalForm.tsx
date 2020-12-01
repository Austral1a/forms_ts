import React, { FC, ReactElement, useCallback } from "react";
import {
  Button,
  Form,
  SelectField,
  InputField,
  EmployeeModalFormFormikProps,
} from "@Components";
import { useEmployeeFormFields } from "./hooks";
import { useDispatch, useSelector } from "react-redux";
import { personIcon, emailIcon } from "@Assets";
import { useFormikContext } from "formik";
import { EmployeeModalFormFields } from "@Employees";
import { translations } from "@helpers";
import classNames from "classnames";
import Modal from "react-modal";
import "./EmployeeModalForm.scss";
import {
  getEmployeePositionsAction,
  selectEmployeePositions,
} from "@StoreEmployees";

export enum EmployeeFormFields {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  POSITION = "position",
}

interface EmployeeModalFormProps {
  handleClose: () => void;
  isModalOpen: boolean;
  className?: string;
  submitBtnText: string;
  dispatchAction: (props: EmployeeModalFormFormikProps) => void;
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
  const dispatch = useDispatch();

  const {
    emailField,
    firstNameField,
    lastNameField,
    positionField,
  } = useEmployeeFormFields();
  const {
    field: { firstNameText, lastNameText, emailText, chosePositionText },
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
  const onModalOpen = useCallback(() => {
    dispatch(getEmployeePositionsAction());
  }, [dispatch]);

  const onModalClose = useCallback(() => {
    // TODO: edit employee doesnt update
    formikContext.resetForm({
      values: { ...formikContext.initialValues },
    });
  }, [formikContext]);
  const employeePositions = useSelector(selectEmployeePositions);
  const isFormValid =
    !Object.values(formikContext.values).includes("") &&
    !Object.keys(formikContext.errors).length;
  const customClasses = classNames("modal-container__modal form", className);
  return (
    <>
      {isModalOpen && (
        <Modal
          onAfterOpen={onModalOpen}
          onAfterClose={onModalClose}
          isOpen={isModalOpen}
          className="employee-modal"
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
              icon={personIcon}
              name={EmployeeFormFields.FIRST_NAME}
              value={firstNameField.value}
              touched={firstNameField.touched}
              error={firstNameField.error}
              onBlur={firstNameField.onBlur}
              onChange={firstNameField.onChange}
            />
            <InputField
              placeholder={lastNameText}
              icon={personIcon}
              name={EmployeeFormFields.LAST_NAME}
              value={lastNameField.value}
              touched={lastNameField.touched}
              error={lastNameField.error}
              onBlur={lastNameField.onBlur}
              onChange={lastNameField.onChange}
            />
            <InputField
              placeholder={emailText}
              icon={emailIcon}
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
              selectOptions={[chosePositionText, ...employeePositions]}
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
