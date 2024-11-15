// src/app/tools/eulogygenerator/EulogyFormServer.tsx
'use server';

import { storeFormData } from './eulogyFormHandler';
import EulogyForm from './page';

export default function EulogyFormServer() {
  return <EulogyForm storeFormData={storeFormData} />;
}