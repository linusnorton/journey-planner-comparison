export function toTimeString(dateTime: string) {
  return dateTime.split(" ").pop()!.substr(0, 5);
}
