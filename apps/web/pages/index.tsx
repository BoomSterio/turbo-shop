import { tw } from 'tailwind-styled';
import { Button, Spinner } from 'ui';

const Title = tw.h1`
  text-red-500
`

export default function Web() {
  return (
    <div>
      <Title>Web</Title>
      <Button />
      <Spinner />
    </div>
  );
}
