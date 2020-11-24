import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { createEmployeeAction } from "../../../Store/Employees";
import { Employee } from "../../../Interfaces/Employees";

interface Props {
  handleClose: () => void;
}

export const useCreateEmployeeManagement = ({ handleClose }: Props) => {
  const dispatch = useDispatch();
  const dispatchAction = useCallback(
    (props: { values: Employee }) => {
      const {
        values: { firstName, lastName, email, position },
      } = props;
      dispatch(createEmployeeAction({ firstName, lastName, email, position }));
    },
    [dispatch]
  );

  return {
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    btnText: "Create",
    handleClose,
    dispatchAction,
  };
};
