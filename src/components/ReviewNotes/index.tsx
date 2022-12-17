import React from "react";

import classes from "./ReviewNotes.module.css";

type Props = {
  title: string;
  notes: string[];
};

const ReviewNotes = ({ title, notes }: Props): JSX.Element | null => {
  if (notes.length === 0) return null;

  return (
    <div className={classes.notes}>
      <h4>{title}</h4>
      <ul>
        {notes.map((currentNote) => (
          <li key={currentNote}>{currentNote}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewNotes;
