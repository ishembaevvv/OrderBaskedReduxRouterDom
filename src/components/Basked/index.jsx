import React from "react";
import data from "../../data";
import { useDispatch } from "react-redux";
import { add_order } from "../../store/actions";
import { Link } from "react-router-dom";

export default function Basked() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {data.map((el, id) => {
          return (
            <li key={id} onClick={() => dispatch(add_order(el))}>
              <img className="w-24" src={el.img} /> {el.title}{" "}
              <b>{el.price} com</b>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <button className="border-2 border-black rounded-sm w-28 absolute bottom-3 right-12">
          Order
        </button>
      </Link>
    </div>
  );
}
