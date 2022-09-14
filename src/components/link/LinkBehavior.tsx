import { Link as RouterLink, LinkProps as RouterLinkProp } from "react-router-dom";
import React from 'react';

/**
 * Mui example code for router-dom
 */
export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProp, 'to'> & { href: RouterLinkProp['to']; }
>((props, ref) => {
  const { style, href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink style={{color: 'inherit', ...style}} ref={ref} to={href} {...other} />;
});
