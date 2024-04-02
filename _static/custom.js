document.onload = function() {
    elements = document.querySelectorAll(".highlight-mermaid pre span");
    elements.forEach(e => e.remove());

    mermaid.initialize({ startOnLoad: false });    
    mermaid.run({
      querySelector: '.highlight-mermaid pre',
    });
};
