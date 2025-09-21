interface FavoritesSectionProps {
  items: Array<{
    label: string;
  }>;
}

export function FavoritesSection({ items }: FavoritesSectionProps) {
  return (
    <section className="max-w-[180px] max-h-[104px] pb-3 flex flex-col gap-2">
      <div className="flex gap-x-2 items-center">
        <h3 className="text-sm text-[rgba(28,28,28,0.4)]">Favourites</h3>
        <h3 className="text-sm text-[rgba(28,28,28,0.2)]">Recently</h3>
      </div>
      <ul className="list-none space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-black font-normal text-sm"
          >
            <span className="w-1 h-1 bg-[rgba(28,28,28,0.2)] rounded-full mr-2"></span>
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
