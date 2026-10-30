export function PolicyDialog() {
  return (
    <dialog id="policy">
      <button
        className="button outline"
        id="close-policy"
        aria-label="Close policy"
      >
        {"Close ×"}
      </button>
      <h2 id="policy-title"></h2>
      <div id="policy-body"></div>
    </dialog>
  );
}
