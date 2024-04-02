document.onload = function() {
    mermaid.initialize({ startOnLoad: false });
    mermaid.run({
      querySelector: '.mermaid-highlight',
    });
};
