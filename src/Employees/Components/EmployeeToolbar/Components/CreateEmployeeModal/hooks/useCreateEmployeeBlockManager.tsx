import { useState } from "react";

export const useEmployeeToolbarManager = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return {
    isCreateModalOpen,
    handleCreateModalClose: () => setIsCreateModalOpen(false),
    handleCreateModalOpen: () => setIsCreateModalOpen(true),
  };
};
