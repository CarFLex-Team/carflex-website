export default function AboutCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 lg:w-1/4 w-full bg-background rounded-lg border border-secondary-800 shadow-md p-4  border-l-4 border-l-primary-500 rounded-l-none">
      <p className="font-bold text-2xl">{title}</p>
      <p className="text-gray-700 mb-4 text-sm ">{description}</p>
    </div>
  );
}
