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

  const onEditModalClose = useCallback(() => setIsEditModalOpen(false), []);
  const onEditModalOpen = useCallback(() => setIsEditModalOpen(true), []);

  const onDeleteModalClose = useCallback(() => setIsDeleteModalOpen(false), []);
  const onDeleteModalOpen = useCallback(() => setIsDeleteModalOpen(true), []);

  return {
    isEditModalOpen,
    onEditModalClose,
    onEditModalOpen,
    isDeleteModalOpen,
    onDeleteModalClose,
    onDeleteModalOpen,
  };
};
