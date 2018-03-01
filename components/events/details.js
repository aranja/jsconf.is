import React from "react";
import "./details.scss";
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";

const hearts = `url(${require("../../images/hearts.png")})`;
const calendar = `url(${require("../../images/calendar.png")})`;

const Details = ({
  title,
  description,
  track,
  isActive,
  name,
  link,
  slug,
  time,
  onNext,
  onPrevious,
  onSave,
  savedSlugs,
  onClose,
  onCalendar
}) => (
  <div className={`Details${isActive ? " is-active" : ""}`}>
    {!isActive ? null : (
      <div>
        <div className="Details-controls">
          <button
            aria-label="Close details view"
            className="Details-closeBtn"
            onClick={onClose}
          >
            <i className="Details-close" />
          </button>
          <button aria-label="Previus talk" onClick={onPrevious}>
            <i className="Details-leftArrow" />
          </button>
          <button aria-label="Next talk" onClick={onNext}>
            <i className="Details-rightArrow" />
          </button>
          <button
            aria-label={
              savedSlugs[slug] ? "Mark as favorite" : "Unmark as favorite"
            }
            onClick={onSave}
          >
            <i
              className={`Events-heart${savedSlugs[slug] ? " is-filled" : ""}`}
              style={{ backgroundImage: hearts }}
            />
          </button>
          <button aria-label="Add to calendar" onClick={onCalendar}>
            <i
              className={"Events-calendar"}
              style={{ backgroundImage: calendar }}
            />
          </button>
        </div>
        <h2 className="Details-title">{title}</h2>
        {name && (
          <p>
            <Link className="u-base-link" to={prefixLink(link)}>
              {name}
            </Link>
          </p>
        )}
        <div className="Details-meta">
          {track === undefined || track === "unified" ? null : (
            <span>
              <span className="Details-track">{track}</span> /{" "}
            </span>
          )}
          <span className="Details-time">{time.replace(" ", " - ")}</span>
        </div>
        <div
          className="Details-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    )}
  </div>
);

Details.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  name: React.PropTypes.string,
  slug: React.PropTypes.string,
  link: React.PropTypes.string,
  time: React.PropTypes.string,
  company: React.PropTypes.string,
  track: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  savedSlugs: React.PropTypes.object,
  onClose: React.PropTypes.func,
  onNext: React.PropTypes.func,
  onPrevious: React.PropTypes.func,
  onSave: React.PropTypes.func,
  onCalendar: React.PropTypes.func
};

export default Details;
