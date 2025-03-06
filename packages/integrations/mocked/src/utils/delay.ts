import { delay } from 'rxjs';

// fake delay on mocked responses to simulate network delays
export const responseDelay = <T>() => delay<T>(Math.random() * 200 + 100);
