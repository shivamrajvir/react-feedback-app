import Card from "./shared/card";
import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('This is an example of feedback');

  const {removeFeedbackItem, editFeedback} = useContext(FeedbackContext);

  return (
    // reverse={true}
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => removeFeedbackItem(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
