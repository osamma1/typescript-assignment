function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum('Artist 1', 'Album 1');
var album2 = makeAlbum('Artist 2', 'Album 2');
var album3 = makeAlbum('Artist 3', 'Album 3', 12);
console.log(album1);
console.log(album2);
console.log(album3);
