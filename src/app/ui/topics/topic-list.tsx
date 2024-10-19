'use client'
import Link from 'next/link';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';

type Topic = {
  slug: string;
  name: title;
  description: string;
  level: string;
};
type Subject = {
  id: string;
  name: string;
  topics: Topic[];
};

  

export default function TopicList({subjects}: Record<string,Subject>) {
  const searchParams = useSearchParams();
  const subjectList: string[] = Object.keys(subjects).sort();
  for (const topic of subjects['Algebra'].topics) {
    console.log(topic.title);
  }
  return (
  <>
    {subjectList.map((subject) => {
      return (
        <div key={subjects[subject].id}>
          <div id={subjects[subject].id} className="text-6xl underline mb-6">
            {subject}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3">
            {subjects[subject].topics.map((topic) => {
              return (
                <Link
                  key={topic.slug}
                  href={`/notes/${subjects[subject].id}/${topic.slug}?${searchParams.toString()}`}
                  className={clsx(
                    "flex-auto text-wrap rounded border-2 mr-3 mb-3 px-1.5 min-h-32 max-w-96 bg-[#18202f]",
                    { "hidden": topic.level !== "foundation" && searchParams.get('level') === "higher" }
                  )}
                >
                  <div className="text-base font-bold pb-1 underline pt-1">{topic.title}</div>
                  <div className="text-sm">{topic.description}</div>
                </Link>
              );
            })}
          </div>
        </div>
      );
    })}
  </>
);
};
