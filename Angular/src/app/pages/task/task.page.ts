import { Component, OnInit } from '@angular/core';
import { SchedulePage } from '../schedule/schedule.page';
import { ModalController } from '@ionic/angular';

export interface Task {
  title: string;
  icon: string;
  count_now: number;
  count_started: number;
  color: string;
}

export interface Project {
  title: string;
  subTitle: string;
  colorHex: string;
  color: string;
  percentage: number;
}


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  tasks: Task[] =
    [
      {
        title: 'To Do', count_now: 4, count_started: 4, icon: 'time-outline', color: 'danger'
      },
      {
        title: 'In Progress', count_now: 1, count_started: 1, icon: 'refresh-outline', color: 'primary'
      },
      {
        title: 'Done', count_now: 6, count_started: 6, icon: 'play-forward-outline', color: 'blue'
      }
    ];

  projects: Project[] = [
    {
      title: 'Thesis', subTitle: '9 hours progress', percentage: 25, color: 'success', colorHex: '#309397'
    },
    {
      title: 'Capstone', subTitle: '40 hours progress', percentage: 75, color: 'danger', colorHex: '#e46472'
    },
    {
      title: 'Final Project', subTitle: '2 hours progress', percentage: 5, color: 'primary', colorHex: '#F9BE7C'
    },
    {
      title: 'Designing', subTitle: '56 hours progress', percentage: 95, color: 'blue', colorHex: '#6488e4'
    }
  ];


  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }


  async openSchebdule() {
    const modal = await this.modalController.create({
      component: SchedulePage
    });
    return await modal.present();
  }

}
