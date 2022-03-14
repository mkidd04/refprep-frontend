import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { ApiService } from 'src/service/api.service';
import {VgApiService} from '@videogular/ngx-videogular/core'
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.css']
})
export class VideoViewerComponent implements OnInit {

  @Input() videoId: string = '';
  videoUrl: string = '';
  videoMeta: Video = {}
  videoTitle: string = '';

  // vgApi: VgApiService;

  constructor(
    private Api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getVideo()
    this.getVideoTitle()
   
  }

  getVideo(): void {
    this.Api.getVideoMetadata(this.videoId)
      .subscribe(info => {
        this.loadVideoInHTMLPlayer()
        console.log(this.videoId)
      })
  }

  loadVideoInHTMLPlayer(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    this.videoUrl = `${this.Api.videoUrl}/${this.videoId}`
    this.disableSeeking()
    this.setCheckpoints()
    this.videoEnd()
    videoPlayer.load()
  }

  disableSeeking(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    var supposedCurrentTime = 0;
    videoPlayer.addEventListener('timeupdate', function(){
      if (!videoPlayer.seeking) {
          supposedCurrentTime = videoPlayer.currentTime;
      }
    });

    videoPlayer.addEventListener('seeking', function() {
      var delta = videoPlayer.currentTime - supposedCurrentTime;
      if (delta > 0.01) {
        videoPlayer.currentTime = supposedCurrentTime;
      }
    });

    videoPlayer.addEventListener('ended', function(){
      supposedCurrentTime = 0;
    })

  }

  setCheckpoints(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    var counter = 1
    videoPlayer.addEventListener('timeupdate', function(){
    if ((Math.round(videoPlayer.currentTime)) == (Math.round(videoPlayer.duration*(.1*counter)))) {
        console.log("10 percent interval reached")
        counter++
      }
    });

  }

  videoEnd(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    videoPlayer.addEventListener('ended', function(){
      console.log("Video Over")
    })

  }

  getVideoTitle(): any{
    this.Api.getVideoMetadata(this.videoId)
    .subscribe(video => {
      this.videoTitle = video.originalname?.replace(/.[^/.]+$/, "") || "Invalid"})
  }


}
