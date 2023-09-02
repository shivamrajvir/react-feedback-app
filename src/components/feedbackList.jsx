import FeedbackItem from "./feedbackItem"
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from "react";
import FeedbackContext from './../context/FeedbackContext'
import Spinner from './shared/spinner';


function FeedbackList() {

    const { feedback, isLoading } = useContext(FeedbackContext);

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet!</p>
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item, index) => (
                    <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item, index) => (
    //             <FeedbackItem key={item.id} item={item} removeFeedbackItem={removeFeedbackItem} />
    //         ))}
    //     </div>
    // )
}

export default FeedbackList