const TokenType = {
  INVALID: 0,
  OPEN_TAG: 1,
  CLOSE_TAG: 2,
  CONTENT: 3,
  END: 4,
};

function Token(type, value) {
  this.type = type;
  this.value = value;
}

function Lexer(input) {
  this.input = input;
  this.current = 0;
  this.next = 0;
  this.char = "";
}

function readChar(lexer) {
  if (lexer.next >= lexer.input.length) {
    lexer.char = 0;
  } else {
    lexer.char = lexer.iput[lexer.next];
  }
  lexer.current = lexer.next;
  lexer.next++;
}

function peekChar(lexer) {
  if (lexer.next >= lexer.input.length) {
    return 0;
  }
  return lexer.input[lexer.next];
}

function createLexer(input) {
  const lexer = Lexer(input);
  readChar(lexer);
  return lexer;
}

function nextToken(lexer) {
  const tok = Token(0, 0);
  switch (lexer.char) {
    case "<":
      break;
    case "/":
      break;
    case 0:
      tok.type = TokenType.END;
      break;
  }
  return tok;
}

async function fetchUrlText(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("invalid response");
      return;
    }

    if (
      !response.headers.get("content-type") ||
      !response.headers.get("content-type").includes("text/html")
    ) {
      console.error("invalid header");
      return;
    }
    const text = await response.text();
    return text;
  } catch (e) {
    console.error(e.message);
  }
}

async function parseHTML(url) {
  const text = await fetchUrlText(url);
  console.log(text);
}

function tokenize(html) {
  const tokens = [];
  let cursor = 0;

  while (cursor < html.length) {
    const current = html[cursor];
    const next = cursor + 1 === html.length ? 0 : html[cursor + 1];

    if (current === "<" && next !== "/") {
    } else if (current === "<" && next === "/") {
    }
  }
}

export { parseHTML };
