


type Question = {

    category : string,
    correct_answer : string,
    question : string,
    incorrect_answers : string[],
    type : string,
    
}

export type QuestionStack = Question & {answers : string[]}

export const fetchQuiz = async (amount : number , difficulty: string)=>{
    console.log(difficulty)
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
    const res = await  fetch(endpoint)
   const data = await res.json().catch(err => console.log(err));
    return data.results.map((question : Question) => (
        {
            ...question,
            answers :[...question.incorrect_answers , 
                question.correct_answer]
        }
    ))
}