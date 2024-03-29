import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Order() {
  const state = useSelector((state) => state.order);

  return (
    <div >
      <h1>Orders</h1>
      <ul>
        {state.map((el, id) => {
          return (
            <li key={id}>
              <img className="w-24" src={el.img} /> {el.title} <b>{el.price} com</b>
            </li>
          );
        })}
      </ul>

      <Link to="/">
        <button className="border-2 border-black rounded-sm w-28 absolute bottom-3 left-12">
          Menu
        </button>
      </Link>
    </div>
  );
}
