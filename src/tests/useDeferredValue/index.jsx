import { useState, useTransition, useDeferredValue, useEffect } from 'react';
import './index.css';

export default function FilterList({ names }) {
  const [highlight, setHighlight] = useState('');
  const [isPending, startTransition] = useTransition();
  const [num, setNum] = useState(0);
  const deferredValue = useDeferredValue(highlight);
  // 输入框变动
  const changeHandler = ({ target: { value } }) => {
    // startTransition(() => {
      setHighlight(value)
    // });
  };

  useEffect(() => {
    let timer = null;
    if (timer) {
      clearTimeout(timer);
    }
    for (let index = 0; index < 20000; index++) {
      timer = setTimeout(() => {
        setNum(index)
      }, 1000)
    }
  }, [])

    
  return (
    <div>
      <input onChange={changeHandler} type="text" />
      <div>更新{num}</div>
      {names.map((item, i) => (
        <ListItem key={i} name={item.name} highlight={deferredValue} />
      ))}
    </div>
  );
}

function ListItem({ name, highlight }) {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return <span>{name}</span>;
  }
  return (
    <span>
      {name.slice(0, index)}
      <span className="highlight">
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </span>
  );
}