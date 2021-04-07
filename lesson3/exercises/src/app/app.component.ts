import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  upDisabled: boolean = false;
  downDisabled: boolean = false;
  leftDisabled: boolean = false;
  rightDisabled: boolean = false;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
    }
  }

  moveRocket(rocketImage, direction) {
    if(direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } if(direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } if(direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if(direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

  handleLand(rocketImage) {
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px'
    this.height = 0;
    this.width = 0;
  }

  handleMissionAbort(rocketImage) {
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px'
    this.height = 0;
    this.width = 0;
  }

  checkEdge() {
    if (this.height <= 0) {
      this.color = 'orange';
      this.downDisabled = true;
    } else if(this.height >= 340000) {
      this.color = 'orange';
      this.upDisabled = true;
    } else if(this.width <= -20000) {
      this.color = 'orange';
      this.leftDisabled = true;
    } else if(this.width >= 380000) {
      this.color = 'orange';
      this.rightDisabled = true;
    } else {
      this.color = "blue";
      this.upDisabled = false;
      this.downDisabled = false;
      this.leftDisabled = false;
      this.rightDisabled = false;
    }
    
  }
}
