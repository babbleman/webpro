
function changestone(m){
  var x=document.getElementById(m);
  x.setAttribute('style','background:white');
}


class board{
  constructor(){
    this.board=[];
    for(var i=1;i<10;i++){
      var  x=[]
      for(var j=1;j<10;j++){
        x.push(0)
      }
      this.board.push(x)
    }
    this.board[3][4]=1;
    this.board[4][3]=1;
    this.board[3][3]=2;
    this.board[4][4]=2;

    this.turn=1
  }
get alert(){
    alert("hi");
  }
get drawboard{
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      var turn;
      if (this.board[i][j]==1){
        turn="black"
      }
      else{
        if(this.board[i][j]==2){
          turn="white"
        }
        else{
          turn="green"
        }
      }
      document.getElementById(10*(i+1)+j+1).setAttribute('style','background:'+turn);
    }
  }

}

  // function changeturn(){
  //
  //   if(this.turn==1){
  //     this.turn=2;
  //   }
  //   else{
  //     this.turn=1;
  //   }
  // }
}
