var library = {
    tracks: {
        t01: {
            id: "t01",
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
        },
        t02: {
            id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
        },
        t03: {
            id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
        }
    },
    playlists: {
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    },
    printPlaylists : function() {
        for (var lists in this.playlists) {
            console.log(lists + ": " + this.playlists[lists].name + " - " + this.playlists[lists].tracks.length + " tracks");
        }
    },
    printTracks : function() {
        for (var trax in this.tracks) {
            console.log(trax + ": " + this.tracks[trax].name + " by " + this.tracks[trax].artist + " (" + this.tracks[trax].album + ")");
        }
    },
    printPlaylist : function(playlistId) {
        console.log(playlistId + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
        for (var tricks in this.playlists[playlistId].tracks) {
            console.log(this.playlists[playlistId].tracks[tricks] + ": " + this.tracks[this.playlists[playlistId].tracks[tricks]].name + " by " + this.tracks[this.playlists[playlistId].tracks[tricks]].artist + " (" + this.tracks[this.playlists[playlistId].tracks[tricks]].album + ")")
        }
    },
    addTrackToPlaylist : function(trackId, playlistId) {
        library.playlists[playlistId].tracks.push(trackId)
        console.log(library.playlists[playlistId])
    },
    uid : function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    addTrack : function(name, artist, album) {
        var trackId = uid();
        library.tracks[trackId] = {
            id: trackId,
            name: name,
            album: album
        };
    },
    addPlaylist : function(name) {
        var playlistId = uid();
        library.playlists[playlistId] = {
            id: playlistId,
            name: name,
            tracks: []
        };

    }

} // end of object


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
