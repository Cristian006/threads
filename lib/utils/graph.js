// Function to append ellipsis to text if it exceeds the available width
const appendTextWithEllipsis = (content, text, startX, y, maxWidth) => {
  const textElement = content.append('text')
    .attr('x', startX + 5)
    .attr('y', y + 5)
    .attr('dy', '0.32em')
    .attr('font-size', '10px')
    .attr('fill', 'black')
    .text(text);

  // Calculate the width of the text and trim if necessary
  let textLength = textElement.node().getComputedTextLength();
  let textContent = text;
  while (textLength > maxWidth - 10 && textContent.length > 0) { // 10px padding
    textContent = textContent.slice(0, -1); // Remove one character at a time
    textElement.text(`${textContent}...`); // Append ellipsis
    textLength = textElement.node().getComputedTextLength();
  }
};

export { appendTextWithEllipsis };