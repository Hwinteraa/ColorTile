game.bop = {
  bopped: true,
  total:0,
  draw: function(){
    atom.context.fillStyle = '#000';
    atom.context.font = '130px monospace';
    atom.context.fillText('Score: ' + this.total, 300, 200);
  },
  with_key: function(key){
    if (!!(game.activeMole + 1) === true && key === game.holes[game.activeMole].label){
      this.total = this.total+1;
      game.activeMole = -1;
      this.bopped = true;
    }
    else{
      this.total = this.total-1;
    }
  }
};