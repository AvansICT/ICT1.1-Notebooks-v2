window.addEventListener('load', function() {
    
    console.log("Initializing");
    elements = document.querySelectorAll(".highlight-mermaid pre span");
    console.log(elements.length + " spans");
    elements.forEach(e => e.remove());
    elements = document.querySelectorAll(".highlight-mermaid pre span");
    console.log(elements.length + " spans after remove");

    mermaid.initialize({ startOnLoad: false });    
    mermaid.run({
      querySelector: '.highlight-mermaid pre',
    });
});