export interface IPageScreen {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
