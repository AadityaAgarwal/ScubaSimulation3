AFRAME.registerComponent("scuba",{
  schema:{
      speed_of_rotation:{type:"number",default:0},
      speed_of_ascend:{type:"number",default:0},
  },
  init:function(){
      window.addEventListener("keydown",e=>{
          this.data.speed_of_rotation=this.el.getAttribute("rotation")
          this.data.speed_of_ascend=this.el.getAttribute("position")
          var scuba=this.data.speed_of_rotation
          var scuba=this.data.speed_of_ascend

          if(e.key==="ArrowRight"){
              if(scuba.x<10){
                  scuba.x+=0.5
                  this.el.setAttribute("rotation",scuba)
              }
          }
          if(e.key==="ArrowLeft"){
              if(scuba.x>-10){
                  scuba.x-=0.5
                  this.el.setAttribute("rotation",scuba)
              }
          }
          if(e.key==="ArrowUp"){
              if(scuba.z<20){
                  scuba.z+=0.5
                  this.el.setAttribute("rotation",scuba)
              }
              if(scuba.y<2){
                  scuba.y+=0.01
                  this.el.setAttribute("position",{x:scuba,x,y:scuba.y,z:scuba.z})
              }
          }
          if(e.key==="ArrowDown"){
              if(scuba.z>-10){
                  scuba.z-=0.5
                  this.el.setAttribute("rotation",scuba)
              }
              if(scuba.y>-2){
                  scuba.y-=0.01
                  this.el.setAttribute("position",scuba)
              }
          }
      })
  },
})