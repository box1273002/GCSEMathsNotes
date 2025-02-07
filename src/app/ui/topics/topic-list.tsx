'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export type Topic = {
  slug: string;
  name: string;
  description: string;
  level: string;
};
export type Subject = {
  id: string;
  name: string;
  topics: Topic[];
};



export function TopicList({ subjects }: Record<string, Subject>) {
  const searchParams = useSearchParams();
  const subjectList: string[] = Object.keys(subjects).sort();

  return (
    <>
      {subjectList.map((subject) => {
        // Check if there are any visible topics for this subject
        const visibleTopics = subjects[subject].topics.filter((topic: Topic) => {
          return (
            topic.level === "foundation" ||
            searchParams.get("level") !== "higher"
          );
        });

        // Skip rendering this subject if there are no visible topics
        if (visibleTopics.length === 0) {
          return null; // <-- Add a semicolon here to avoid syntax issues
        }

        return (
          <div key={subjects[subject].id}>
            <div id={subjects[subject].id} className="text-6xl underline mb-6">
              {subject}
            </div>
            <div className="flex flex-wrap gap-4">
              {visibleTopics.map((topic) => {
                return (
                  <Link
                    key={topic.slug}
                    href={`/notes/${subjects[subject].id}/${topic.slug}?${searchParams.toString()}`}
                    className="flex-auto text-wrap rounded border-2 mr-3 mb-3 px-1.5 min-h-32 min-w-96 max-w-96 bg-[#18202f]"
                  >
                    <div className="text-base font-bold pb-1 underline pt-1">
                      {topic.title}
                    </div>
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


