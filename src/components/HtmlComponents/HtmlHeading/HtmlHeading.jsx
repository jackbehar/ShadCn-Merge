import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindescription Use this component to add and style HTML headings (h1-h6)
 * @uxpinhtmloutput
 */
const HtmlHeading = ({
  tag: Component = 'h1',
  children,
  className,
  style,
  color,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  textDecoration,
  textTransform,
  fontFamily,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...props
}) => {
  // Combine the style prop with font styling properties
  const combinedStyle = {
    color,
    fontSize,
    fontWeight,
    textAlign,
    lineHeight,
    letterSpacing,
    textDecoration,
    textTransform,
    fontFamily,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    ...style, // This ensures that any additional style props override the specific font styling if needed
  }
  // eslint-disable-next-line react/prop-types
  const { uxpinRef, ...other } = props
  return (
    <Component className={className} style={combinedStyle} ref={uxpinRef} {...other}>
      {children}
    </Component>
  )
}

HtmlHeading.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Add Bootstrap classes */
  className: PropTypes.string,
  /** Override styles */
  style: PropTypes.object,
  /** Dynamically change the component's tag */
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6', // Headings
  ]),
  /** Font color
   * @uxpincontroltype color
   */ color: PropTypes.string,
  /** Font size */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Font weight */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Text alignment */
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),
  /** Line height */
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Letter spacing */
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Text decoration */
  textDecoration: PropTypes.string,
  /** Text transform */
  textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase', 'initial', 'inherit']),
  /** Font family */
  fontFamily: PropTypes.string,
  /** Padding Top */
  paddingTop: PropTypes.number,
  /** Padding Bottom */
  paddingBottom: PropTypes.number,
  /** Padding Left */
  paddingLeft: PropTypes.number,
  /** Padding Right */
  paddingRight: PropTypes.number,
  /** Margin Top */
  marginTop: PropTypes.number,
  /** Margin Bottom */
  marginBottom: PropTypes.number,
  /** Margin Left */
  marginLeft: PropTypes.number,
  /** Margin Right */
  marginRight: PropTypes.number,
}
export default HtmlHeading
