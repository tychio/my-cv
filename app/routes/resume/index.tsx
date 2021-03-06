import type { LoaderFunction } from "remix";
import { useLoaderData, json } from "remix";
import { db } from "~/utils/db.server";

type ResumeData = {
  skills: Array<{ name: string | null, sort: number }>;
};

export const loader: LoaderFunction = async () => {
  const data: ResumeData = {
    skills: await db.skills.findMany()
  };
  return data;
}

export default function ResumeIndex() {
  const resume = useLoaderData<ResumeData>();

  return (
    <div>
      <h1>Zhang Zhengzheng</h1>
      <p>
        A full-stack developer, Senior consultant, Freelancer.
      </p>
      <p>
        {resume.skills.map((skill, index) => (
          <span>{index !== 0 ? ', ' : ''}{skill.name}</span>
        ))}
      </p>
    </div>
  );
}
