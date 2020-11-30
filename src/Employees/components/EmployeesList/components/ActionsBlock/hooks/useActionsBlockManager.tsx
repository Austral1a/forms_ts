import { useState, useCallback } from "react";

interface ActionsBlockManagerResult {
  isEditModalOpen: boolean;
  onEditModalClose: () => void;
  onEditModalOpen: () => void;
  isDeleteModalOpen: boolean;
  onDeleteModalClose: () => void;
  onDeleteModalOpen: () => void;
}

export const useActionsBlockManager = (): ActionsBlockManagerResult => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return {
    isEditModalOpen,
    onEditModalClose: useCallback(() => setIsEditModalOpen(false), []),
    onEditModalOpen: useCallback(() => setIsEditModalOpen(true), []),
    isDeleteModalOpen,
    onDeleteModalClose: useCallback(() => setIsDeleteModalOpen(false), []),
    onDeleteModalOpen: useCallback(() => setIsDeleteModalOpen(true), []),
  };
};
