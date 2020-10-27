import React from 'react';
import { AccordionType } from '../../types';
declare type Props = {
    StyledTitle?: JSX.Element | any;
    StyledBody?: JSX.Element | any;
    StyledHeader?: JSX.Element | any;
    StyledContent?: JSX.Element | any;
    data: AccordionType[];
    hasIcon?: boolean;
    iconUpName?: string;
    iconDownName?: string;
    activeIconColor?: string;
    inactiveIconColor?: string;
    isMarkdown?: boolean;
    onChange?(title: string): void;
};
declare const AccordionContainer: React.FC<Props>;
export default AccordionContainer;
//# sourceMappingURL=index.d.ts.map