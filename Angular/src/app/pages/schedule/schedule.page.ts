import { Component, OnInit } from '@angular/core';
import { NewTaskPage } from '../task/new-task/new-task.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  tasks: any[] = [
    {
      hour: 1,
      colorHex: '#F9BE7C',
      title: 'Final Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      hour: 5,
      colorHex: '#e77480',
      title: 'Capstone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      hour: 8,
      colorHex: '#7494e7',
      title: 'Designing.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      hour: 1,
      colorHex: '#459ea1',
      title: 'Thesis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

  ];


  constructor(
    public modalController: ModalController
    ) { }

  ngOnInit() {
  }

  async create() {
    const modal = await this.modalController.create({
      component: NewTaskPage
    });
    return await modal.present();
  }

  close() {
    this.modalController.dismiss();
  }

}
