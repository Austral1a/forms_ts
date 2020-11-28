import { useState, useCallback } from "react";
import { EmployeeResponse } from "@StoreEmployees";

interface ActionsBlockManagerResult {
  isEditModalOpen: boolean;
  onEditModalClose: () => void;
  onEditModalOpen: () => void;
  isDeleteModalOpen: boolean;
  onDeleteModalClose: () => void;
  onDeleteModalOpen: (employeeValues: EmployeeResponse) => void;
  employeeId: number;
}

export const useActionsBlockManager = (): ActionsBlockManagerResult => {
  const [employeeId, setEmployeeId] = useState<number>();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return {
    isEditModalOpen,
    onEditModalClose: useCallback(() => setIsEditModalOpen(false), []),
    onEditModalOpen: useCallback(() => setIsEditModalOpen(true), []),
    isDeleteModalOpen,
    onDeleteModalClose: useCallback(() => setIsDeleteModalOpen(false), []),
    onDeleteModalOpen: useCallback((employee: EmployeeResponse) => {
      const { id } = employee;
      setEmployeeId(id);
      setIsDeleteModalOpen(true);
    }, []),
    employeeId,
  } as ActionsBlockManagerResult;
};
