
import { useState, useRef, useEffect } from 'react';

function SearchBox() {
  const [search, setSearch] = useState('');

  const inputRef = useRef(null);
  const renderCount = useRef(0);

  renderCount.current++;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Search Box</h2>

      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type something..."
      />

      <p>You searched for: {search}</p>

      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}

export default SearchBox;
