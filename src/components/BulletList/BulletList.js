import React from "react";
import "./bulletList.scss";

const BulletList = (props) => {
    const { listItems } = props;

    return (
        <ul className="bullet-list">
            {
                listItems.map(item => (
                <li className="bullet-list__item">
                    <span className="bullet-list__item__text">{item}</span>
                </li>))
            }
        </ul>
    )
}

export default BulletList;