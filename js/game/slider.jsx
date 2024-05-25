import React, { useEffect, useRef, useState } from 'react';
import { getGames } from '../api/server';
import '../css/Slider.css';

const Slider = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const [games, setGames] = useState({ slots: [], fishes: [], casinos: [], other: [] });
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  const [maxThumbPosition, setMaxThumbPosition] = useState(0);

  useEffect(() => {
    const fetchGames = () => {
      getGames((data) => {
        try {
          const parsedGames = typeof data === 'string' ? JSON.parse(data) : data;
          if (parsedGames && typeof parsedGames === 'object') {
            setGames(parsedGames);
          } else {
            console.error('Fetched data is not an object:', parsedGames);
          }
        } catch (error) {
          console.error('Failed to parse games data:', error);
        }
      });
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const imageList = imageListRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");

    const updateDimensions = () => {
      setMaxScrollLeft(imageList.scrollWidth - imageList.clientWidth);
      setMaxThumbPosition(sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleScrollbarThumbDrag = (startEvent) => {
    startEvent.preventDefault(); // Ensure default action is prevented
    const startX = startEvent.clientX || startEvent.touches[0].clientX;
    const thumbPosition = scrollbarThumbRef.current.offsetLeft;

    const handleMouseMove = (moveEvent) => {
      moveEvent.preventDefault(); // Ensure default action is prevented
      const clientX = moveEvent.clientX || moveEvent.touches[0].clientX;
      const deltaX = clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumbRef.current.style.left = `${boundedPosition}px`;
      imageListRef.current.scrollLeft = scrollPosition;
    };

    const handleMouseUp = (endEvent) => {
      endEvent.preventDefault(); // Ensure default action is prevented
      document.removeEventListener("mousemove", handleMouseMove, { passive: false });
      document.removeEventListener("mouseup", handleMouseUp, { passive: false });
      document.removeEventListener("touchmove", handleMouseMove, { passive: false });
      document.removeEventListener("touchend", handleMouseUp, { passive: false });
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: false });
    document.addEventListener("mouseup", handleMouseUp, { passive: false });
    document.addEventListener("touchmove", handleMouseMove, { passive: false });
    document.addEventListener("touchend", handleMouseUp, { passive: false });
  };

  const handleSlide = (direction) => {
    const scrollAmount = imageListRef.current.clientWidth * direction;
    imageListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleSlideButtons = () => {
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");
    prevButton.style.display = imageListRef.current.scrollLeft <= 0 ? "none" : "flex";
    nextButton.style.display = imageListRef.current.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageListRef.current.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * maxThumbPosition;
    scrollbarThumbRef.current.style.left = `${thumbPosition}px`;
  };

  useEffect(() => {
    const imageList = imageListRef.current;
    const handleScroll = () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    };
    imageList.addEventListener("scroll", handleScroll);
    return () => {
      imageList.removeEventListener("scroll", handleScroll);
    };
  }, [maxScrollLeft, maxThumbPosition]);

  const renderGameItem = (game) => (
    <React.Fragment key={game.id}>
      <div className="image-item-container">
        <a href={game.url} className="image-item">
          <div className="overlay-image">
            <img src="/gangster_assets/cards/test.png" alt="Overlay" />
            <img src={game.src} alt={`img-${game.id}`} className="game-image" />
          </div>
        </a>
      </div>
      <div className="image-item-gap"></div>
    </React.Fragment>
  );

  return (
    <div className="container">
      <div className="slider-wrapper">
        <button id="prev-slide" className="slide-button material-symbols-rounded" onClick={() => handleSlide(-1)}>
          ←
        </button>
        <ul className="image-list" ref={imageListRef}>
          {games.slots.map(renderGameItem)}
        </ul>
        <button id="next-slide" className="slide-button material-symbols-rounded" onClick={() => handleSlide(1)}>
          →
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div
            className="scrollbar-thumb"
            ref={scrollbarThumbRef}
            onMouseDown={(e) => {
              e.preventDefault();
              handleScrollbarThumbDrag(e);
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              handleScrollbarThumbDrag(e);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
