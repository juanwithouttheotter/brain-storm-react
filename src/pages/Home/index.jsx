import React, {useState, useEffect} from "react";
import SearchBar from "../../components/SearchBar"

function Home() {
    const [input, setInput] = useState('');
    const [lessonListDefault, setLessonListDefault] = useState();
    const [lessonList, setLessonList] = useState();

    const fetchData = async () => {
        return await fetch("https://api.thecatapi.com/v1/breeds")
        .then(res => res.json())
        .then(data => {
            setLessonList(data);
            setLessonListDefault(data);
        });
    }

    const updateInput = async (input) => {
         const filtered = lessonListDefault.filter(lesson => {
             return lesson.name.toLowerCase().includes(input.toLowerCase())
         })
         setInput(input);
         setLessonList(filtered);
    }

    useEffect( () => {fetchData()}, []);


    return (
        <div>
            <SearchBar 
            input={input}
            onChange={updateInput}
            />
        </div>
    );
}

export default Home;