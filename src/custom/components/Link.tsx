import React, { FC, useMemo } from 'react';
import { Link as LinkRRD, LinkProps } from 'react-router-dom';
import { Link as LinkMaterial, LinkProps as LinkPropsMaterial } from '@mui/material';
import { PathRoutes } from '../../Routes/CreateRoutes';

interface Props extends LinkPropsMaterial {
  to: `/${Exclude<PathRoutes, '*'>}`;
};

export const Link:FC<Props> = ({ to, ...rest }) => {

  const LinkCustom = useMemo(() => React
    .forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>((linkProps, ref) =>
      <LinkRRD ref={ref} to={to} {...linkProps} />
  ), [to]);

  return (
    <LinkMaterial component={LinkCustom} {...rest}/>
  );
};

