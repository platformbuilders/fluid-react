import { FC } from 'react';
export declare type AvatarFormats = 'circle' | 'rounded' | 'square';
export declare type Props = {
    src: string;
    alt?: string;
    variant?: AvatarFormats;
    onPress(): void;
};
declare const Avatar: FC<Props>;
export default Avatar;
//# sourceMappingURL=index.d.ts.map