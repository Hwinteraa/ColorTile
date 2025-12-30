game.hole = {
  size: 40,
  spacing: 280,
  color: '#311',
  labelOffset: 140,
  labelColor: '#000',
  labelFont: "130px monospace",
  draw: function(holeLocation, holeLabel){
    atom.context.beginPath(); 
    atom.context.arc(holeLocation[0], atom.height/2+holeLocation[1], this.size, 0, Math.PI*2, false); 
    atom.context.fill();
    atom.context.fillStyle = this.labelColor;
    atom.context.font = this.labelFont;
    atom.context.fillText(holeLabel, holeLocation[0] - this.size, atom.height/2+holeLocation[1] + this.labelOffset);
  }
};