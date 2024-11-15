# formula-parser

# TODO
Categorize tokens according to the common nomenclature?
- variable --> identifier
- symbol --> operator, separators (brackets)
Error when finding unknown token type during tokenizing
Store position of tokens and bring them into the AST
Off-by-one error in Error line and column when peeking next token's starting character (eg. if emoji cause error)
Emojis don't work 🙁
