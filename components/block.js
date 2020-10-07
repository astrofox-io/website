import React from 'react';
import classNames from 'classnames';

export default function Block({ className, icon, title, href, linkClassName, children }) {
  return (
    <div className={classNames('block center col-12 col-sm-10 col-lg-4 mb-5', className)}>
      {icon && <div className="icon">{icon}</div>}
      {title && (
        <h2>
          {href ? (
            <a href={href} className={linkClassName} target="_blank">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
}
