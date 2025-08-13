import { Note } from "../Note";

export type NotificationsStackParams = {
  NotificationsList: undefined;
  SingleNote: { note: Note; isToRestore?: boolean };
};
