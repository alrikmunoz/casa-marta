export default function MenuItem({ name, price = "" }: { name: string, price?: string }) {
  return (
    <div className="flex justify-between mb-1">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};