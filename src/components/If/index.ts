import { FC, ReactNode } from 'react';

export type Props = {
  condition: boolean;
  children: ReactNode | string;
};

const If: FC<Props> = ({ condition, children }): any =>
  condition ? children : null;

export default If;
