import { FC } from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';

export type AvatarFormats = 'circle' | 'rounded' | 'square';

export type Props = {
  src: string;
  alt?: string;
  variant?: AvatarFormats;
  onPress(): void;
};

const Avatar: FC<Props> = (): JSX.Element => (
  <RadixAvatar.Root>
    <RadixAvatar.Image />
    <RadixAvatar.Fallback />
  </RadixAvatar.Root>
);

export default Avatar;
