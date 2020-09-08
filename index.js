
timebase=16;
actx=new AudioContext();
osc=actx.createOscillator();
gain=actx.createGain();
gain.gain.value=0;
osc.type="sawtooth";
osc.start();
osc.connect(gain).connect(actx.destination);

function Callback(ev){
    osc.detune.setValueAtTime((ev.n-69)*100,ev.t);
    gain.gain.setTargetAtTime(0.5,ev.t,0.005);
    gain.gain.setTargetAtTime(0,ev.g,0.1);
}
function Play(){
    actx.resume();
    document.getElementById("proll").play(actx,Callback);
}
function Layout(k){
    switch(k.id){
    case "xrange":
        document.getElementById("proll").xrange=k.value*timebase;
        break;
    case "xoffset":
        document.getElementById("proll").xoffset=k.value*timebase;
        break;
    case "yrange":
        document.getElementById("proll").yrange=k.value;
        break;
    case "yoffset":
        document.getElementById("proll").yoffset=k.value;
        break;
    }
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});
}
    // JavaScript code to avoid dropdown
    // menu close

    // Clicking dropdown button will toggle display
    // function btnToggle() {
    //     document.getElementById("dropdownMenuButton").classList.toggle("show");
    // }
    $('.btn-notes').on('click', function(){
        $('.btn-notes').removeClass('selected');
        $(this).addClass('selected');
    });

    $(document).ready(function(){   //this makes it so i could make the tabbing back and forth work again added this last
      $(".nav-tabs a").click(function(){
        $(this).tab('show');
      });
    });
    // Prevents menu from closing when clicked inside
    document.getElementById("myTab").addEventListener('click', function (event) {
        // alert("click outside");
        event.stopPropagation();
    });

    // Closes the menu in the event of outside click
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-item')) {

            var dropdowns =
            document.getElementsByClassName("dropdownmenu");

            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    document.getElementById("myTab2").addEventListener('click', function (event) {
        // alert("click outside");
        event.stopPropagation();
    });

    // Closes the menu in the event of outside click
    window.onclick = function(event) {
        if (!event.target.matches('.tab-content')) {

            var dropdowns =
            document.getElementsByClassName("dropdownmenu");

            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
