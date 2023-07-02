// Sources:

export async function splitFileToLines(filepath: string) {
  const input = await Deno.open(filepath, { read: true });

  let inputText = "";
  const decoder = new TextDecoder();
  for await (const chunk of input.readable) {
    inputText += decoder.decode(chunk);
  }

  return inputText.split("\n");
}
