import { argv } from "process";

async function main() {
  if (argv.length < 3) {
    console.error("please provide a website");
    return;
  }

  if (argv.lengh > 4) {
    console.error("too many arguments");
    return;
  }

  const baseURL = argv[2];
}

main();
