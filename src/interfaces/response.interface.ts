export interface Response<T> {
  data: T | T[] | null;
  message: string | null;
  success: boolean;
}
