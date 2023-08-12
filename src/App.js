import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/header";
import FeedbackList from './components/feedbackList';
import FeedbackStats from './components/feedbackStats';
import FeedbackForm from './components/feedbackForm';
import AboutPage from './pages/aboutPage';
import AboutIcon from './components/aboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';


// function App() {
//     const title = 'blog post';
//     const body = 'this is blog post';
//     const comments = [
//         { id: 1, text: 'Comment 1' },
//         { id: 2, text: 'Comment 2' },
//         { id: 3, text: 'Comment 3' }
//     ];

//     const loading = false;
//     const showComments = true;

//     if (loading) return <h1>Loading...</h1>

//     const commentsBlock = (<div className="comments">
//     <h3>COmments ({comments.length})</h3>
//     <ul>
//         {comments.map((comment, index) => (
//             <li key={index}>{comment.text}</li>
//         ))}
//     </ul>
// </div>)

//     return (
//         <div className="container">
//             <h1>{title.toUpperCase()}</h1>
//             <p>{body}</p>

//             {/* {showComments ? (<div className="comments">
//                 <h3>COmments ({comments.length})</h3>
//                 <ul>
//                    {comments.map((comment, index) => (
//                         <li key={index}>{comment.text}</li>
//                    ))} 
//                 </ul>
//             </div>): 'No'} */}


//             {/* {showComments && (<div className="comments">
//                 <h3>COmments ({comments.length})</h3>
//                 <ul>
//                     {comments.map((comment, index) => (
//                         <li key={index}>{comment.text}</li>
//                     ))}
//                 </ul>
//             </div>)} */}

//             {showComments && commentsBlock}


//         </div>
//     )
// }

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>

                        </Route>
                        {/* <AboutPage /> */}

                        <Route path="/about" element={<AboutPage />}>

                        </Route>
                    </Routes>
                    <AboutIcon />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;