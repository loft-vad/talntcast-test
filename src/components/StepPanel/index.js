import React from 'react';

import s from './style.module.scss';
import cn from 'classnames';
import { ICONS } from "../../svg_icons";

const StepPanel = React.forwardRef(({ idx, title, isActive, isFulfilled, children }, ref) => {
  return (
    <div
      className={cn(s.wrapper, {
        [s.active]: isActive === true,
        [s.fullfiled]: isFulfilled === true
      })}
      ref={ref}
    >
      <div className={s.header}>
        {!isFulfilled && (
          <em className={s.tickCounter}>{idx}</em>
        )}
        {isFulfilled && (
          <em className={s.tickMark}>{ICONS.tick}</em>
        )}
        <h2>{title}</h2>
      </div>
      <div className={s.stepContent}>
        {children}
      </div>
    </div>
  )
});

export default StepPanel;