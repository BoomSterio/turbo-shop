'use client'

import { ActualText, Container, HoverText } from "./styled";

const Logo = () => (
  <Container>
    <ActualText className='actual-text'>&nbsp;Inline&nbsp;</ActualText>
    <HoverText className='hover-text' aria-hidden='true'>
      &nbsp;Six&nbsp;
    </HoverText>
  </Container>
)

export default Logo
