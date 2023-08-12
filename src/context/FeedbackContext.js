import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item : item ? item : {},
            edit: item ? true : false
        })
    }

    // update feedback item
    const updateFeedbackItem = (id, updatedItem) => {
        console.log(id, updatedItem)
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem } : item))
    }

    // add feedback
    const addFeedback = (feedbackObj) => {
        feedbackObj.id = +new Date();
        setFeedback([feedbackObj, ...feedback])
    }

    // delete feedback
    const removeFeedbackItem = (id) => {
        setFeedback(feedback.filter(item => item.id !== id))
    }

    return <FeedbackContext.Provider value={{ feedback, removeFeedbackItem, addFeedback, editFeedback, feedbackEdit, updateFeedbackItem }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;