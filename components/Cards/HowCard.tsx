import TrackedImage from "../ClientRender/TrackedImage";

export default function HowCard({
  title,
  description,
  imgLink,
  imgAlt,
  isReversed = false,
}: {
  title: string;
  description: string;
  imgLink: string;
  imgAlt: string;
  isReversed?: boolean;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row  w-full items-center justify-center gap-15 my-10 ${isReversed ? "md:flex-row-reverse" : ""}`}
    >
      <div className="md:w-1/2 w-full">
        <p className="text-gray-700 text-2xl font-bold dark:text-blue-100  ">
          {title}
        </p>
        <p className="text-gray-700 text-md dark:text-gray-500  ">
          {description}
        </p>
      </div>
      <img
        src={imgLink}
        alt={imgAlt}
        className="max-w-2/3 md:max-w-1/3 h-auto rounded-lg shadow-md"
      />
    </div>
  );
}
