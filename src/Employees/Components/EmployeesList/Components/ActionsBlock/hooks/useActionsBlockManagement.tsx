import { useState } from "react";

export const useActionsBlockManagement = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return {
    isEditModalOpen,
    handleEditModalClose: () => setIsEditModalOpen(false),
    handleEditModalOpen: () => setIsEditModalOpen(true),
    isDeleteModalOpen,
    handleDeleteModalClose: () => setIsDeleteModalOpen(false),
    handleDeleteModalOpen: () => setIsDeleteModalOpen(true),
  };
};
