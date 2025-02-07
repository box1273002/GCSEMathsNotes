import QuestionList from '@/app/ui/questions/question-list.tsx'

export default function Questions({ params }: { params: { numQuestions: string } }) {
  const numQuestions: number = Number(params.numQuestions);

  if (isNaN(numQuestions)) {
    return (

      <div className="flex justify-center items-center h-screen">
        <div className="text-white text-xl font-bold">
          Invalid Url (Incorrect number of Questions)
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col w-2/3 max-w-3xl pt-4">
          <QuestionList />
        </div>
      </div>
    </>
  );
}
