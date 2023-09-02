import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        console.log('123')
        fetchFeedback()
    }, [])

    // fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc');
        const data = await response.json()

        console.log(data)
        setFeedback(data);
        setIsLoading(false);
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item ? item : {},
            edit: item ? true : false
        })
    }

    // update feedback item
    const updateFeedbackItem = async (id, updatedItem) => {
        console.log(id, updatedItem)
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        const data = await response.json()
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }

    // add feedback
    const addFeedback = async (feedbackObj) => {

        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackObj)
        })
        const data = await response.json();
        setFeedback([data, ...feedback])
    }

    // delete feedback
    const removeFeedbackItem = async (id) => {
        await fetch('/feedback/' + id, {
            method: 'DELETE'
        })
        setFeedback(feedback.filter(item => item.id !== id))
    }

    return <FeedbackContext.Provider value={{ feedback, removeFeedbackItem, addFeedback, editFeedback, feedbackEdit, updateFeedbackItem, isLoading }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;