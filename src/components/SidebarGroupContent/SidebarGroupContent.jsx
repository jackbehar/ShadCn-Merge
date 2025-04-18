import React from 'react';
import PropTypes from 'prop-types';
import { SidebarGroupContent as SidebarGroupContentM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Content container inside a group.
 */
const SidebarGroupContent = ({ children, className, ...props }) => {
  return (
    <SidebarGroupContentM className={className} {...props}>
      {children}
    </SidebarGroupContentM>
  );
};

SidebarGroupContent.propTypes = {
  /** Group content children */
  children: PropTypes.node,

  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default SidebarGroupContent;
