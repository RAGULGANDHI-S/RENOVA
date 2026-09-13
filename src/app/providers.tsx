import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../localization/i18n';


const queryClient = new QueryClient({

  defaultOptions: {

    queries: {

      refetchOnWindowFocus: false,

      retry: 1,

    },

  },

});



interface AppProvidersProps {

  children: ReactNode;

}



export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {

  return (

    <QueryClientProvider client={queryClient}>

      {children}

    </QueryClientProvider>

  );

};


export default AppProviders;