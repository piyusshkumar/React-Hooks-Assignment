import { useMemo, useState } from "react";

// In this assignment, you will create a component that rendera a large list of sentences and include an input field for filtering these items 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calcuilated 
// when necessary (e.g) when the filter criteria changes)
// You will learn something new here, specifically how you have to pass more than one value in the dependency array




// This will be provided They have generated bunch of random words 
const words = ["random", "hi", "my", "name", "is", "for", "to", "word"]
const TOTAL_lines = 1000;
const All_words = []

for (let i = 0; i < TOTAL_lines; i++) {
    let sentences = ""
    for (let j = 0; j < words.length; j++) {
        sentences += words[Math.floor(words.length * Math.random())]
        sentences += " "
    }
    All_words.push(sentences)
}

 export function Assignment2() {
    const [sentence, setSentence] = useState(All_words)
    const [filter, setFilter] = useState()


    // it will only re-render when there is change in sentence and filter irrespective of App
    const filtersentence = useMemo(() => {

        return sentence.filter(x => x.includes(filter))

    }, [sentence, filter])


    return <div>
        <input type="text" onChange={e => setFilter(e.target.value)} />
        <br />
        {filtersentence.map(word => <div>
            {word}
        </div>
        )}

    </div>
}

export default App