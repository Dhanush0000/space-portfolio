import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col justify-between min-h-[350px] bg-[#1a1a2e] p-4"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-56 object-cover rounded-t-lg"
      />

      <div className="flex flex-col flex-1 justify-between">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 flex-1">{description}</p>
        <span className="text-blue-400 hover:underline mt-4 block">
          View Project
        </span>
      </div>
    </Link>
  );
};
