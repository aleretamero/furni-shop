import * as React from 'react';
import { DropdownContext } from '@/components/ui/dropdown.component';

export const useDropdown = () => {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
