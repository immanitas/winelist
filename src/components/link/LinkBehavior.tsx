import { Link as RouterLink, LinkProps as RouterLinkProp } from "react-router-dom";
import React from 'react';

export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProp, 'to'> & { href: RouterLinkProp['to']; }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});
