const input = await Deno.open("day1/input.txt", { read: true });

let inputText = "";
const decoder = new TextDecoder();
for await (const chunk of input.readable) {
  inputText += decoder.decode(chunk);
}

export const lines = inputText.split("\n");
