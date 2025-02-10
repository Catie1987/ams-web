"use client"
import React , {ReactNode} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootProviders({children}: {children: ReactNode}) {
    const [queryClient] = React.useState(()=> new QueryClient({}));
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
}
