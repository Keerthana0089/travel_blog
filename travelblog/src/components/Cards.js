import React from "react";

export default function Cards(props) {
  // Dynamically import the image from the public folder or relative path
  const imgSrc = require(`../images/${props.item.coverImg}`);

  return (
    <div className="card">
      <section className="column-left">
        <img className="card-img" src={imgSrc} alt={props.item.title} />
      </section>
      <section className="column-right">
        <span className="material-symbols-outlined">location_on</span>
        <span className="card-country">{props.item.country} </span>
        <a
          href={props.item.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <h3 className="card-country-title">{props.item.title}</h3>
        <h4 className="card-date">{props.item.date}</h4>
        <p>{props.item.description}</p>
        <span>Read more..</span>
      </section>
    </div>
  );
}
