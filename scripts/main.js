//██████████ DESKTOP SETUP ██████████
let desktop = {};
//██████████ DRAG FUNCTIONALITY ██████████
desktop.drag = function(){
    $('.dragWindow').draggable({ containment: ".computer", scroll: false, handle: ".appToolBar", stack: ".window"});
    $('.dragIcon').draggable({ containment: ".computer", scroll: false});
    $('.trashIcon').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    })
};
//██████████ WINDOWS ██████████
desktop.window = function(){
    console.log('CLOSE FUNCTION LOADED')
    //CLOSE WINDOWS (POSSIBLY CLOSES ONLY ONE WINDOW?? 05-03-2:54PM)
    $('.close').click(function(){
        $(this).closest(".window").hide();
        console.log('CLOSED');
    })
    //DBLCLICK ICONS
    $('.notepadIcon').dblclick(function(){
        $('.notepadWindow').show().find("textarea").focus();
    })
    $('.musicIcon').dblclick(function(){
        $('.musicWindow').show();
    })
}
//██████████ TOOLBAR CLOCK ██████████
//desktop.toolbarClock = function(){
//    let toolbarClockTime = new Date();
//    $('.clock').text(`${toolbarClockTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`);
//}
desktop.toolbarClock = function update(){
        $('.clock').html(moment().format(`h:mm:ss A`));
setInterval(update, 1000);
}

//██████████ NOTEPAD ██████████
//NOTEPAD WINDOW SETUP
desktop.notepad = function(){
    let notepadText = 'TEST';
//2.POPULATE TEXTAREA WITH STRING STORED IN NOTEPAD VARIABLE
    $('.notepadTextArea').val(`${notepadText}`);
    console.log(`STARTING STRING: ${notepadText}`);
//3.PRESS SAVE TO SAVE TEXTAREA TO NOTEPAD VARIABLE (OVERWRITE)
    //TODO: RESOLVE SCOPE ISSUE FOR CLOSING WINDOW
    $('.save').click(function(){
        notepadText = $('.notepadTextArea').val();
        console.log(`SAVED: ${notepadText}`);
    });
    $('.notepadClose').click(function(){
            $('.notepadTextArea').val(`${notepadText}`);
            console.log(`WINDOW CLOSED, SAVED STRING INSERTED: "${notepadText}"`);
        });
    
}
//██████████ MUSIC APP ██████████
//MUSIC WINDOW SETUP

//

//██████████ INIT SETUP ██████████
desktop.init = function(){
    desktop.window();
    desktop.drag();
    desktop.notepad();
    
}
//██████████ INITIALIZE ██████████
$(function(){
  desktop.init();
});