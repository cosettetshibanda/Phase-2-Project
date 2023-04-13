import { useState } from "react"
import { useHistory } from "react-router-dom"


function InputForm ({onAddBook}) {
    const [formData, setFormData] = useState({
        title: "",
        year: "",
        img: "",
    })

    const history = useHistory()

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        const newBook = {
            ...formData
        }

        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
             body: JSON.stringify(newBook),
            })
             .then((r) => r.json())
             .then(onAddBook)
             .then(history.push(`/`))
    }
    

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="addBookForm">
                <h3>Add a Book!</h3>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                    placeholder="Enter Book's Title..."
                    className="input-text"
                    />
                <br />
                <input
                    type="text"
                    name="year"
                    onChange={handleChange}
                    value={formData.year}
                    placeholder="Enter Book's Year..."
                    className="input-text"
                    />
                <br />
                <input 
                    type="text"
                    name="img"
                    onChange={handleChange}
                    value={formData.img}
                    placeholder="Enter Book's image URL..."
                    className="input-text"
                    />
                <input 
                type="submit"
                name="submit"
                value="Create Book"
                className="submit"
                />
            </form>
        </div>
     )
    }


export default InputForm