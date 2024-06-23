import Link from 'next/link';
const subjects = [

  {name: 'Core Skills',id: 'core_skills',topics: [
    {name: 'Rounding', href: 'rounding', description: 'Rounding to signigicant figures and decimal places.'},
    {name: 'Change of Units', href: 'changing_of_units', description: 'Changing between related units, e.g. Km and cm or hours and second.'},
    {name: 'LCM and HCF', href: 'lcm_and_hcf', description: 'Calculating Lowest Common Multiples (LCMs) and Highest Common Fcators (HCFs).'},
    {name: 'Negative Numbers', href: 'negative_numbers', description: 'Multiplying, divising, adding and subtracting negative numers.'},
    {name: 'Like terms and Algebraic Expressions', href: 'like_terms_and_algebraic_expressions', description: 'What are like terms, how to collect them and how you can simplify an algebraic expression.'},
    {name: 'Factors and Factorising linear expressions', href: 'factors_and_factorising_linear_expressions', description: 'Expressing numbers as their factors and recognising factors of an algebraic term.'},
    {name: 'Rearranging equations - one and two step', href: 'rearranging_equations_one_and_two_step',description: 'How to rearrange a simple equation to solve for an unknown'},
    {name: 'Rearranging equations - multi step', href: 'rearranging_equations_multi_step', description: 'How to rearrange a more complicated equation to solve for an unknown'}

  ]},
  {name: 'Vocabulary',id: 'vocabulary',topics: [
    {name: 'Algebraic vocab', href: 'algebraic_vocab', description: 'tmp'},
    {name: 'Circle vocab', href: 'circle_vocab', description: 'tmp'},
  ]},
  {name: 'Fractions and Decimals',id: 'fractions_and_decimals',topics: [
    {name: 'Mixed numbers and Improper Fractions', href: 'mixed_numbers_and_improper_fraction', description: 'tmp'},
  ]},
]
export default function Page() {
  return (
  <div className="mx-6 mt-6">
    {subjects.map((subject) => {
        return (
          <>
        <div id={subject.id} key={subject.id} className="text-6xl underline mb-4">{subject.name}</div>
        <div className="grid grid-cols-2 md:grid-cols-3">
            {subject.topics.map((topic) => {return (
              <Link key={topic.href} href={topic.href} className="flex-auto text-wrap rounded border-2 mr-3 mb-3 px-1.5 min-h-32 max-w-96 bg-slate-900">
                <div className="text-base font-bold pb-1 underline pt-1 ">{topic.name}</div>
                <div className="text-sm">{topic.description}</div>
              </Link>
              );})}
        </div></>
        );
      })}
  </div>
  )
}
