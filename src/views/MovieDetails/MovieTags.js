import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MovieTags({ tags }) {
  useEffect(()=>{
    
  })
  return (
    <div className="zmovo-tags">
      <strong>Từ khóa :</strong>
      <ul className="list">
        {
          tags && tags.map((item,key)=>{
            return <li key={key} className="tag"><Link to={`/tu-khoa/${item}`}>#{item.replace(/%20/g, " ")}</Link></li>
          })
        }
      </ul>
    </div>
  );
}
