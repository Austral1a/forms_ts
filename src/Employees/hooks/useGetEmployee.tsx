import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { editEmployeeAction } from "../../Store/Employees";

export const useGetEmployee = () => {
  const dispatch = useDispatch();
  return useCallback(
    (firstName, lastName, email, position, id) =>
      dispatch(editEmployeeAction(firstName, lastName, email, position, id)),
    [dispatch]
  );
};
