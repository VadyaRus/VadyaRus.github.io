anychart.onDocumentReady(function() {                
    // Create a tag (word) cloud chart
    anychart.data.loadJsonFile("/data/skills.json", function(data) {
        chart = anychart.tagCloud(data);

        // configure angles
        chart.angles([0]);

        // set text spacing
        chart.textSpacing(5);

        // set the mode of the tag cloud
        chart.mode("rect");

        chart.tooltip(false);

        // Display the word cloud chart
        chart.container('container');
        chart.draw();

        elements = document.getElementsByClassName("anychart-credits");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    });
});