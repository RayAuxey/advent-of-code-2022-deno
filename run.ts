const args = Deno.args;

if (args.length != 2) {
  console.log("Usage: deno task <day[x]> <part[x]>");
  Deno.exit(1);
}

const day = args[0];
const part = args[1];

// deno-lint-ignore no-deprecated-deno-api
const p = Deno.run({
  cmd: ["deno", ...`run --allow-read src/${day}/${part}.ts`.split(" ")],
  stdout: "piped",
  stderr: "piped",
});

const [status, stdout, stderr] = await Promise.all([
  p.status(),
  p.output(),
  p.stderrOutput(),
]);

const decoder = new TextDecoder();
if (stderr.length > 0) {
  console.log("Errors");
  console.log("============");

  console.log(decoder.decode(stderr));
}

if (!status.success) {
  console.log("\n=========================");
  console.log("Process exited abnormally:", status.code);
  p.close();
  Deno.exit(1);
}

if (stdout.length > 0) {
  console.log("Output");
  console.log("============");
  console.log(decoder.decode(stdout));
}

console.log("\n==========================");
console.log("Process exited successfully:");
p.close();
