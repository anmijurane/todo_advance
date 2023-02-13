import React, { FC, useMemo } from 'react';
import { Link as LinkRRD, LinkProps as LinkPropsRRD } from 'react-router-dom';
import { Link as LinkMaterial, LinkProps as LinkPropsMaterial } from '@mui/material';
import { PathRoute, PathProtected } from '../../Routes/poc/CreateRoutes.poc';

export interface LinkProps extends LinkPropsMaterial {
  to: `/${PathProtected}/${PathRoute}`;
};

export const Link:FC<LinkProps> = ({ to, ...rest }) => {

  const LinkCustom = useMemo(() => React
    .forwardRef<HTMLAnchorElement, Omit<LinkPropsRRD, 'to'>>((linkProps, ref) =>
      <LinkRRD ref={ref} to={to} {...linkProps} />
  ), [to]);

  return (
    <LinkMaterial component={LinkCustom} {...rest}/>
  );
};

