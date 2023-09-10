import { useState } from "react";
import Star from "./Star";

const starContainerStyle = {
  display: "flex",
};
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const StarRating = ({
  color = "yellow",
  size = "40px",
  messages = ["Really bad", "Meh", "Not bad", "Good", "Excelent"],
  maxRating = 5,
  defaultValue = 0,
  className = "",
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultValue);
  const [hoverRating, setHoverRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 2}px`,
  };

  const handleRating = (rating) => {
    setRating(rating);
    onSetRating(rating);
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            color={color}
            size={size}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            getRating={() => handleRating(i + 1)}
            onHover={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[hoverRating ? hoverRating - 1 : rating - 1]
          : hoverRating || rating || ""}
      </p>
    </div>
  );
};

export default StarRating;
