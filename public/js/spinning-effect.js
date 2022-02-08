'use strict'

AFRAME.registerComponent('spinning-effect', {
    schema:{
        duration: {type:'number', default:20000}
    },
    init: function(){
        //setup called once at creation after aframe scene has loaded

        const CONTEXT_AF = this;
        CONTEXT_AF.walls = document.querySelector('#walls'); //reference the entity that has id walls
        CONTEXT_AF.isSpinning = false;

        CONTEXT_AF.walls.setAttribute('animation', {property:'rotation.y', to:360, loop:true, dur:CONTEXT_AF.data.duration, easing:'linear', enabled:false});

        CONTEXT_AF.el.addEventListener('click', function(){
            if(CONTEXT_AF.isSpinning===true){
                console.log('stop spinning');
                CONTEXT_AF.walls.setAttribute('animation', {enabled:false});
                CONTEXT_AF.isSpinning=false; 
            }
            else{
                console.log('start spinning');
                CONTEXT_AF.walls.setAttribute('animation', {enabled:true});
                CONTEXT_AF.isSpinning=true; 
            }
        });
    }

    
});
