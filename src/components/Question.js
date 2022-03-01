import { useRef, useState } from "react"

function Question( props ) {
    const [show, setShow] = useState(false)

    const question = useRef()
    const desc = useRef()

    const showQuestion = () => {
        const { height } = desc.current.getBoundingClientRect()
        question.current.style.height = `${65 + height + 20}px`
    }

    const hideQuestion = () => {
        question.current.style.height = "65px"
    }

    const handleToggle = (e) => {
        if(e.target.classList.contains("plus")){
            showQuestion()
            setShow(true)
        }
        if(e.target.classList.contains("minus")){
            hideQuestion()
            setShow(false)
        }
    }

    console.log(show)
    return(
        <div ref={question} onClick={handleToggle} className={`question ${show ? "active" : ""}`}>
            <div className="header">
                <h3>{props.question.question}</h3>
                {show ? <i className="bi bi-patch-minus-fill minus"></i> : <i className="bi bi-patch-plus-fill plus"></i>}
            </div>
            <p ref={desc} className="desc">{props.question.desc}</p>
        </div>
    )
}

export default Question