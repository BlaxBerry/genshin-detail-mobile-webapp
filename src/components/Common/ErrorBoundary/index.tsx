import React, { ReactNode } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

interface CustomErrorBoundaryProps {
  children: ReactNode
}

const ErrorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error
  // E.g. log to an error logging client here
}

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return <>xxx</>
}

export default function CustomErrorBoundary({
  children,
}: CustomErrorBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler}>
      {children}
    </ErrorBoundary>
  )
}
