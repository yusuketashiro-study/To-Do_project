import dynamic from 'next/dynamic'

import type { FC } from 'react'

const NoSSR: FC = ({ children }) => (
  <>
    {children}
  </>
)

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false })