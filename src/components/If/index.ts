import { ReactNode } from 'react';

type Props = {
  condition: boolean;
  children: ReactNode | string;
};

const If = ({ condition, children }: Props): any =>
  condition ? children : null;

export default If;
