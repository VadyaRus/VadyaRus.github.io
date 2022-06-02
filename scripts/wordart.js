anychart.onDocumentReady(function() {                
    // Create a tag (word) cloud chart
    anychart.data.loadJsonFile("/data/skills.json", function(data) {
        chart = anychart.tagCloud(data);

        // configure angles
        chart.angles([0]);

        // set text spacing
        chart.textSpacing(5);

        // set the mode of the tag cloud
        chart.mode("spiral");

        chart.tooltip(false);
        chart.fontFamily('Arial');
        chart.fontVariant('small-caps');

        // Display the word cloud chart
        chart.container('container');


        // Configure visual settings of the chart
        //chart.normal().height(12);        
        chart.normal().fill("#fff", 0.5);
        chart.selected().fill("#fff", 0.5);
        //chart.selected().fontWeight(700);

        //chart.hovered().fontSize(22);
        chart.hovered().fill("#fff", 0.5);
        //chart.hovered().stroke("#303030", 0.1);
        //chart.hovered().fontWeight(700);

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