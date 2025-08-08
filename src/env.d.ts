/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PROD: boolean;
  readonly DEV: boolean;
  readonly MODE: 'development' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    Modal: {
      show: (id: string, message: string, title?: string, type?: 'success' | 'error' | 'warning' | 'info') => void;
      hide: (id: string) => void;
    };
  }
}