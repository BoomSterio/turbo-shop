import { tw } from 'tailwind-styled';
import { SpinnerProps } from './types';

export const SWrapper = tw.div`
  flex items-center justify-center
`;

export const SLoader = tw.div<SpinnerProps>`
  block
  border-t-2 border-solid border-t-gray-400 rounded-full
  animate-spin
  mx-4
  aspect-square
  ${({ size }) => {
    switch (size) {
      case 'large':
        return 'w-12';
      case 'medium':
        return 'w-8';
      case 'small':
        return 'w-4';
      default:
        return 'w-8';
    }
  }}
`;
