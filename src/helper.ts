export const baseUrl = "https://jsonplaceholder.typicode.com/posts";
export interface MyState {
  posts: any[]; // Replace 'any' with the type of your posts array
  loading: boolean;
  err: null | Error;
}
