/// <reference types="vite/client" />

interface ImportMetaEnv {
  // No sensitive keys should be exposed to the client
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Image imports
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}
