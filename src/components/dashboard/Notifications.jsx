import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications ? (
              notifications.map(notification => {
                return (
                  <li key={notification.id}>
                    <span className="pink-text">{notification.user} </span>
                    <span>{notification.content} </span>
                    <span className="grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </span>
                  </li>
                );
              })
            ) : (
              <p className="grey-text">No Notifications</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
