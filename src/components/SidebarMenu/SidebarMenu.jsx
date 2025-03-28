import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenu as SidebarMenuM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Container for sidebar menu items.
 */
const SidebarMenu = ({ children, className, ...props }) => {
  return (
    <SidebarMenuM className={className} {...props}>
      {children}
    </SidebarMenuM>
  );
};

SidebarMenu.propTypes = {
  /** Menu children */
  children: PropTypes.node,

  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default SidebarMenu;
