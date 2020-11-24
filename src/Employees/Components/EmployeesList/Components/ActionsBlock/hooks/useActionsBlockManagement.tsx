import { useState } from "react";

export const useActionsBlockManagement = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return {
    edit: {
      isEditModalOpen,
      handleEditModalClose: () => setIsEditModalOpen(false),
      handleEditModalOpen: () => setIsEditModalOpen(true),
    },
    delete: {
      isDeleteModalOpen,
      handleDeleteModalClose: () => setIsDeleteModalOpen(false),
      handleDeleteModalOpen: () => setIsDeleteModalOpen(true),
    },
  };
};
