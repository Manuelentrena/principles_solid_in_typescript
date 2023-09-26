export type Item<TData, TResult> = {
  data: TData;
  callback: (result: TResult) => void;
};

export type Done<TResult> = (result: TResult) => void;
type Worker<TData, TResult> = (
  item: TData,
  done: (result: TResult) => void
) => void;

export default function Queue<TData, TResult>(worker: Worker<TData, TResult>) {
  let queueItems: Item<TData, TResult>[] = [];
  let isWorking = false;

  function runNext() {
    if (isWorking) {
      return;
    }
    if (queueItems.length === 0) {
      return;
    }

    const item = queueItems.shift();
    if (!item) {
      return;
    }
    isWorking = true;
    worker(item.data, function done(result: TResult) {
      isWorking = false;
      runNext();
      setTimeout(function () {
        item.callback(result);
      }, 0);
    });
  }

  return function (data: TData, callback: (result: TResult) => void) {
    queueItems.push({
      data,
      callback
    });
    setTimeout(runNext, 0);
  };
}
