// export interface IEventBus {
//   isOpen: boolean;
//   message: string;
//   type: 'error' | 'success';
// }
// export enum WindowEvents {
//   SNACKBAR = 'snackbar',
// }
export const EventBusService = {
  fire: (event, body) => {
    const customEvent = new CustomEvent(event, body);

    window.dispatchEvent(customEvent);
  },
  subscribe: (event, listener) => {
    window.addEventListener(event, listener);
  },
  unsubscribe: (event, listener) => {
    window.removeEventListener(event, listener);
  },
};