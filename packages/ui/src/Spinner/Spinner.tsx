import { SLoader, SWrapper } from './styled'
import { SpinnerProps } from './types'

export const Spinner = ({ size = 'medium' }: SpinnerProps) => (
  <SWrapper>
    <SLoader size={size} />
    <div />
  </SWrapper>
)
