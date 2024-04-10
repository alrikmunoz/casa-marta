type BasicMenuItem = {
  type: "category" | "item",
  name: string,
};
type Category = BasicMenuItem & {
  type: 'category',
  price?: string,
  content: Menu | Item[];
};
type Item = BasicMenuItem & {
  type: "item",
  price?: string,
  description?: string,
};
type Menu = Category[];