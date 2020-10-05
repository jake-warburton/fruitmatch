export function LoadState() {
  try {
    const serializedState = localStorage.getItem("state");
    if (typeof serializedState !== "undefined" && serializedState.length > 0) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

export function SaveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    //  Error
  }
}
