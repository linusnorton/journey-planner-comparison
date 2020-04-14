export function toTimeString(dateTime: string) {
  return dateTime.split(" ").pop()!.substr(0, 5);
}

export function toMins(seconds: number) {
  return Math.floor(seconds / 60) + " mins";
}