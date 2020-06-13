import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export default function Block({ className, icon, title, href, children }) {
  return (
    <div className={classNames('block', className)}>
      {icon && <div className="icon">{icon}</div>}
      {title && (
        <h2 className="block__title">
          {href ? (
            <Link href={href}>
              <a>{title}</a>
            </Link>
          ) : (
            title
          )}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
}
