anychart.onDocumentReady(function() {                
    // Create a tag (word) cloud chart
    anychart.data.loadJsonFile("/data/skills.json", function(data) {
        chart = anychart.tagCloud(data);

        // configure angles
        chart.angles([0]);

        // set text spacing
        chart.textSpacing(5);

        // set the mode of the tag cloud
        //chart.mode("rect");

        chart.tooltip(false);

        // Display the word cloud chart
        chart.container('container');

        // Configure visual settings of the chart
        chart.normal().fontSize(18);        
        chart.normal().fill("#fff", 0.5);
        chart.normal().fontStyle('normal')

        chart.hovered().fontSize(22);
        chart.hovered().fill("#fff", 0.5);
        //chart.hovered().stroke("#303030", 0.1);
        chart.hovered().fontStyle('bold')

        // Set background to be completely transparent
        var background = chart.background();        
        background.fill('#FFF', 0.0);

        chart.draw();

        elements = document.getElementsByClassName("anychart-credits");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    });
});