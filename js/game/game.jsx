import React, { useState, useEffect, useRef } from 'react';
import { getGames } from '../api/server';

const GameComponent = () => {
  const [games, setGames] = useState({ slots: [], fishes: [], casinos: [], other: [] });
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    getGames((e) => {
      if (isMounted.current) {
        try {
          const parsedGames = JSON.parse(e);
          if (parsedGames && typeof parsedGames === 'object') {
            setGames(parsedGames);
          } else {
            console.error('Fetched data is not an object:', parsedGames);
          }
        } catch (error) {
          console.error('Failed to parse games data:', error);
        }
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  const renderGameItem = (game) => {
    return (
      <li style={{ color: 'white' }} key={game.id}>
        <div>Tag: {game.tag}</div>
        <div>URL: <a style={{ color: 'white' }} href={game.url}>{game.url}</a></div>
        <div>Size: {game.size}</div>
        <div>Orientation: {game.orientation}</div>
        <div>Src: {game.src}</div>
      </li>
    );
  };

  return (
    <div>
      <h1>Games</h1>
      <div>
        <h2>Slots</h2>
        <ul>
          {games.slots.map(renderGameItem)}
        </ul>
        <h2>Fishes</h2>
        <ul>
          {games.fishes.map(renderGameItem)}
        </ul>
        <h2>Casinos</h2>
        <ul>
          {games.casinos.map(renderGameItem)}
        </ul>
        <h2>Other</h2>
        <ul>
          {games.other.map(renderGameItem)}
        </ul>
      </div>
    </div>
  );
};

export default GameComponent;
