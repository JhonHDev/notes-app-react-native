import { MainStackParams } from "./MainStackParams";
import { ImportantNotesStackParams } from "./ImportantNotesStackParams";
import { NotificationsStackParams } from "./NotificationsStackParams";

export type BottomTabParams = {
  MainStackNavigator: MainStackParams;
  ImportantNotesStackNavigator: ImportantNotesStackParams;
  NotificationsNavigator: NotificationsStackParams;
};
