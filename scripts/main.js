//██████████ DESKTOP SETUP ██████████
const desktop = {};
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
    //CLOSE WINDOWS (POSSIBLY CLOSES ONLY ONE WINDOW?? 05-03-2:54PM)
    $('.close').click(function(){
        $(this).closest(".window").hide();
        music.pause();
        music.currentTime = 0;
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
//1.NOTEPAD WINDOW SETUP
desktop.notepad = function(){
    let notepadText = 'TODO: Learn JavaScript';
//2.POPULATE TEXTAREA WITH STRING STORED IN NOTEPAD VARIABLE
    $('.notepadTextArea').val(`${notepadText}`);
//3.PRESS SAVE TO SAVE TEXTAREA TO NOTEPAD VARIABLE (OVERWRITE)
    //TODO: RESOLVE SCOPE ISSUE FOR CLOSING WINDOW
    $('.save').click(function(){
        notepadText = $('.notepadTextArea').val();
    });
    $('.notepadClose').click(function(){
            $('.notepadTextArea').val(`${notepadText}`);
        });
//4.IF ICON IS TRASHED, KILL WINDOW
    $(".notepadIcon").on("remove", function () {
        $('.notepadWindow').hide();
    });
}
//██████████ MUSIC APP ██████████
//MUSIC WINDOW SETUP
desktop.musicPlayer = function(){
    //1.SETUP MUSIC CONTROLLS
    $music = $('audio');
    music = $music[0];
    $('.musicControllsPlay').click(function(){
        music.play();
    });
    $('.musicControllsPause').click(function(){
        music.pause();
    });
    $('.musicControllsStop').click(function(){
        music.pause();
        music.currentTime = 0;
    });
    //2.WRITE MUSIC INFORMATION, POPULATE LIBRARY (object loops???)
    musicLibrary = {
        hawkwind: {
            audioMP3: `AssaultAndBattery.mp3`,
            audioOGG: `AssaultAndBattery.ogg`,
            album: `Album-WarriorOnTheEdgeOfTime.jpg`,
            title: `Assault And Battery`,
            artist: `Hawkwind`,
            class: `hwab`
        },
        sistersofmercy: {
            audioMP3: `LucretiaMyReflection.mp3`,
            audioOGG: `LucretiaMyReflection.ogg`,
            album: `Album-Floodland.jpg`,
            title: `Lucretia My Reflection`,
            artist: `Sisters of Mercy`,
            class: `somlmr`
        },
        flockofseagulls: {
            audioMP3: `IRanSoFarAway.mp3`,
            audioOGG: `IRanSoFarAway.ogg`,
            album: `Album-IRan.jpg`,
            title: `I Ran (So Far Away)`,
            artist: `Flock of Seagulls`,
            class: `fosir`
        },
        styx: {
            audioMP3: `MrRoboto.mp3`,
            audioOGG: `MrRoboto.ogg`,
            album: `Album-MrRoboto.jpg`,
            title: `Mr. Roboto`,
            artist: `Styx`,
            class: `smr`
        }
    }
    $('.musicLibrary').append(`<li class="${musicLibrary.hawkwind.class}">${musicLibrary.hawkwind.title} - ${musicLibrary.hawkwind.artist}</li>`);
    $('.musicLibrary').append(`<li class="${musicLibrary.flockofseagulls.class}">${musicLibrary.flockofseagulls.title} - ${musicLibrary.flockofseagulls.artist}</li>`);
    $('.musicLibrary').append(`<li class="${musicLibrary.sistersofmercy.class}">${musicLibrary.sistersofmercy.title} - ${musicLibrary.sistersofmercy.artist}</li>`);
    $('.musicLibrary').append(`<li class="${musicLibrary.styx.class}">${musicLibrary.styx.title} - ${musicLibrary.styx.artist}</li>`);
    //3.ASSIGN LIBRARY FUNCTIONALITY, REPLACE AUDIO WITH LINK WHEN CLICKED AND PLAY SONG
    $('.hwab').click(function(){
        $('.musicAlbumArt').attr("src", `images/${musicLibrary.hawkwind.album}`);
        $('.musicTitle').text(`${musicLibrary.hawkwind.title}`);
        $('.musicArtist').text(`${musicLibrary.hawkwind.artist}`);
        $('audio').attr("src", `audio/${musicLibrary.hawkwind.audioMP3}`);
        music.pause();
        music.play();
    });
    $('.somlmr').click(function(){
        $('.musicAlbumArt').attr("src", `images/${musicLibrary.sistersofmercy.album}`);
        $('.musicTitle').text(`${musicLibrary.sistersofmercy.title}`);
        $('.musicArtist').text(`${musicLibrary.sistersofmercy.artist}`);
        $('audio').attr("src", `audio/${musicLibrary.sistersofmercy.audioMP3}`);
        music.pause();
        music.play();
    });
    $('.fosir').click(function(){
        $('.musicAlbumArt').attr("src", `images/${musicLibrary.flockofseagulls.album}`);
        $('.musicTitle').text(`${musicLibrary.flockofseagulls.title}`);
        $('.musicArtist').text(`${musicLibrary.flockofseagulls.artist}`);
        $('audio').attr("src", `audio/${musicLibrary.flockofseagulls.audioMP3}`);
        music.pause();
        music.play();
    });
    $('.smr').click(function(){
        $('.musicAlbumArt').attr("src", `images/${musicLibrary.styx.album}`);
        $('.musicTitle').text(`${musicLibrary.styx.title}`);
        $('.musicArtist').text(`${musicLibrary.styx.artist}`);
        $('audio').attr("src", `audio/${musicLibrary.styx.audioMP3}`);
        music.pause();
        music.play();
    });
    //4.ASSIGN STARTING MUSIC
        $('.musicAlbumArt').attr("src", `images/${musicLibrary.styx.album}`);
        $('.musicTitle').text(`${musicLibrary.styx.title}`);
        $('.musicArtist').text(`${musicLibrary.styx.artist}`);
        $('audio').attr("src", `audio/${musicLibrary.styx.audioMP3}`);
    //5.IF ICON IS TRASHED, KILL WINDOW
    $(".musicIcon").on("remove", function () {
        $('.musicWindow').hide();
        music.pause();
        music.currentTime = 0;
    });
}

//██████████ INIT SETUP ██████████
desktop.init = function(){
    desktop.window();
    desktop.drag();
    desktop.notepad();
    desktop.musicPlayer();
    desktop.toolbarClock();
    
}
//██████████ INITIALIZE ██████████
$(function(){
  desktop.init();
});  