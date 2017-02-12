export class DateModel {

  private year: number;
  private month: number;
  private day: number;
  private hour: number;
  private minute: number;
  private second: number;

  getYear(): number {
    return this.year;
  }

  setYear(value: number) {
    this.year = value;
  }

  getMonth(): number {
    return this.month;
  }

  setMonth(value: number) {
    this.month = value;
  }

  setMonthByString(value: string) {
    this.month = this.parseMonth(value);
  }

  getDay(): number {
    return this.day;
  }

  setDay(value: number) {
    this.day = value;
  }

  getHour(): number {
    return this.hour;
  }

  setHour(value: number) {
    this.hour = value;
  }

  getMinute(): number {
    return this.minute;
  }

  setMinute(value: number) {
    this.minute = value;
  }

  getSecond(): number {
    return this.second;
  }

  setSecond(value: number) {
    this.second = value;
  }

  private parseMonth(mont: string): number {

    return 0;
  }
}
