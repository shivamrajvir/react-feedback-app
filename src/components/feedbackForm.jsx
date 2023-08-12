import { useContext, useState, useEffect } from 'react';
import Card from './shared/card';
import Button from './shared/button';
import RatingSelect from './ratingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedbackItem, editFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])


    const textChanged = (event) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        }
        else if (text !== '' && text && text.trim().length < 10) {
            setBtnDisabled(true);
            setMessage('Text must be atleast 10 characters')
        }
        else {
            setBtnDisabled(false);
            setMessage(null)
        }
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length >= 10) {
            if (feedbackEdit.edit) {
                const editFeedbackObj = {
                    text, rating
                }
                updateFeedbackItem(feedbackEdit.item.id, editFeedbackObj);
                editFeedback(undefined);
            }
            else {
                const newFeedback = {
                    text, rating
                }
                addFeedback(newFeedback)
            }
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder='write a review' value={text} onChange={textChanged} />
                    <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm