import React, { FC } from 'react';

interface IBaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<IBaseLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default BaseLayout;
