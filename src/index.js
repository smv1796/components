import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import faker from "faker";
const App=()=>{
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" date="Toady at 9:00 am" blogText="Nice bolg post!" image={faker.image.avatar()}/>
            <CommentDetail author="Alex" date="Yestarday at 2:00 pm" blogText="Mast hai re!" image={faker.image.avatar()}/>
            <CommentDetail author="Babbu" date=" few seconds ago" blogText="Cool!" image={faker.image.avatar()}/>
        </div>
    );
};


ReactDOM.render(<App></App>,document.getElementById("root"));
