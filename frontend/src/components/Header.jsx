import React from "react";

export default function Header({ query, setQuery, tag, setTag, onReset }) {
  return (
    <header className="header">
      <div className="brand" onClick={onReset} role="button" tabIndex={0}>
        <div className="logo">SB</div>
        <div>
          <div className="brandTitle">Klarer Code</div>
          <div className="brandSubtitle">Notizen über Entwicklung — ohne Show</div>
        </div>
      </div>

      <div className="controls">
        <input
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Suche: react, docker, api..."
        />

        <select className="select" value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="">Alle Tags</option>
          <option value="react">react</option>
          <option value="architektur">architektur</option>
          <option value="praxis">praxis</option>
          <option value="docker">docker</option>
          <option value="compose">compose</option>
          <option value="devops">devops</option>
          <option value="api">api</option>
          <option value="rest">rest</option>
          <option value="best-practices">best-practices</option>
        </select>

        <button className="btn" onClick={onReset}>Zurücksetzen</button>
      </div>
    </header>
  );
}
