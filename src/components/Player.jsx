import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  let [isEditing, setIsEditing] = useState(false);
  let buttonCaption = "Edit";
  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editingPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editingPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editingPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleClick()}>{buttonCaption}</button>
    </li>
  );
}
