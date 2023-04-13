import { useState } from "react"


function InputForm () {
    const [formData, setFormData] = useState({
        title: "",
        year: "",
        img: "",
    })

    return(
        <div className="container">
            <form className="addBookForm">
                <h3>Add a Book!</h3>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Enter Book's Title..."
                    className="input-text"
                    />
                <br />
                <input
                    type="text"
                    name="year"
                    value={formData.year}
                    placeholder="Enter Book's Year..."
                    className="input-text"
                    />
                <br />
                <input 
                    type="text"
                    name="img"
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