import React from "react";
import "./events.css";
import a from "../../assets/a.jpg";
import b from "../../assets/b.jpg";

const eventData = [
  {
    id: 0,
    name: "Intro",
    img: a,
  },
  {
    id: 1,
    name: "Event",
    links: [
      {
        link_name: "Ubicación ceremonia",
        link: "https://maps.app.goo.gl/DQtd21p7uGPta21B9",
      },
      {
        link_name: "Ubicación recepción",
        link: "https://maps.app.goo.gl/9GEcAv8iSkF2zDq68",
      },
      {
        link_name: "Mesa de regalos",
        link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51657826",
      },
    ],
    img: b,
  },
];

const Events = () => {
  const openExternalMap = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section>
      {eventData.map(({ id, name, img, links }) => (
        <div className="cardEvent" key={id}>
          {img && <img className="event_img" src={img} alt={name || "Evento"} />}
          {links &&
            links.map(({ link_name, link }, index) => (
              <button
                key={index}
                className="button"
                onClick={() => openExternalMap(link)}
              >
                {link_name}
              </button>
            ))}
        </div>
      ))}
    </section>
  );
};

export default Events;