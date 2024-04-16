const testMessages = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    userName: "SuperUser",
    text: "Первый!",
    date: "2011-10-05T14:48:00.000Z"
  },
  {
    id: "163deb4d-3b7d-4bad-9bdd-2b0d7b3ddu4l",
    userName: "Guest001",
    text: "Всем привет)",
    date: "2011-10-06T12:54:00.000Z"
  }
];

export const getMessages = () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => resolve(testMessages), 100);
  });
};
