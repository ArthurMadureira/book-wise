export const TextWithEllipsis = (text: string) => {
  const truncatedText = text.length > 230 ? `${text.slice(0, 230)}` : text;

  return truncatedText
}