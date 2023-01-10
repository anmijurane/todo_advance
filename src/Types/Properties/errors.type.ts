
export interface ErrorBundary extends Error {
  code: string;
  extraData?: any;
}
