var w = 100;
var h = 50;

function setup() {
    this.embedded = createDiv('').size(w, h);
    this.embedded.html('<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380"' +
        'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    );
}

function draw() {

}