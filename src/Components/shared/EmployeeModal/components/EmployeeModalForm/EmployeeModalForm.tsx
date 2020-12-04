import React, { FC, ReactElement, useCallback } from "react";
import {
  Button,
  Form,
  SelectField,
  InputField,
  EmployeeModalFormFormikProps,
  CustomModal,
} from "@Components";
import { useEmployeeFormFields } from "./hooks";
import { useDispatch, useSelector } from "react-redux";
import { personIcon, emailIcon } from "@Assets";
import { useFormikContext } from "formik";
import { EmployeeModalFormFields } from "@Employees";
import { translations } from "@helpers";
import classNames from "classnames";
import Modal from "react-modal";
import classes from "../../../../common/Modal/Modal.module.scss";
import {
  getEmployeePositionsAction,
  selectEmployeePositions,
} from "@StoreEmployees";

export enum EmployeeFieldName {
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
  onSubmit: (props: EmployeeModalFormFormikProps) => void;
}

Modal.setAppElement("#root");

export const EmployeeModalForm: FC<EmployeeModalFormProps> = ({
  handleClose,
  onSubmit,
  submitBtnText,
  className,
  isModalOpen,
}): ReactElement => {
  const dispatch = useDispatch();
  const formikContext = useFormikContext<EmployeeModalFormFields>();
  const employeePositions = useSelector(selectEmployeePositions);

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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(formikContext);
      handleClose();
    },
    [onSubmit, formikContext, handleClose]
  );

  const onModalOpen = useCallback(() => {
    dispatch(getEmployeePositionsAction());
  }, [dispatch]);

  const isFormValid =
    !Object.values(formikContext.values).includes("") &&
    !Object.keys(formikContext.errors).length;

  const customClasses = classNames(classes["employee-modal__form"], className);

  return (
    <>
      {isModalOpen && (
        <CustomModal onModalOpen={onModalOpen} isOpen={isModalOpen}>
          <Form
            onSubmit={handleSubmit}
            isValid={isFormValid}
            className={customClasses}
          >
            <Button
              text={closeText}
              type="button"
              className={classes["employee-modal__form_close"]}
              onClick={handleClose}
            />
            <InputField
              placeholder={firstNameText}
              icon={personIcon}
              name={EmployeeFieldName.FIRST_NAME}
              value={firstNameField.value}
              touched={firstNameField.touched}
              error={firstNameField.error}
              onBlur={firstNameField.onBlur}
              onChange={firstNameField.onChange}
            />
            <InputField
              placeholder={lastNameText}
              icon={personIcon}
              name={EmployeeFieldName.LAST_NAME}
              value={lastNameField.value}
              touched={lastNameField.touched}
              error={lastNameField.error}
              onBlur={lastNameField.onBlur}
              onChange={lastNameField.onChange}
            />
            <InputField
              placeholder={emailText}
              icon={emailIcon}
              name={EmployeeFieldName.EMAIL}
              value={emailField.value}
              touched={emailField.touched}
              error={emailField.error}
              onBlur={emailField.onBlur}
              onChange={emailField.onChange}
            />
            <SelectField
              name={EmployeeFieldName.POSITION}
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
              className={classes["employee-modal__form_submit-btn"]}
            />
          </Form>
        </CustomModal>
      )}
    </>
  );
};
