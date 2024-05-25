type BasicMenuItem = {
  type: "category" | "item",
  name: string,
};
type Category = BasicMenuItem & {
  type: 'category',
  price?: string,
  content: Category[] | Item[];
};
type Item = BasicMenuItem & {
  type: "item",
  price?: string,
  description?: string,
};
type Menu = {
  name: string,
  categories: Category[]
}