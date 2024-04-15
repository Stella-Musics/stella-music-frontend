export interface EventLog {
  name: string;
  params: LogParameter;
}

export type LogParameter = { [key: string]: any };

export class EventLogBuilder {
  name: string;
  params: LogParameter;

  constructor(name: string, params: LogParameter) {
    this.name = name;
    this.params = params;
  }

  set(key: string, value: any): EventLogBuilder {
    this.params[key] = value;
    return this;
  }
}
