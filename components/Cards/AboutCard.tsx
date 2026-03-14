export default function AboutCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 lg:w-1/4 w-full bg-background dark:bg-zinc-800 rounded-lg border border-secondary-800 shadow-md p-4  border-l-4 border-l-primary-500 dark:border-l-primary-600 rounded-l-none  transition-transform duration-300 hover:-translate-y-5 hover:shadow-xl">
      <p className="font-bold mb-2 text-2xl dark:text-blue-100">{title}</p>
      <p className="text-gray-700 mb-1 text-sm dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
