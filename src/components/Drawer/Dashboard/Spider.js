import { Chart as ChartJS } from 'react-chartjs-2'
charrt=function(){
var helpers = Chart.helpers;

var eventPosition = helpers.getRelativePosition(e, myRadarChart.chart);
var mouseX = eventPosition.x;
var mouseY = eventPosition.y;

var activePoints = [];
helpers.each(myRadarChart.scale.ticks, function (label, index) {
    for (var i = this.getValueCount() - 1; i >= 0; i--) {
        var pointLabelPosition = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max) + 5);

        var pointLabelFontSize = helpers.getValueOrDefault(this.options.pointLabels.fontSize, Chart.defaults.global.defaultFontSize);
        var pointLabeFontStyle = helpers.getValueOrDefault(this.options.pointLabels.fontStyle, Chart.defaults.global.defaultFontStyle);
        var pointLabeFontFamily = helpers.getValueOrDefault(this.options.pointLabels.fontFamily, Chart.defaults.global.defaultFontFamily);
        var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);
        ctx.font = pointLabeFont;

        var labelsCount = this.pointLabels.length,
            halfLabelsCount = this.pointLabels.length / 2,
            quarterLabelsCount = halfLabelsCount / 2,
            upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
            exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
        var width = ctx.measureText(this.pointLabels[i]).width;
        var height = pointLabelFontSize;

        var x, y;

        if (i === 0 || i === halfLabelsCount)
            x = pointLabelPosition.x - width / 2;
        else if (i < halfLabelsCount)
            x = pointLabelPosition.x;
        else
            x = pointLabelPosition.x - width;

        if (exactQuarter)
            y = pointLabelPosition.y - height / 2;
        else if (upperHalf)
            y = pointLabelPosition.y - height;
        else
            y = pointLabelPosition.y
        
        if ((mouseY >= y && mouseY <= y + height) && (mouseX >= x && mouseX <= x + width))
            activePoints.push({ index: i, label: this.pointLabels[i] });
    }
}, myRadarChart.scale);

var firstPoint = activePoints[0];
if (firstPoint !== undefined) {
    alert(firstPoint.index + ': ' + firstPoint.label);
}
}