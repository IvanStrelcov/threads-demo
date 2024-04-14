import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { regexForValidation } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

// created by chatgpt
export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${time} - ${formattedDate}`;
}

// created by chatgpt
export function formatThreadCount(count: number): string {
  if (count === 0) {
    return "No Threads";
  } else {
    const threadCount = count.toString().padStart(2, "0");
    const threadWord = count === 1 ? "Thread" : "Threads";
    return `${threadCount} ${threadWord}`;
  }
}

export function findWordAtCaret(
  text: string,
  caretPosition: number
): { word: string; start: number; end: number } {
  // Find the start of the word
  let start = caretPosition;
  while (start > 0 && !/\s/.test(text[start - 1])) {
    start--;
  }

  // Find the end of the word
  let end = caretPosition;
  while (end < text.length && !/\s/.test(text[end])) {
    end++;
  }

  // Extract the word
  const word = text.substring(start, end);

  return { word, start, end };
}

export function wrapTagsWithSpan(text: string, className: string): string {
  return text.replace(
    regexForValidation,
    `<span class="${className}">$1</span>`
  );
}

export function replaceWordAtCaret(
  inputString: string,
  caretIndex: number,
  username: string
): { modifiedText: string; endIndex: number } {
  const words = inputString.split(/\s/); // Split the input string into an array of words
  let startIndex = 0;
  let endIndex = 0;
  let currentLength = 0;
  // Find the word containing the caret index
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    startIndex = currentLength;
    endIndex = currentLength + word.length;

    if (caretIndex >= startIndex && caretIndex <= endIndex) {
      // Replace the word
      const wordAndSymbols = words[i].split(/(?=[\@])|(?<=[\W])|(?=\W)/g);
      let newTag = wordAndSymbols[0] + username + (wordAndSymbols[2] || "");
      words[i] = newTag;

      break;
    }

    currentLength = endIndex + 1;
  }

  // Join the modified words back into a string
  const modifiedText = words.join(" ");
  return { modifiedText, endIndex };
}
