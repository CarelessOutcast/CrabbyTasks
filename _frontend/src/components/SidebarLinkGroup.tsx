
/*************************************************************************
 * Component: SidebarLinkGroup
 *
 * Logic: This file defines a React component for a collapsible sidebar link
 * group. The component handles toggling the group's open/closed state when a
 * user clicks on it.
 *
 * Type: Component
*************************************************************************/


import { ReactNode, useState } from 'react';

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

const SidebarLinkGroup = ({
  children,
  activeCondition,
}: SidebarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
