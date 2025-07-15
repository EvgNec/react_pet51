import { useEffect, useRef, useState } from 'react'

export default function UseRef() {

    const [value, setValue] = useState(0);
    const btnRef = useRef();
// Буде null на першому рендері
// і посиланням на DOM-елемент всі наступні
console.log("1 перший рендер",btnRef.current);

useEffect(() => {
// Ефект виконується після монтування,
// тому завжди буде посиланням на DOM-елемент
  console.log("2 після монтування",btnRef.current);
});

const handleClick = () => {
// Кліки будуть після монтування,
// тому завжди буде посиланням на DOM-елемент
  console.log("3 Кліки будуть після монтування",btnRef.current);
};

return (
  <>
    <button onClick={() => setValue(value + 1)}>
      Update value to trigger re-render
    </button>
    <button ref={btnRef} onClick={handleClick}>
      Button with ref
    </button>
  </>
);
};
