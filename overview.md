```mermaid
graph LR
  IO1[io<br/>output-regels]
  VAR1[variabelen<br/>Initialisatie]
  IO2[io<br/>Input]
  VAR2[io<br/>Datatypes]

  IO1 --> VAR1
  VAR1 --> VAR2
  VAR2 --> IO2
  IO2 --> VAR3

```