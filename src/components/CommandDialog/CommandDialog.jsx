import React from 'react';
import PropTypes from 'prop-types';
import { CommandDialog as CommandDialogM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription Dialog container for the command component.
 */
const CommandDialog = ({ children, className, ...props }) => {
  return (
    <CommandDialogM className={className} {...props}>
      {children}
    </CommandDialogM>
  );
};

CommandDialog.propTypes = {
  /** Whether the dialog is open
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** Handler for dialog open state change */
  onOpenChange: PropTypes.func,
  /** Children inside the dialog */
  children: PropTypes.node,
  /** Additional className for styling */
  className: PropTypes.string,
};

export default CommandDialog;
