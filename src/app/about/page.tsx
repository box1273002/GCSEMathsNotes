export default function About() {
  return (
  <main className="flex flex-col h-screen w-screen justify-center items-center top-0 absolute z-0">
  <div className="w-2/3 bg-blue-950 rounded-xl border-8 p-3">
  <h1 className="text-3xl underline mb-3">About</h1>
  <p>
  I have been a GCSE maths tutor for many years and write notes on topics for my students. These notes form the basis of this site. There are also lots of questions to try.
  </p>
  <span className="font-bold text-lg">Notes:</span>
  <ul className="list-disc ml-6">
    <li>Explain, and show you how to do, each topic.</li>
    <li>Include lots of worked examples.</li>
  </ul>
  <span className="font-bold text-lg">Questions:</span>
  <ul className="list-disc ml-6">
    <li>Check you know your vocabulary and formulae with Flash Cards.</li>
    <li>Check you can recognise what skills a question is testing, and then give it a go before looking at the worked answer.</li>
  </ul>
  <p>
  Some topics, or bits of topics, relate to all GCSE papers and some only relate to Higher GCSE papers. If you are planning to take Foundation Maths GCSE you can select “Foundation” in the top navigation bar and the details that only relate to the Higher GCSE will disappear.
  </p>
  </div>
  </main>
  );
}
