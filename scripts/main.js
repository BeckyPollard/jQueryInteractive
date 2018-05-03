//██████████ DESKTOP SETUP ██████████
let desktop = {};
//██████████ DRAG FUNCTIONALITY ██████████
desktop.drag = function(){
    $('.dragWindow').draggable({ containment: ".computer", scroll: false, handle: ".appToolBar" });
    $('.dragIcon').draggable({ containment: ".computer", scroll: false});
    $('.trashIcon').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    })
};
//██████████ WINDOWS ██████████
desktop.window = function(){
    //CLOSE WINDOWS (POSSIBLY CLOSES ONLY ONE WINDOW?? 05-03-2:54PM)
    $('.close').click(function(){
        $(this).closest(".window").hide();
    })
    //DBLCLICK ICONS
    $('.notepadIcon').dblclick(function(){
        $('.notepadWindow').show().find("textarea").focus();
    })
}
//██████████ NOTEPAD ██████████
//NOTEPAD WINDOW SETUP
desktop.notepad = function(){
    let notepadText = 'TEST';
//2.POPULATE TEXTAREA WITH STRING STORED IN NOTEPAD VARIABLE
    $('.notepadTextArea').val(`${notepadText}`);
    console.log(notepadText);
//3.PRESS SAVE TO SAVE TEXTAREA TO NOTEPAD VARIABLE (OVERWRITE)
    $('.notepadWindow.appToolBar.save').click(function(){
        console.log('SAVE SAVE SAAAAVE');
    })
//4.PRESS X TO CLEAR TEXT AND HIDE .memo
}
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