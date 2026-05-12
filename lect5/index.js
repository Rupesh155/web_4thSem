let canvas=document.querySelector("canvas")
  let pen=   canvas.getContext("2d")
  let snakeCell=[[0,0]]
  let cell=50
  function draw(){
    pen.fillStyle="red"
    for(let a of snakeCell){
        pen.fillRect(a[0],a[1],cell,cell)

    }
  }
  draw()
  function update(){
  let headX=  snakeCell[snakeCell.length-1][0]
  let headY=  snakeCell[snakeCell.length-1][1]

 let newX=     headX+cell
  let newY=    headY
  snakeCell.push([newX,newY])
       



  }

  setInterval(()=>{
    draw()
    update()

  },1000)
