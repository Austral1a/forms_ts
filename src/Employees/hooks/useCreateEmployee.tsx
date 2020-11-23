import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createEmployeeAction } from "../../Store/Employees";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export const useCreateEmployee = () => {
  const dispatch = useDispatch();
  return useCallback(
    (values: Values) =>
      dispatch(
        createEmployeeAction(
          values.firstName,
          values.lastName,
          values.email,
          values.position
        )
      ),
    [dispatch]
  );
};
