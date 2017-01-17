var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:14' },
    { title: 'Red', duration: '5:01' },
    { title: 'Pink', duration: '3:21'},
    { title: 'Magenta', duration: '2:15'}
  ]
};
 
var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Fits in your pocket', duration: '3:21'},
    { title: 'Can you hear me now?', duration: '3:14' },
    { title: 'Wrong phone number', duration: '2:15'}
  ]
};

var albumBestOfClassicBananasInPyjamas = {
  title: 'Best of Classic Bananas in Pyjamas',
  artist: 'Bananas in Pyjamas',
  label: 'ABC Kids',
  year: '2015',
  albumArtUrl: 'assets/images/album_covers/22.jpg',
  songs: [
    { title: 'Bananas in Pyjamas', duration: '0:57' },
    { title: 'Roll Up, Roll up!', duration: '2:57' },
    { title: 'Jump Up! Spin Round', duration: '3:34'},
    { title: 'It’s Singing Time', duration: '2:39' },
    { title: 'I Love a Noisy Trombone', duration: '1:43'},
    { title: 'We Like Wearing Pyjamas', duration: '1:31'},
    { title: 'Oogie Boogie', duration: '2:33'},
    { title: 'Shake Away the Cobwebs', duration: '1:45'},
    { title: 'Banana Ballet', duration: '1:48'},
    { title: 'Yodellay-hee-hoo!', duration: '2:02'},
    { title: 'In the Jungle', duration: '0:50'},
    { title: 'Food', duration: '7:48'},
    { title: 'Beach Ball, Beach Ball', duration: '1:45'},
    { title: 'Lulu’s Disco', duration: '0:50'},
    { title: 'Old MacDonald', duration: '2:24'},
    { title: 'I Know What You Like', duration: '1:37'},
    { title: 'B-a-n-a-n-a-s', duration: '2:26'},
    { title: 'Crazy, Crazy Conga', duration: '1:35'},
    { title: 'Teddy Bear Twist', duration: '2:29'},
    { title: 'Bye! Bye!', duration: '1:05'},
    { title: 'Bananas In Pyjamas', duration: '0:32'}
  ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
      '<tr class="album-view-song-item">'
    + '  <td class="song-item-number">' + songNumber + '</td>'
    + '  <td class="song-item-title">' + songName + '</td>'
    + '  <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;
 
  return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
 
  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);
  albumSongList.innerHTML = '';
 
  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

window.onload = function() {
  setCurrentAlbum(albumPicasso);

  var albums = [albumPicasso, albumMarconi, albumBestOfClassicBananasInPyjamas];
  var albumListIndex = 1;
  albumImage.addEventListener('click', function(event) {
    setCurrentAlbum(albums[albumListIndex]);
    albumListIndex++;
    if (albumListIndex === albums.length) {
        albumListIndex = 0;
    }
  });
};
