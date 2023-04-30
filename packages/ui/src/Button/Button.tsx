import { tw } from 'tailwind-styled';

const SButton = tw.button`
  text-red-100 rounded bg-black
`;

export function Button() {
  return <SButton>Boop</SButton>;
}
