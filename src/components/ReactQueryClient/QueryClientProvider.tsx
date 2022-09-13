/**
 * React Query Client
 * https://react-query-v3.tanstack.com/quick-start
 */

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface CustomQueryClientProps {
  children: ReactNode
}
// Create a client
const queryClient = new QueryClient()

export default function CustomReactQueryClient({
  children,
}: CustomQueryClientProps): JSX.Element {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
