import Link from "next/link"

const questions = [
  {id:1 ,  Question: 'what is the tdfghnkjnklmlk,.ml  yfghuilkm;l;,/l  uyggf6tuyfgyujkjlojoi  iu7yftyfg.....', CorrectAnswers: '10', IncorrectAnswers: '7'},
  {id:2,  Question: 'what is the tdfghnkjnklmlk,.ml  yfghuilkm;l;,/l  uyggf6tuyfgyujkjlojoi  iu7yftyfg.....', CorrectAnswers: '10', IncorrectAnswers: '7'},

]

export default function QuestionTable() {
  return (
    <div className="px-4 sm:px-6  ">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
       
        </div>
        <div className=" sm:ml-16 sm:mt-0 sm:flex-none">
       
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-16 ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Question
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Correct Answer
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Incorrect Answer
                    </th>
                   
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {questions.map((questions) => (
                    <tr key={questions.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {questions.Question}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{questions.CorrectAnswers}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{questions.IncorrectAnswers}</td>
            
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link href={`/admin/chart/${questions.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Show Chart
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
