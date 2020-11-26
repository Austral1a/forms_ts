import { useState } from "react";

export const useCreateEmployeeBlockManager = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return {
    isCreateModalOpen,
    handleCreateModalClose: () => setIsCreateModalOpen(false),
    handleCreateModalOpen: () => setIsCreateModalOpen(true),
  };
};
