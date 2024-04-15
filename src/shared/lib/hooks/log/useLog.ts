import { EventLog, LogParameter } from ".";
import { logEvent } from "firebase/analytics";
import { useFirebase } from "../firebase";
import {
  osName,
  osVersion,
  mobileModel,
  browserName,
} from "react-device-detect";
import * as dayjs from "dayjs";

class Logger {
  debug(message?: any, ...optionalParams: any[]) {
    if (import.meta.env.DEV) {
      console.log(message, optionalParams);
    }
  }

  event(eventLog: EventLog) {
    const { analytics } = useFirebase();
    const params = eventLog.params;
    const defaultParams: LogParameter = {
      platform: "web",
      version: APP_VERSION,
      os: `${osName} ${osVersion}`,
      device: mobileModel,
      timestamp: dayjs().unix(),
      date: dayjs().format("yyyy-MM-dd HH:mm:ss"),
      browser: browserName,
    };

    if (import.meta.env.PROD) {
      logEvent(analytics, eventLog.name, { ...defaultParams, ...params });
    } else {
      console.log(`[EVENT] : ${defaultParams}`);
    }
  }

  error(message?: any, ...optionalParams: any[]) {
    if (import.meta.env.DEV) {
      console.error(message, optionalParams);
    }
  }
}

export const useLog = () => {
  return new Logger();
};
