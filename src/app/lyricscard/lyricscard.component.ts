import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'lyricscard',
  templateUrl: './lyricscard.component.html',
  styleUrls: ['./lyricscard.component.css']
})
export class LyricscardComponent implements OnInit {
  @Input() musicname: any
  
  music_title: any
  music_lyrics: any
  show: boolean

  constructor() { this.show = false }
  ngOnChanges(changes) {
    if (!changes.musicname.firstChange) {
      const vm = this;
      console.log('Seacrching for ' + this.musicname)
      axios.get('http://api.musixmatch.com/ws/1.1/track.search', {
        params: {
          q: this.musicname,
          apikey: '48df930163e28d8e254f0f3a23a4f3d2'
        }
      })
      .then(function (response) {
        const current_track = response.data.message.body.track_list[0].track;
        vm.music_title = current_track.artist_name + ' - ' + current_track.track_name
        if (current_track.has_lyrics > 0)
          vm.getLyrics(current_track.track_id)
        else {
          vm.music_lyrics = 'Lyrics not available. Perhaps try another song?';
          vm.show = true;
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  getLyrics(trackId: any) {
    const vm = this;
    axios.get('http://api.musixmatch.com/ws/1.1/track.lyrics.get', {
        params: {
          track_id: trackId,
          apikey: '48df930163e28d8e254f0f3a23a4f3d2'
        }
      })
      .then(function (response) {
        vm.music_lyrics = response.data.message.body.lyrics.lyrics_body;
        vm.show = true;
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  ngOnInit() {
  }

}
