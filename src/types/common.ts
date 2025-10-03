export interface HttpClient {
  get<T = any>(url: string, options?: any): Promise<T>;
  post<T = any>(url: string, data?: any, options?: any): Promise<T>;
  put<T = any>(url: string, data?: any, options?: any): Promise<T>;
  delete<T = any>(url: string, options?: any): Promise<T>;
}
