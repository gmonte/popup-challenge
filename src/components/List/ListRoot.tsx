import { PropsWithChildren } from 'react'

import { Root } from './styles'

export type ListRootProps = PropsWithChildren<{
  numberOfColumns?: number
}>

export function ListRoot ({ children, numberOfColumns = 1 }: ListRootProps) {
  return (
    <Root data-testid="list" $numberOfColumns={ numberOfColumns }>
      {children}
    </Root>
  )
}

ListRoot.displayName = 'List.Root'
