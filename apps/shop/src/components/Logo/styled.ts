import { tw } from 'tailwind-styled'

export const HoverText = tw.span`
  relative
  text-red-600
  transition-all duration-500
  stroke-1 stroke-woodsmoke-300
  translate-y-0
  group-hover:-translate-y-8
`

export const ActualText = tw.span`
  relative
  stroke-text
  text-transparent
  transition-all duration-500
  translate-y-0
  group-hover:-translate-y-8
`

export const Container = tw.div`
  group
  cursor-pointer
  tracking-wider no-underline text-3xl leading-none font-semibold uppercase
  relative w-fit overflow-hidden h-8
  flex flex-col text-center
  transition-all duration-500
  hover:drop-shadow-[0_0_24px_rgba(231,35,48,1)]
`
