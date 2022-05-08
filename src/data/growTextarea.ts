import { ChangeEvent } from 'react';

const growTextarea = (event: ChangeEvent<any>, defaultHeight = '64px') => {
  if (event) {
    const target = event.target ? event.target : event;
    target.style.height = defaultHeight;
    target.style.height = `${target.scrollHeight}px`;
  }
};

export default growTextarea;
