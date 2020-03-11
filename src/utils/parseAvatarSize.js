const parseSize = size => {
  if (size === "small" || size === "middle" || size === "large") return size;

  const [width, height] = size.split(",");
  if (
    isNaN(Number(width)) ||
    isNaN(Number(height)) ||
    !Number(width) ||
    !Number(height)
  )
    return "small";

  return { width: `${width.trim()}px`, height: `${height.trim()}px` };
};

export default parseSize;
