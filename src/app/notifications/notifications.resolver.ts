import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { NotificationsService } from './notifications.service';

@Injectable()
export class NotificationsResolver implements Resolve<any> {

  constructor(private notificationsService: NotificationsService) { }

  resolve() {
    return this.notificationsService.getData();
  }
}
